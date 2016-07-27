/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "ViewController.h"
#import <UIKit/UIKit.h>
@import ContactsUI;

@interface ViewController () <CNContactPickerDelegate>

@property (strong, nonatomic) CNContactPickerViewController *picker;

@end

@implementation ViewController

- (IBAction)deadlockApp:(id)sender
{
  dispatch_sync(dispatch_get_main_queue(), ^{
    // This will never execute
  });
}

- (IBAction)didTapButton:(UIButton *)button
{
  button.selected = !button.selected;
}

- (IBAction)didTapContacts:(UIButton *)button
{
  _picker = [[CNContactPickerViewController alloc] init];
  self.picker.delegate = self;
  [self.navigationController presentViewController:self.picker animated:YES completion:nil];
}



- (void)contactPicker:(CNContactPickerViewController *)picker didSelectContact:(CNContact *)contact
{
  [self.navigationController dismissViewControllerAnimated:YES completion:nil];
}

@end
