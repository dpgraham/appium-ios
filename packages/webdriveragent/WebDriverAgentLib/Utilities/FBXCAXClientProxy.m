/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "FBXCAXClientProxy.h"

#import "FBLogger.h"
#import "XCAXClient_iOS.h"
#import "XCUIDevice.h"

static id FBAXClient = nil;

@implementation FBXCAXClientProxy

+ (instancetype)sharedClient
{
  static FBXCAXClientProxy *instance = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    instance = [[self alloc] init];
    if ([XCAXClient_iOS.class respondsToSelector:@selector(sharedClient)]) {
      FBAXClient = [XCAXClient_iOS sharedClient];
    } else {
      FBAXClient = [XCUIDevice.sharedDevice accessibilityInterface];
    }
  });
  return instance;
}

- (NSArray<XCAccessibilityElement *> *)activeApplications
{
  return [FBAXClient activeApplications];
}

- (XCAccessibilityElement *)systemApplication
{
  return [FBAXClient systemApplication];
}

- (NSDictionary *)defaultParameters
{
  return [FBAXClient defaultParameters];
}

- (void)notifyWhenNoAnimationsAreActiveForApplication:(XCUIApplication *)application
                                                reply:(void (^)(void))reply
{
  [FBAXClient notifyWhenNoAnimationsAreActiveForApplication:application reply:reply];
}

- (NSDictionary *)attributesForElementSnapshot:(XCElementSnapshot *)snapshot
                                 attributeList:(NSArray *)attributeList
{
  if ([FBAXClient respondsToSelector:@selector(attributesForElementSnapshot:attributeList:)]) {
    return [FBAXClient attributesForElementSnapshot:snapshot attributeList:attributeList];
  }
  // Xcode 10.2+
  // FIXME: This call never succeeds
  // FIXME: Figure out what exact attributes and in which format it supports and expects
  // Actually, it was never a good idea to request XCTest for snapshot attributes in runtime.
  // This is why Apple has removed the above accessor from the accessibility interface.
  NSError *error = nil;
  NSDictionary *result = [(id)FBAXClient attributesForElement:[snapshot accessibilityElement]
                                                   attributes:attributeList
                                                        error:&error];
  if (error) {
    [FBLogger logFmt:@"Cannot retrieve the list of element attributes: %@", error.description];
  }
  return result;
}

- (BOOL)hasProcessTracker
{
  static BOOL hasTracker;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    hasTracker = [FBAXClient valueForKey:@"applicationProcessTracker"] != nil;
  });
  return hasTracker;
}

- (XCUIApplication *)monitoredApplicationWithProcessIdentifier:(int)pid
{
  return [[FBAXClient applicationProcessTracker] monitoredApplicationWithProcessIdentifier:pid];
}

@end
