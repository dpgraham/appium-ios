//
//     Generated by class-dump 3.5 (64 bit).
//
//     class-dump is Copyright (C) 1997-1998, 2000-2001, 2004-2013 by Steve Nygard.
//

#import <XCTWebDriverAgentLib/CDStructures.h>

#import <XCTest/XCUIElementAttributes.h>

@class NSArray, NSDictionary, NSString, XCAccessibilityElement, XCUIApplication;

@interface XCElementSnapshot : NSObject <XCUIElementAttributes, NSSecureCoding>
{
    NSString *_identifier;
    id _value;
    NSString *_placeholderValue;
    BOOL _enabled;
    BOOL _selected;
    BOOL _isMainWindow;
    BOOL _hasKeyboardFocus;
    BOOL _hasFocus;
    XCUIApplication *_application;
    unsigned long long _generation;
    NSString *_title;
    NSString *_label;
    unsigned long long _elementType;
    long long _horizontalSizeClass;
    long long _verticalSizeClass;
    XCAccessibilityElement *_accessibilityElement;
    XCAccessibilityElement *_parentAccessibilityElement;
    XCElementSnapshot *_parent;
    NSArray *_children;
    unsigned long long _traits;
    NSArray *_userTestingAttributes;
    NSDictionary *_additionalAttributes;
    struct CGRect _frame;
}
@property BOOL hasFocus; // @synthesize hasFocus=_hasFocus;
@property BOOL hasKeyboardFocus; // @synthesize hasKeyboardFocus=_hasKeyboardFocus;
@property(copy) NSDictionary *additionalAttributes; // @synthesize additionalAttributes=_additionalAttributes;
@property(copy) NSArray *userTestingAttributes; // @synthesize userTestingAttributes=_userTestingAttributes;
@property unsigned long long traits; // @synthesize traits=_traits;
@property BOOL isMainWindow; // @synthesize isMainWindow=_isMainWindow;
@property(copy) NSArray *children; // @synthesize children=_children;
@property XCElementSnapshot *parent; // @synthesize parent=_parent;
@property(retain) XCAccessibilityElement *parentAccessibilityElement; // @synthesize parentAccessibilityElement=_parentAccessibilityElement;
@property(retain) XCAccessibilityElement *accessibilityElement; // @synthesize accessibilityElement=_accessibilityElement;
@property(getter=isSelected) BOOL selected; // @synthesize selected=_selected;
@property(getter=isEnabled) BOOL enabled; // @synthesize enabled=_enabled;
@property(copy) NSString *label; // @synthesize label=_label;
@property(copy) NSString *title; // @synthesize title=_title;
@property struct CGRect frame; // @synthesize frame=_frame;
@property(readonly) NSArray *suggestedHitpoints;
@property(readonly) struct CGRect visibleFrame;
@property(readonly) XCElementSnapshot *scrollView;
@property(readonly, copy) NSString *truncatedValueString;
@property(readonly, copy) NSString *compactDescription;
@property(readonly, copy) NSString *pathDescription;
@property(readonly) NSString *recursiveDescriptionIncludingAccessibilityElement;
@property(readonly) NSString *recursiveDescription;
@property(readonly, copy) NSArray *identifiers;
@property(nonatomic) unsigned long long generation; // @synthesize generation=_generation;
@property(nonatomic) XCUIApplication *application; // @synthesize application=_application;

- (id)_uniquelyIdentifyingObjectiveCCode;
- (id)_uniquelyIdentifyingSwiftCode;
- (BOOL)_isAncestorOfElement:(id)arg1;
- (BOOL)_isDescendantOfElement:(id)arg1;
- (id)_rootElement;
- (BOOL)_frameFuzzyMatchesElement:(id)arg1;
- (BOOL)_fuzzyMatchesElement:(id)arg1;
- (BOOL)_matchesElement:(id)arg1;
- (id)_allDescendants;
- (BOOL)hasDescendantMatchingFilter:(CDUnknownBlockType)arg1;
- (id)descendantsByFilteringWithBlock:(BOOL(^)(XCElementSnapshot *snapshot))block;
- (id)elementSnapshotMatchingAccessibilityElement:(id)arg1;
- (void)enumerateDescendantsUsingBlock:(void(^)(XCElementSnapshot *snapshot))block;
- (id)recursiveDescriptionWithIndent:(id)arg1 includeAccessibilityElement:(BOOL)arg2;
- (id)init;

@end
