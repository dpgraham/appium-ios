# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.1](https://github.com/appium/WebDriverAgent/compare/v0.1.0...v0.1.1) (2020-09-09)

**Note:** Version bump only for package dpgraham-webdriveragent





# 0.1.0 (2020-09-09)


### Bug Fixes

* Add support for the new snapshot API ([#199](https://github.com/appium/WebDriverAgent/issues/199)) ([4906313](https://github.com/appium/WebDriverAgent/commit/4906313780bef3bb7f744f1b15c3679178e8f1bb))
* Add updated method signature for send keys action ([f444ad8](https://github.com/appium/WebDriverAgent/commit/f444ad8d5a14147580185935a68d890ed6746046))
* Adjust alert locator for popup alerts ([#305](https://github.com/appium/WebDriverAgent/issues/305)) ([94a07b2](https://github.com/appium/WebDriverAgent/commit/94a07b29e7e59746754c0bbf05d394d47ae905ac))
* Adjust hit point calculation algorithm for Xcode11+ ([#231](https://github.com/appium/WebDriverAgent/issues/231)) ([557291e](https://github.com/appium/WebDriverAgent/commit/557291e475674454991c269f9cb9622b67f51a23))
* Allow setting compression quality and scaling factor for the mjpeg-stream ([#196](https://github.com/appium/WebDriverAgent/issues/196)) ([5048f71](https://github.com/appium/WebDriverAgent/commit/5048f713319e9ba6e18a9eaa9798e21af214afcc))
* Avoid using element selector on query, which expects multiple matches ([#276](https://github.com/appium/WebDriverAgent/issues/276)) ([d1c2142](https://github.com/appium/WebDriverAgent/commit/d1c2142949fb57c61125cfae23c601c3422704fe))
* Check for setValue:forPreferenceKey: before invoking it ([#236](https://github.com/appium/WebDriverAgent/issues/236)) ([66958b5](https://github.com/appium/WebDriverAgent/commit/66958b522a64d8a9625b10d41c94151bcd738eee))
* Checking existence before calculating element uid ([#296](https://github.com/appium/WebDriverAgent/issues/296)) ([ccec25c](https://github.com/appium/WebDriverAgent/commit/ccec25cb944977611a8484e7b5d0e9c7187b9312))
* Compile error by GCFloat in generic configuration ([#235](https://github.com/appium/WebDriverAgent/issues/235)) ([3b58863](https://github.com/appium/WebDriverAgent/commit/3b58863228484bcb8d03aad85653a8ba8e100a47))
* Construct correct WDA url if webDriverAgentUrl is already set ([#342](https://github.com/appium/WebDriverAgent/issues/342)) ([a358d9c](https://github.com/appium/WebDriverAgent/commit/a358d9ca56a4b60ded3ecae07c2be16e523b17e6))
* copy CocoaAsyncSocket with code sign for building ([#352](https://github.com/appium/WebDriverAgent/issues/352)) ([54a57d1](https://github.com/appium/WebDriverAgent/commit/54a57d1028c764f79cb238964db287a8eb81819f))
* correctly calculate touch coordinates in landscape orientation for iOS 13.1 ([#220](https://github.com/appium/WebDriverAgent/issues/220)) ([5048cbc](https://github.com/appium/WebDriverAgent/commit/5048cbcf655da7311e41750abbbf324ab1c2715f))
* Default to active application call if no session is provided to source API ([#208](https://github.com/appium/WebDriverAgent/issues/208)) ([9d2c130](https://github.com/appium/WebDriverAgent/commit/9d2c130aa71cb8d4842e7affc25a80cc007507bf))
* Do not break immediately if click on text view fails ([7bb5174](https://github.com/appium/WebDriverAgent/commit/7bb51740883608abb831aeec193c44c0f1636d65))
* Do not throw exception if the app is not in foreground after the timeout ([#211](https://github.com/appium/WebDriverAgent/issues/211)) ([9188f23](https://github.com/appium/WebDriverAgent/commit/9188f23e4cff80265c2dd87ae2d30ba9112fe712))
* Filter out system app when there are multiple active apps ([#204](https://github.com/appium/WebDriverAgent/issues/204)) ([cf60ec3](https://github.com/appium/WebDriverAgent/commit/cf60ec3741cd955138ff4ff7ff43cc966c6a895d))
* Fix the name of the extension method ([bde56b9](https://github.com/appium/WebDriverAgent/commit/bde56b9f3d745bf950ca73dfa6e74b35fa17fa83))
* get active app via session in mobile: activeAppInfo ([#237](https://github.com/appium/WebDriverAgent/issues/237)) ([92d51c5](https://github.com/appium/WebDriverAgent/commit/92d51c548988a3df7bb9fe3661d03ccf5d48cb35))
* get idb working ([#306](https://github.com/appium/WebDriverAgent/issues/306)) ([8ee9cde](https://github.com/appium/WebDriverAgent/commit/8ee9cde71f9b20ebf593ce9748d2ca1ef8ecf405))
* Get status bar from SpringBoard because that is no longer visible on iOS 13+ ([#287](https://github.com/appium/WebDriverAgent/issues/287)) ([7241040](https://github.com/appium/WebDriverAgent/commit/724104041b440943f99aa02cc3f3a747ecdbbd0f))
* Give the proper name to the newly added setting ([#223](https://github.com/appium/WebDriverAgent/issues/223)) ([ff1153d](https://github.com/appium/WebDriverAgent/commit/ff1153dc62d9d6000e6e10a2b9a88cc48ac5d867))
* Ignore the case where process locking the socket is not alive ([#339](https://github.com/appium/WebDriverAgent/issues/339)) ([b682944](https://github.com/appium/WebDriverAgent/commit/b6829441ff908af3ff0a887559c13d27d807da4f))
* make adjusting screenshot coordinate configurable ([#277](https://github.com/appium/WebDriverAgent/issues/277)) ([d549856](https://github.com/appium/WebDriverAgent/commit/d549856b73277991844755fa636990b940f2540f))
* Make non modal dialogs inclusion optional by default ([#222](https://github.com/appium/WebDriverAgent/issues/222)) ([a310f81](https://github.com/appium/WebDriverAgent/commit/a310f813f1e40cfffa97959e85cd4a42dac8a94d))
* Make screenshot taking work for below iOS 11 as well ([#193](https://github.com/appium/WebDriverAgent/issues/193)) ([512fbe0](https://github.com/appium/WebDriverAgent/commit/512fbe0e94d93bd3043966d6fc5f677a0099befe))
* Make sure the returned screenshot is always a PNG image ([#356](https://github.com/appium/WebDriverAgent/issues/356)) ([bf32a9e](https://github.com/appium/WebDriverAgent/commit/bf32a9ef3735826a5888725ea0191d875d73a890))
* Make sure unique element identifier can always be extracted ([#293](https://github.com/appium/WebDriverAgent/issues/293)) ([aac0a6b](https://github.com/appium/WebDriverAgent/commit/aac0a6b22ebe6acc06b1f247ae9f40a8c9157bf0))
* make the argument of configureKeyboardsPreference BOOL ([#234](https://github.com/appium/WebDriverAgent/issues/234)) ([86d17dd](https://github.com/appium/WebDriverAgent/commit/86d17dd24a95604abc88a50068276a541e0d6010))
* Only accept preparation if keyboard focus is set ([19f54ed](https://github.com/appium/WebDriverAgent/commit/19f54ed13b685a09b9ea2ffaccde964f216f37bf))
* Only include `simulatorVersion` property for simulators ([#343](https://github.com/appium/WebDriverAgent/issues/343)) ([e6426f8](https://github.com/appium/WebDriverAgent/commit/e6426f885a9c38ea6b299fd421429369f305264f))
* Only start screenshots broadcasting after the client sends some data ([#243](https://github.com/appium/WebDriverAgent/issues/243)) ([19c0288](https://github.com/appium/WebDriverAgent/commit/19c0288960a532dde8c43d0ef457d570aa93c422))
* Prefer triple-tap to Select All for fields cleanup ([#249](https://github.com/appium/WebDriverAgent/issues/249)) ([26b4541](https://github.com/appium/WebDriverAgent/commit/26b454118a296aac98cebb1170b410ef499f6205))
* properly export WDA_BASE_URL ([#271](https://github.com/appium/WebDriverAgent/issues/271)) ([112d137](https://github.com/appium/WebDriverAgent/commit/112d137ec723465167913f2546ba6947e0bd4270))
* Provide correct predicate for alert buttons lookup ([#322](https://github.com/appium/WebDriverAgent/issues/322)) ([e572bc2](https://github.com/appium/WebDriverAgent/commit/e572bc266567382d89c5b5750bfb7320fd159f2e))
* Remove sorting of matched elements to speed up multiple xpath elements lookup ([#246](https://github.com/appium/WebDriverAgent/issues/246)) ([1ab74fb](https://github.com/appium/WebDriverAgent/commit/1ab74fb7b745c52c652140dfd69072d22f83ead8))
* Replaced Element Tap Quiescence Check for iOS 13 ([#278](https://github.com/appium/WebDriverAgent/issues/278)) ([6bed527](https://github.com/appium/WebDriverAgent/commit/6bed527e714d06862fdd60b129382d2bc8cad372))
* return not supported value if the keyboard pref method is not available ([#310](https://github.com/appium/WebDriverAgent/issues/310)) ([781d99c](https://github.com/appium/WebDriverAgent/commit/781d99cba7c9f1f60944d140bc0237733ba55d36))
* Return system application by default if no active apps could be found ([#318](https://github.com/appium/WebDriverAgent/issues/318)) ([722aea6](https://github.com/appium/WebDriverAgent/commit/722aea62e46a8b8f78bdeb68b6c99c6e79b9fec1))
* Searching elements inside WebViews for iOS 13.3 ([#273](https://github.com/appium/WebDriverAgent/issues/273)) ([148a05e](https://github.com/appium/WebDriverAgent/commit/148a05ea83a1b195b6e846f1f128d5bded0366f2))
* Switch tap and tapByCoordinate to their native implemntations ([#212](https://github.com/appium/WebDriverAgent/issues/212)) ([843cbf4](https://github.com/appium/WebDriverAgent/commit/843cbf4ec9239383fc868aeba08e3ec0b4fd4d47))
* Sync the session creation arguments and status response with W3C spec ([#203](https://github.com/appium/WebDriverAgent/issues/203)) ([10e983d](https://github.com/appium/WebDriverAgent/commit/10e983ddfc23ad960957d23e168cf2c0bbe232b1))
* take element screenshot in landscape for iOS 13, update test cases for iOS 13 ([#225](https://github.com/appium/WebDriverAgent/issues/225)) ([5f81b0e](https://github.com/appium/WebDriverAgent/commit/5f81b0e3b95fc6c21e892ef29a0eed91bc208e0c))
* Throwing excpetion when looking for active application only if element is null ([#219](https://github.com/appium/WebDriverAgent/issues/219)) ([d103eed](https://github.com/appium/WebDriverAgent/commit/d103eedaed0f4c4b1d0449471737e47ce4ad6c97))
* Tune active applications logic ([#205](https://github.com/appium/WebDriverAgent/issues/205)) ([8db1b02](https://github.com/appium/WebDriverAgent/commit/8db1b02d0b80ea584ae22018e4aff41247a38f0d))
* Tune tap point calculation logic ([#217](https://github.com/appium/WebDriverAgent/issues/217)) ([b0c59da](https://github.com/appium/WebDriverAgent/commit/b0c59dae4990f6a836b2ea452c5b2d93bbaebba3))
* Tune the condition for input preparation ([cfb48d3](https://github.com/appium/WebDriverAgent/commit/cfb48d33630c46e0a3c1a15e58a85adb996248d1))
* Update XCTestCase proxy to support Xcode 11.4 ([#286](https://github.com/appium/WebDriverAgent/issues/286)) ([1e7cdf5](https://github.com/appium/WebDriverAgent/commit/1e7cdf5c072cf9a5d6f99bdc5c85bf32e1ce7cdb))
* Use gcdasyncsocket imported from routing http server ([#253](https://github.com/appium/WebDriverAgent/issues/253)) ([72dbf24](https://github.com/appium/WebDriverAgent/commit/72dbf24b08e81373f33a329b4b367ffa15668b70))
* Use the same proxy instance for timeout and snapshot retrieval ([#311](https://github.com/appium/WebDriverAgent/issues/311)) ([9c67af4](https://github.com/appium/WebDriverAgent/commit/9c67af457f9f1fefa1762212753f70b6fa7a22d3))


### Features

* [Xcode 11] Call includingNonModalElements to get snapshot ([#216](https://github.com/appium/WebDriverAgent/issues/216)) ([e45dd2c](https://github.com/appium/WebDriverAgent/commit/e45dd2c3a03b730cc9804ab5c003a5c846532eea))
* Add a handler for /selected endpoint ([#241](https://github.com/appium/WebDriverAgent/issues/241)) ([0df8a07](https://github.com/appium/WebDriverAgent/commit/0df8a07996a45a407c7ec06f1b81a061630ebf07))
* Add a new endpoint for element rotation ([#213](https://github.com/appium/WebDriverAgent/issues/213)) ([f3e62bb](https://github.com/appium/WebDriverAgent/commit/f3e62bb2ca103d882e0d1b1a00fe1e064d80bf5c))
* Add a possibility to provide customized locators for alert buttons detection ([#240](https://github.com/appium/WebDriverAgent/issues/240)) ([86269d9](https://github.com/appium/WebDriverAgent/commit/86269d96e966a1231877a0ac61355670b3a5a295))
* Add a possibility to request page source with particular attributes excluded ([#247](https://github.com/appium/WebDriverAgent/issues/247)) ([f4478c0](https://github.com/appium/WebDriverAgent/commit/f4478c073337fc8830af69172ce6e4fe8f6060bb))
* Add a setting for elements bounding strategy selection ([#357](https://github.com/appium/WebDriverAgent/issues/357)) ([d8d12a0](https://github.com/appium/WebDriverAgent/commit/d8d12a0d599fe44948e5f7b896295cb4b6647095))
* Add an endpoint for tapWithNumberOfTaps helper ([#295](https://github.com/appium/WebDriverAgent/issues/295)) ([883a26b](https://github.com/appium/WebDriverAgent/commit/883a26b7882796b136948966a16f33cc99ef4a30))
* Add basic support of key events into W3C actions ([#309](https://github.com/appium/WebDriverAgent/issues/309)) ([2798b5d](https://github.com/appium/WebDriverAgent/commit/2798b5d7b601f184019e0e10227cd5a5babeb953))
* add NPM script that downloads prebuilt WDA ([#239](https://github.com/appium/WebDriverAgent/issues/239)) ([c64e76a](https://github.com/appium/WebDriverAgent/commit/c64e76a2ad12fb5406898bd8d9d50ab3d25e676a))
* add reduce motion (works only on simulator) ([#202](https://github.com/appium/WebDriverAgent/issues/202)) ([3eea1f4](https://github.com/appium/WebDriverAgent/commit/3eea1f431befd708af68c6bf49bbe65128ee6433))
* add setSoftwareKeyboardShownByTouch to force software keyboard enable by default ([#226](https://github.com/appium/WebDriverAgent/issues/226)) ([229902f](https://github.com/appium/WebDriverAgent/commit/229902f89de0eedf3fad38b2421ef6cb39fb0e4e))
* Add some useful details to the device info output ([#210](https://github.com/appium/WebDriverAgent/issues/210)) ([e7910b9](https://github.com/appium/WebDriverAgent/commit/e7910b9593eebf73720ede6848b01b1e65f78e6f))
* Add testmanagerd version as /status response ([#332](https://github.com/appium/WebDriverAgent/issues/332)) ([5bad223](https://github.com/appium/WebDriverAgent/commit/5bad223c10df516cf222bf016b1d342e438ad3ae))
* Add the necessary primitives to be able to automate split-screen apps ([#209](https://github.com/appium/WebDriverAgent/issues/209)) ([7277ada](https://github.com/appium/WebDriverAgent/commit/7277adab02980dc5ca66c73c5773feeba4aac7db))
* Add user interface style value to device info output ([#280](https://github.com/appium/WebDriverAgent/issues/280)) ([b6a3e8d](https://github.com/appium/WebDriverAgent/commit/b6a3e8d09431d2eaa830d95b9626d6d637992154))
* Allow Cross-Origin resource sharing ([#317](https://github.com/appium/WebDriverAgent/issues/317)) ([2c6cd24](https://github.com/appium/WebDriverAgent/commit/2c6cd247bdd79914738221f27e015dd0e97e2599))
* Build with Xcode 12 beta ([#354](https://github.com/appium/WebDriverAgent/issues/354)) ([0e750d2](https://github.com/appium/WebDriverAgent/commit/0e750d22053d70614f1ae8d11aed8c187d65c3e7))
* Bump appium/RoutingHTTPServer to 1.2.0 ([#250](https://github.com/appium/WebDriverAgent/issues/250)) ([f142c8a](https://github.com/appium/WebDriverAgent/commit/f142c8a8d6130f6b6adb41dba67345b16f7aba40))
* Consider active application based on the current screen element ([#214](https://github.com/appium/WebDriverAgent/issues/214)) ([8e2b063](https://github.com/appium/WebDriverAgent/commit/8e2b0633e3317eeeeec0bb0f32a22e7dee32333a))
* Detect Safari web view alerts ([#297](https://github.com/appium/WebDriverAgent/issues/297)) ([9374558](https://github.com/appium/WebDriverAgent/commit/937455872b3d03dbb80a38aa781fb281a954c156))
* Drop Xcode9 support ([#227](https://github.com/appium/WebDriverAgent/issues/227)) ([3afc2f1](https://github.com/appium/WebDriverAgent/commit/3afc2f15d5121516632e290d863fcac235afd751))
* Introduce Azure pipeline ([#301](https://github.com/appium/WebDriverAgent/issues/301)) ([cfb452d](https://github.com/appium/WebDriverAgent/commit/cfb452d0f4edd6ccb8c004bd9e7fc75b1c762f22))
* Introduce W3C protocol support ([#201](https://github.com/appium/WebDriverAgent/issues/201)) ([fcab4c1](https://github.com/appium/WebDriverAgent/commit/fcab4c120abc311bb89a8abd1d5f2a6a36f2eecf))
* make device info available for without session ([#315](https://github.com/appium/WebDriverAgent/issues/315)) ([d61de97](https://github.com/appium/WebDriverAgent/commit/d61de978d152283ba34df5b1fbd521a1d6ed9490))
* Make the coordinates of the screen point configurable ([#215](https://github.com/appium/WebDriverAgent/issues/215)) ([41d837e](https://github.com/appium/WebDriverAgent/commit/41d837e14dc4c1d6ae931245f57348415fedc7f4))
* make xcodeproject Xcode 10 compatible ([#282](https://github.com/appium/WebDriverAgent/issues/282)) ([14d85ed](https://github.com/appium/WebDriverAgent/commit/14d85ed6b2fa6cb9767ead88d6c683657dec4ce1))
* return processArguments as device info ([#194](https://github.com/appium/WebDriverAgent/issues/194)) ([8990b41](https://github.com/appium/WebDriverAgent/commit/8990b41db4f6674850d723ce89e4487b3077534a))
* tweak screenPoint settings name ([#218](https://github.com/appium/WebDriverAgent/issues/218)) ([4d56fb9](https://github.com/appium/WebDriverAgent/commit/4d56fb9c5e959a04ee0f9955872d97fb89e6e2a6))
* Use cached snapshots to speed up alerts detection ([#303](https://github.com/appium/WebDriverAgent/issues/303)) ([7cd6d04](https://github.com/appium/WebDriverAgent/commit/7cd6d04afa6de4b45874c231b0b445fd8738dfd2))


### Reverts

* Revert "build: Update CocoaAsyncSocket to 7.6.4 (#349)" (#351) ([20f5f4e](https://github.com/appium/WebDriverAgent/commit/20f5f4ef592acb4aa55866943c90a0b2e36689de)), closes [#349](https://github.com/appium/WebDriverAgent/issues/349) [#351](https://github.com/appium/WebDriverAgent/issues/351)
* Revert "Fixed warning" ([3a1270f](https://github.com/appium/WebDriverAgent/commit/3a1270fd938ecfd05763d03d79d26d2104923a8e))
* Revert "Repo sync commit for bot" ([96da2ac](https://github.com/appium/WebDriverAgent/commit/96da2acd63397d2ad9d4c9f97470bcc9c6fc2b13))
* Revert "Repo sync commit for bot" ([de149df](https://github.com/appium/WebDriverAgent/commit/de149dfab0c0a8f14b79770f7b2da60248a1d035))
* Revert "Repo sync commit for bot" ([da6b461](https://github.com/appium/WebDriverAgent/commit/da6b4616baca597e90819003d3edb2a45e7f86bb))
* Revert "Patched Github repo" ([0d1c67e](https://github.com/appium/WebDriverAgent/commit/0d1c67ed17042f6cd448c6cd83cebaaec7dd58eb))
* Revert "XCUITest proof of concept" ([85cbe1c](https://github.com/appium/WebDriverAgent/commit/85cbe1c5c02a2ae46b2723ab0f6844f535cc7775))


### BREAKING CHANGES

* The minimum supported Xcode version is now 10.0
* only capabilities in W3C format are supported
* API responses are now formatted according to W3C requirements

Element keys in responses are now duplicated for both W3C and JSONWP
