/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 Accessors for Global Constants.
 */
@interface FBConfiguration : NSObject

/*! If set to YES will ask TestManagerDaemon for element visibility */
+ (void)setShouldUseTestManagerForVisibilityDetection:(BOOL)value;
+ (BOOL)shouldUseTestManagerForVisibilityDetection;

/*! If set to YES will use compact (standards-compliant) & faster responses */
+ (void)setShouldUseCompactResponses:(BOOL)value;
+ (BOOL)shouldUseCompactResponses;

/*! If shouldUseCompactResponses == NO, is the comma-separated list of fields to return with each element. Defaults to "type,label". */
+ (void)setElementResponseAttributes:(NSString *)value;
+ (NSString *)elementResponseAttributes;

/*! Disables remote query evaluation making Xcode 9.x tests behave same as Xcode 8.x test */
+ (void)disableRemoteQueryEvaluation;

/*! Disables attribute key path analysis, which will cause XCTest on Xcode 9.x to ignore some elements */
+ (void)disableAttributeKeyPathAnalysis;

/* The maximum typing frequency for all typing activities */
+ (void)setMaxTypingFrequency:(NSUInteger)value;
+ (NSUInteger)maxTypingFrequency;

/* Use singleton test manager proxy */
+ (void)setShouldUseSingletonTestManager:(BOOL)value;
+ (BOOL)shouldUseSingletonTestManager;

/* Whether to wait for quiescence on application startup */
+ (void)setShouldWaitForQuiescence:(BOOL)value;
+ (BOOL)shouldWaitForQuiescence;

/**
 * Extract switch value from arguments
 *
 * @param arguments Array of strings with the command-line arguments, e.g. @[@"--port", @"12345"].
 * @param key Switch to look up value for, e.g. @"--port".
 *
 * @return Switch value or nil if the switch is not present in arguments.
 */
+ (NSString* _Nullable)valueFromArguments: (NSArray<NSString *> *)arguments forKey: (NSString*)key;

/**
 The quality of the screenshots generated by the screenshots broadcaster, expressed
 as a value from 0 to 100. The value 0 represents the maximum compression
 (or lowest quality) while the value 100 represents the least compression (or best
 quality). The default value is 25.
 */
+ (NSUInteger)mjpegServerScreenshotQuality;
+ (void)setMjpegServerScreenshotQuality:(NSUInteger)quality;

/**
 The framerate at which the background screenshots broadcaster should broadcast
 screenshots in range 1..60. The default value is 10 (Frames Per Second).
 Setting zero value will cause the framerate to be at its maximum possible value.
 */
+ (NSUInteger)mjpegServerFramerate;
+ (void)setMjpegServerFramerate:(NSUInteger)framerate;

/**
 The range of ports that the HTTP Server should attempt to bind on launch
 */
+ (NSRange)bindingPortRange;

/**
 The port number where the background screenshots broadcaster is supposed to run
 */
+ (NSInteger)mjpegServerPort;

/**
 YES if verbose logging is enabled. NO otherwise.
 */
+ (BOOL)verboseLoggingEnabled;

+ (BOOL)shouldLoadSnapshotWithAttributes;

@end

NS_ASSUME_NONNULL_END
