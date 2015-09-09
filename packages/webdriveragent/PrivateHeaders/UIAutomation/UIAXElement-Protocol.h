//
//     Generated by class-dump 3.5 (64 bit).
//
//     class-dump is Copyright (C) 1997-1998, 2000-2001, 2004-2013 by Steve Nygard.
//

@class NSArray, NSDictionary, NSNumber, NSString, NSValue, UIAXElement;

@protocol UIAXElement
+ (NSString *)stringForTraits:(unsigned long long)arg1;
+ (NSString *)stringForAXNotification:(int)arg1;
+ (NSString *)stringForAXError:(int)arg1;
+ (id)uiaxAccessibilityUIServerElement;
+ (id)uiaxFocusedApplicationElement;
+ (id)uiaxSpringBoardElement;
+ (id)uiaxSystemApplicationElement;
+ (id)uiaxSystemWideElement;
+ (id)uiaxElementAtPosition:(struct CGPoint)arg1;
+ (id)uiaxApplicationAtPosition:(struct CGPoint)arg1;
+ (id)uiaxElementWithAXUIElementRef:(void *)arg1;
+ (_Bool)unregisterObserver:(void *)arg1 forAXNotification:(int)arg2;
+ (_Bool)registerObserver:(void *)arg1 forAXNotification:(int)arg2;
+ (_Bool)registerObserver:(void *)arg1 forAXNotifications:(_Bool)arg2;
- (NSArray *)ancestry;
- (NSArray *)descendantsWithAttributes:(NSDictionary *)arg1 traits:(unsigned long long)arg2;
- (UIAXElement *)descendantWithTestingTrait:(NSString *)arg1;
- (NSArray *)descendants;
- (UIAXElement *)childWithTestingTrait:(NSString *)arg1;
- (NSArray *)children;
- (UIAXElement *)responder;
- (UIAXElement *)parent;
- (UIAXElement *)firstElementOfAttribute:(int)arg1 withValue:(id)arg2 forAttribute:(int)arg3;
- (NSString *)description;
- (NSValue *)centerPoint;
- (NSValue *)rect;
- (NSValue *)hitpoint;
- (unsigned long long)traits;
- (NSNumber *)traitsNumber;
- (NSString *)stringForAllKnownAttributes;
- (NSString *)stringForAttributes:(NSArray *)arg1;
- (NSDictionary *)valuesForAllKnownAttributes;
- (_Bool)checkIsValid;
- (_Bool)isValid;
- (int)axError;
- (int)pid;
- (_Bool)performAXAction:(int)arg1 withValue:(id)arg2;
- (_Bool)performAXAction:(int)arg1;
- (id)valueForAttribute:(int)arg1 parameter:(id)arg2;
- (NSDictionary *)valuesForAttributes:(NSArray *)arg1;
- (_Bool)setValue:(id)arg1 forAttribute:(int)arg2;
- (id)valueForAttribute:(int)arg1;
- (struct __AXUIElement *)axuiElementRef;
@end

