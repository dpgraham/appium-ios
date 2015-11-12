/* Generated by RuntimeBrowser
   Image: /System/Library/PrivateFrameworks/AccessibilityUtilities.framework/AccessibilityUtilities
 */

@interface AXValidationManager : NSObject {
    NSMutableArray *_consoleErrorMessages;
    BOOL _debugBuild;
    BOOL _forceDoNotReport;
    unsigned int _numberOfValidationErrors;
    NSString *_overrideProcessName;
    BOOL _shouldCrashOnError;
    BOOL _shouldLogToConsole;
    BOOL _shouldReportToServer;
    <AXValidationReportingServices> *_validationReportingServices;
    NSString *_validationTargetName;
}

@property (nonatomic, retain) NSMutableArray *consoleErrorMessages;
@property (getter=isDebugBuild, nonatomic) BOOL debugBuild;
@property (nonatomic) BOOL forceDoNotReport;
@property (nonatomic) unsigned int numberOfValidationErrors;
@property (nonatomic, copy) NSString *overrideProcessName;
@property (nonatomic) BOOL shouldCrashOnError;
@property (nonatomic) BOOL shouldLogToConsole;
@property (nonatomic) BOOL shouldReportToServer;
@property (nonatomic, retain) <AXValidationReportingServices> *validateionReportingServices;
@property (nonatomic, copy) NSString *validationTargetName;

+ (id)sharedInstance;

- (BOOL)_client:(id)arg1 validateClass:(id)arg2 hasClassMethod:(id)arg3 withFullSignature:(char *)arg4 argList:(void*)arg5;
- (BOOL)_client:(id)arg1 validateClass:(id)arg2 hasMethod:(id)arg3 methodType:(int)arg4;
- (BOOL)_client:(id)arg1 validateClass:(id)arg2 hasMethod:(id)arg3 methodType:(int)arg4 returnType:(id)arg5 arguments:(id)arg6;
- (void)_printConsoleReport:(BOOL)arg1 isDelayed:(BOOL)arg2;
- (BOOL)client:(id)arg1 validateClass:(id)arg2;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 conformsToProtocol:(id)arg3;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasClassMethod:(id)arg3;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasClassMethod:(id)arg3 withFullSignature:(char *)arg4;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasInstanceMethod:(id)arg3;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasInstanceMethod:(id)arg3 withFullSignature:(char *)arg4;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasInstanceMethod:(id)arg3 withFullSignature:(char *)arg4 argList:(void*)arg5;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasInstanceVariable:(id)arg3;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasInstanceVariable:(id)arg3 withType:(char *)arg4;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasProperty:(id)arg3;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 hasProperty:(id)arg3 withType:(char *)arg4;
- (BOOL)client:(id)arg1 validateClass:(id)arg2 isKindOfClass:(id)arg3;
- (BOOL)client:(id)arg1 validateProtocol:(id)arg2 hasMethod:(id)arg3 isInstanceMethod:(BOOL)arg4 isRequired:(BOOL)arg5;
- (BOOL)client:(id)arg1 validateProtocol:(id)arg2 hasOptionalClassMethod:(id)arg3;
- (BOOL)client:(id)arg1 validateProtocol:(id)arg2 hasOptionalInstanceMethod:(id)arg3;
- (BOOL)client:(id)arg1 validateProtocol:(id)arg2 hasProperty:(id)arg3;
- (BOOL)client:(id)arg1 validateProtocol:(id)arg2 hasRequiredClassMethod:(id)arg3;
- (BOOL)client:(id)arg1 validateProtocol:(id)arg2 hasRequiredInstanceMethod:(id)arg3;
- (id)consoleErrorMessages;
- (void)dealloc;
- (BOOL)forceDoNotReport;
- (id)init;
- (void)installSafeCategories:(id /* block */)arg1 afterDelay:(double)arg2 validationTargetName:(id)arg3 overrideProcessName:(id)arg4;
- (void)installSafeCategories:(id /* block */)arg1 afterDelay:(double)arg2 validationTargetName:(id)arg3 overrideProcessName:(id)arg4 forceDoNotReport:(BOOL)arg5;
- (BOOL)installSafeCategory:(id)arg1;
- (BOOL)installSafeCategory:(id)arg1 canInteractWithTargetClass:(BOOL)arg2;
- (BOOL)isDebugBuild;
- (unsigned int)numberOfValidationErrors;
- (id)overrideProcessName;
- (void)performValidations:(id /* block */)arg1 withPreValidationHandler:(id /* block */)arg2 postValidationHandler:(id /* block */)arg3;
- (void)performValidations:(id /* block */)arg1 withPreValidationHandler:(id /* block */)arg2 postValidationHandler:(id /* block */)arg3 safeCategoryInstallationHandler:(id /* block */)arg4;
- (void)sendExceptionForInstallingSafeCategory:(id)arg1 onTarget:(id)arg2 overrideProcessName:(id)arg3;
- (void)sendExceptionForSafeBlock:(id)arg1 overrideProcessName:(id)arg2;
- (void)sendExceptionForSafeIVarKey:(id)arg1 onTarget:(id)arg2 overrideProcessName:(id)arg3;
- (void)sendExceptionForSafeValueKey:(id)arg1 onTarget:(id)arg2 overrideProcessName:(id)arg3;
- (void)sendFailedAssertionWithErrorMessage:(id)arg1 overrideProcessName:(id)arg2;
- (void)sendFailedTestCase:(id)arg1 withTag:(id)arg2 overrideProcessName:(id)arg3;
- (void)sendGenericReport:(id)arg1 withTag:(id)arg2 overrideProcessName:(id)arg3;
- (void)sendValidateExceptionForClass:(id)arg1 conformsToProtocol:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForClass:(id)arg1 errorMessage:(id)arg2 overrideProcessName:(id)arg3;
- (void)sendValidateExceptionForClass:(id)arg1 hasClassMethod:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForClass:(id)arg1 hasInstanceMethod:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForClass:(id)arg1 hasInstanceVariable:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForClass:(id)arg1 hasProperty:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForClass:(id)arg1 isKindOfClass:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForProtocol:(id)arg1 hasMethod:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)sendValidateExceptionForProtocol:(id)arg1 hasProperty:(id)arg2 errorMessage:(id)arg3 overrideProcessName:(id)arg4;
- (void)setConsoleErrorMessages:(id)arg1;
- (void)setDebugBuild:(BOOL)arg1;
- (void)setForceDoNotReport:(BOOL)arg1;
- (void)setNumberOfValidationErrors:(unsigned int)arg1;
- (void)setOverrideProcessName:(id)arg1;
- (void)setShouldCrashOnError:(BOOL)arg1;
- (void)setShouldLogToConsole:(BOOL)arg1;
- (void)setShouldReportToServer:(BOOL)arg1;
- (void)setValidateionReportingServices:(id)arg1;
- (void)setValidationTargetName:(id)arg1;
- (BOOL)shouldCrashOnError;
- (BOOL)shouldLogToConsole;
- (BOOL)shouldReportToServer;
- (BOOL)validateClass:(id)arg1;
- (BOOL)validateClass:(id)arg1 conformsToProtocol:(id)arg2;
- (BOOL)validateClass:(id)arg1 hasClassMethod:(id)arg2;
- (BOOL)validateClass:(id)arg1 hasClassMethod:(id)arg2 withFullSignature:(char *)arg3;
- (BOOL)validateClass:(id)arg1 hasInstanceMethod:(id)arg2;
- (BOOL)validateClass:(id)arg1 hasInstanceMethod:(id)arg2 withFullSignature:(char *)arg3;
- (BOOL)validateClass:(id)arg1 hasInstanceVariable:(id)arg2;
- (BOOL)validateClass:(id)arg1 hasInstanceVariable:(id)arg2 withType:(char *)arg3;
- (BOOL)validateClass:(id)arg1 hasProperty:(id)arg2;
- (BOOL)validateClass:(id)arg1 hasProperty:(id)arg2 withType:(char *)arg3;
- (BOOL)validateClass:(id)arg1 isKindOfClass:(id)arg2;
- (BOOL)validateProtocol:(id)arg1 hasMethod:(id)arg2 isInstanceMethod:(BOOL)arg3 isRequired:(BOOL)arg4;
- (BOOL)validateProtocol:(id)arg1 hasOptionalClassMethod:(id)arg2;
- (BOOL)validateProtocol:(id)arg1 hasOptionalInstanceMethod:(id)arg2;
- (BOOL)validateProtocol:(id)arg1 hasProperty:(id)arg2;
- (BOOL)validateProtocol:(id)arg1 hasRequiredClassMethod:(id)arg2;
- (BOOL)validateProtocol:(id)arg1 hasRequiredInstanceMethod:(id)arg2;
- (id)validateionReportingServices;
- (id)validationTargetName;

@end
