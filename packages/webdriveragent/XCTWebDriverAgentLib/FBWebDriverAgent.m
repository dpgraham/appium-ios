/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "FBWebDriverAgent.h"

#import <CoreGraphics/CoreGraphics.h>

#import "FBWebServer.h"

@interface FBWebDriverAgent ()
@property (atomic, strong, readwrite) FBWebServer *server;
@end

@implementation FBWebDriverAgent

+ (instancetype)sharedAgent
{
  static id agent;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    agent = [[self alloc] init];
  });
  return agent;
}

- (void)start
{
  NSLog(@"Built at %s %s", __DATE__, __TIME__);
  self.server = [[FBWebServer alloc] init];
  [self.server startServing];
  [[NSRunLoop mainRunLoop] run];
}

@end
