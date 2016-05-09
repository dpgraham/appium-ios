/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "FBKeyboard.h"


#import "FBApplication.h"
#import "FBErrorBuilder.h"
#import "FBRunLoopSpinner.h"

#import "XCUIElement+Utilities.h"
#import "XCTestDriver.h"

@implementation FBKeyboard

+ (BOOL)typeText:(NSString *)text error:(NSError **)error
{
  if (![FBKeyboard waitUntilVisibleWithError:error]) {
    return NO;
  }
  __block BOOL didSucceed = NO;
  __block NSError *innerError;
  [FBRunLoopSpinner spinUntilCompletion:^(void(^completion)()){
    [[XCTestDriver sharedTestDriver].managerProxy _XCT_sendString:text completion:^(NSError *typingError){
      didSucceed = (typingError == nil);
      innerError = typingError;
      completion();
    }];
  }];
  if (error) {
    *error = innerError;
  }
  return didSucceed;
}

+ (BOOL)waitUntilVisibleWithError:(NSError **)error
{
  XCUIElement *keyboard =
  [[[[FBRunLoopSpinner new]
     timeout:5]
    timeoutErrorMessage:@"Keyboard is not present"]
   spinUntilNotNil:^id{
     XCUIElement *foundKeyboard = [[FBApplication activeApplication].query descendantsMatchingType:XCUIElementTypeKeyboard].element;
     return (foundKeyboard.exists ? foundKeyboard : nil);
   }
   error:error];

  if (![keyboard waitUntilFrameIsStable]) {
    [[[FBErrorBuilder builder]
      withDescription:@"Timeout waiting for keybord to stop animating"]
     buildError:error];
    return NO;
  }
  return YES;
}

+ (BOOL)hideWithError:(NSError **)error
{
  XCUIElement *element = [[FBApplication activeApplication].windows elementBoundByIndex:0];
  XCUIElementQuery *allElements = [element descendantsMatchingType:XCUIElementTypeAny];
  XCUIElement *activeElement = [allElements elementMatchingPredicate:[NSPredicate predicateWithFormat:@"hasKeyboardFocus == YES"]];
  if (!activeElement.exists) {
    [[[FBErrorBuilder builder]
      withDescription:@"There is no element with keyboard focus"]
     buildError:error];
    return NO;
  }
  [element tap];
  return YES;
}

@end
