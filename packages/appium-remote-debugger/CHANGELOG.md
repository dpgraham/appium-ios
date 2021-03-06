# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.1.8 (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





## 0.1.7 (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





## 0.1.6 (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





## 0.1.5 (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





## 0.1.4 (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





## [0.1.2](https://github.com/appium/appium-remote-debugger/compare/v0.1.1...v0.1.2) (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





## [0.1.1](https://github.com/appium/appium-remote-debugger/compare/v0.1.0...v0.1.1) (2020-09-09)

**Note:** Version bump only for package dpgraham-remote-debugger





# 0.1.0 (2020-09-09)


### Bug Fixes

* make sure that app dict is not modified at the same time ([#172](https://github.com/appium/appium-remote-debugger/issues/172)) ([11f0be8](https://github.com/appium/appium-remote-debugger/commit/11f0be83152bc8b4b58ac5dbd7ad1f88b59e24f4))
* **package:** update appium-base-driver to version 3.0.0 ([#83](https://github.com/appium/appium-remote-debugger/issues/83)) ([1c8ed6d](https://github.com/appium/appium-remote-debugger/commit/1c8ed6d610c7fb32e5c7329a05346de89cce0125))
* add id to message logging ([2a3d7e0](https://github.com/appium/appium-remote-debugger/commit/2a3d7e03f0cd44f9595421be54f993ff78507aaf))
* add old safariviewcontroller app bundle id too ([#197](https://github.com/appium/appium-remote-debugger/issues/197)) ([a5f6bf5](https://github.com/appium/appium-remote-debugger/commit/a5f6bf5f3f686ae338c06f94626c3b7fea4124fc))
* add safariviewcontroller bundle id to standard list ([#189](https://github.com/appium/appium-remote-debugger/issues/189)) ([4b13b6b](https://github.com/appium/appium-remote-debugger/commit/4b13b6b4c32daf1bff5c23b979882f3985b7a90e))
* add WIRTypePage page type for 13.4 webviews ([6124e97](https://github.com/appium/appium-remote-debugger/commit/6124e979ba45d1e383ab4ec3326de20c0834f42b))
* always do the loop once in async execute ([#185](https://github.com/appium/appium-remote-debugger/issues/185)) ([525923d](https://github.com/appium/appium-remote-debugger/commit/525923df498f3a4745e5538677ba5dc4d07e7f5a))
* better handling of targets ([#150](https://github.com/appium/appium-remote-debugger/issues/150)) ([3207bf9](https://github.com/appium/appium-remote-debugger/commit/3207bf91d1f51c3ab841bb4370fd849208fab26e))
* compute target if we can ([#160](https://github.com/appium/appium-remote-debugger/issues/160)) ([1674007](https://github.com/appium/appium-remote-debugger/commit/16740076151136cb3170c0b9580f41e019b5328d))
* connection issues ([#165](https://github.com/appium/appium-remote-debugger/issues/165)) ([cdb8848](https://github.com/appium/appium-remote-debugger/commit/cdb8848cba62dababa967b6240f00a7512caedb7))
* do not ignore empty urls ([#190](https://github.com/appium/appium-remote-debugger/issues/190)) ([5b83f11](https://github.com/appium/appium-remote-debugger/commit/5b83f111f6747047bbd1f79c65e1010e55a1485a))
* Do not process appDict with promise ([2eb6ec2](https://github.com/appium/appium-remote-debugger/commit/2eb6ec2670ae4200032005ce3e625f3d1b076597))
* do not receive rpc messages when 'disconnected' ([#163](https://github.com/appium/appium-remote-debugger/issues/163)) ([68ad825](https://github.com/appium/appium-remote-debugger/commit/68ad825c5cb3b59b890fef973971bf47677976af))
* do not send Target.exists on iOS 13.4 ([#219](https://github.com/appium/appium-remote-debugger/issues/219)) ([b63b698](https://github.com/appium/appium-remote-debugger/commit/b63b698e14328391a55d4022919b20c2ee469e40))
* do not use user gestures ([#177](https://github.com/appium/appium-remote-debugger/issues/177)) ([9fe4cf9](https://github.com/appium/appium-remote-debugger/commit/9fe4cf9f8bc94b4726da44f6b1133d9929e95279))
* do not wait for reply on setup commands ([#191](https://github.com/appium/appium-remote-debugger/issues/191)) ([9383602](https://github.com/appium/appium-remote-debugger/commit/93836027751b672d01ce1f8c9209dee826192a89))
* enable console logging on page after navigating ([#176](https://github.com/appium/appium-remote-debugger/issues/176)) ([8dacfe3](https://github.com/appium/appium-remote-debugger/commit/8dacfe39a218b77c14167f4ae8e33c17bb97691b))
* get real devices working correctly ([#195](https://github.com/appium/appium-remote-debugger/issues/195)) ([1658ef9](https://github.com/appium/appium-remote-debugger/commit/1658ef9e856b0082699f2d24168d499d12f6b617))
* handle async execute on iOS without awaitPromise ([#199](https://github.com/appium/appium-remote-debugger/issues/199)) ([40fb622](https://github.com/appium/appium-remote-debugger/commit/40fb622eba5fca820636421b1d588bb99d6c6965))
* handle selecting apps multiple times ([40d147f](https://github.com/appium/appium-remote-debugger/commit/40d147f5049e112e685d1cbd5538e666286868cd))
* ignore add target event if provisional ([#205](https://github.com/appium/appium-remote-debugger/issues/205)) ([1e021fd](https://github.com/appium/appium-remote-debugger/commit/1e021fd7f9f994864b1323589b8d9fdb954c2f73))
* improve logging ([41be26c](https://github.com/appium/appium-remote-debugger/commit/41be26cd6ba0c1c50fde55c87025d3dcb2f120db))
* Iterate over resolved pagearrays first before waiting for promises ([#142](https://github.com/appium/appium-remote-debugger/issues/142)) ([c60d3e8](https://github.com/appium/appium-remote-debugger/commit/c60d3e8531dd3f14dcd4cdfc5dacb0586a38b8c5))
* linting of bin ([c0d2113](https://github.com/appium/appium-remote-debugger/commit/c0d2113fa8e5268d288006e80a1b59f76c030170))
* log the app, page and target when sending ([8908f89](https://github.com/appium/appium-remote-debugger/commit/8908f8938f8cb474b2ba5af8364c7ba9cbb16734))
* make sure an uncalled event handler is removed ([902f9ba](https://github.com/appium/appium-remote-debugger/commit/902f9ba77e02e9de42a6bc28e49be551a0b1fb46))
* make sure list of apps unique ([cfe8216](https://github.com/appium/appium-remote-debugger/commit/cfe82169271991eef0ccdcdee890e1d50539a59e))
* make sure react components work ([#202](https://github.com/appium/appium-remote-debugger/issues/202)) ([bec60cf](https://github.com/appium/appium-remote-debugger/commit/bec60cf9bc6005e97e481708431218910d77fda8))
* missing communication protocol call ([a05ba90](https://github.com/appium/appium-remote-debugger/commit/a05ba90497029654db338ba122f6a71af8a589b2))
* more involved fix for target ids ([d88778d](https://github.com/appium/appium-remote-debugger/commit/d88778db449adc948ed9e09299dc499363d392db))
* move atoms notes out of atoms folder ([02ea667](https://github.com/appium/appium-remote-debugger/commit/02ea667c2adb08d3f2d4eeee9e60202c2c25a70e))
* only print target if there is one, in send message ([91a8f50](https://github.com/appium/appium-remote-debugger/commit/91a8f50738a3ae6b27e3b7aa25eacb4c24d952f4))
* poll likely targets when none present in web ([3bccc36](https://github.com/appium/appium-remote-debugger/commit/3bccc3662e0d70f2549922068fc911baba659217))
* properly handle connected apps callback ([1921841](https://github.com/appium/appium-remote-debugger/commit/1921841755dd51beafd2824ddaa616ad9d20a6dd))
* Properly save reported targets ([#148](https://github.com/appium/appium-remote-debugger/issues/148)) ([78d3a45](https://github.com/appium/appium-remote-debugger/commit/78d3a45ca887b22a994aab232d91e282a3363b91))
* remove dependencies we no longer use ([#154](https://github.com/appium/appium-remote-debugger/issues/154)) ([46fbb9c](https://github.com/appium/appium-remote-debugger/commit/46fbb9c8e0b32f2cb580cae2c85bcaab336c205d))
* remove standard functions from return values ([#208](https://github.com/appium/appium-remote-debugger/issues/208)) ([3c455ea](https://github.com/appium/appium-remote-debugger/commit/3c455ea9eaf4b401e8206e22375a8494bbb680d4))
* stringify error when we do not know how to handle an message ([18d1a51](https://github.com/appium/appium-remote-debugger/commit/18d1a518b94b51000e98960c654c4ebad3b667be))
* try what seems to be a default ios 13 target when none are indicated ([5ee8bf6](https://github.com/appium/appium-remote-debugger/commit/5ee8bf67fe8dcb1756913f81b6ff62b7f533987d))
* **package:** update appium-base-driver to version 5.0.0 ([#180](https://github.com/appium/appium-remote-debugger/issues/180)) ([06093ad](https://github.com/appium/appium-remote-debugger/commit/06093ad14ebc78115bf4285b0969f6cbf9b043d9))
* **package:** update appium-ios-device to version 0.10.0 ([#147](https://github.com/appium/appium-remote-debugger/issues/147)) ([0de073d](https://github.com/appium/appium-remote-debugger/commit/0de073d8295207b0b9f49d47255ad4ec949574ef))
* **package:** update bplist-creator to version 0.0.8 ([#129](https://github.com/appium/appium-remote-debugger/issues/129)) ([363486d](https://github.com/appium/appium-remote-debugger/commit/363486d9c2f6923b50b6ac216e90a270c3a12785))
* **package:** update ws to version 6.0.0 ([#87](https://github.com/appium/appium-remote-debugger/issues/87)) ([415f037](https://github.com/appium/appium-remote-debugger/commit/415f03767cff6d5b2be12a8f77066907cb3cadc6))
* **package:** update ws to version 7.0.0 ([#127](https://github.com/appium/appium-remote-debugger/issues/127)) ([e0e30e4](https://github.com/appium/appium-remote-debugger/commit/e0e30e4360ec04899f67c691392bc3f35bf36924))
* use promises instead of http/https for async execute ([#164](https://github.com/appium/appium-remote-debugger/issues/164)) ([2a0ce84](https://github.com/appium/appium-remote-debugger/commit/2a0ce845b479326b6f55139d0ae53b08cc417dc6))
* use web inspector service verbose and chunk size parameters ([#175](https://github.com/appium/appium-remote-debugger/issues/175)) ([4528c0c](https://github.com/appium/appium-remote-debugger/commit/4528c0cc978f14bf6a4ab4c708ecf687773522e7))
* Wait between retries ([#157](https://github.com/appium/appium-remote-debugger/issues/157)) ([a75d467](https://github.com/appium/appium-remote-debugger/commit/a75d467e964660b43f9773abbc876199e3b2b4a2))


### Features

* add _rpc_reportCurrentState handler for iOS 14 ([#239](https://github.com/appium/appium-remote-debugger/issues/239)) ([a8d9a27](https://github.com/appium/appium-remote-debugger/commit/a8d9a27dc4f4386b0d5baaba7e9bbf4dd13a4f73))
* add option to include Safari in apps to listen for ([#161](https://github.com/appium/appium-remote-debugger/issues/161)) ([139e9be](https://github.com/appium/appium-remote-debugger/commit/139e9be387243d301dc7bf55702051ed2cde2566))
* add possibility to launch safari without WDA ([#155](https://github.com/appium/appium-remote-debugger/issues/155)) ([33bf6a0](https://github.com/appium/appium-remote-debugger/commit/33bf6a0a7c9bba692387739be154f89afa22d734))
* add shadowRoot workaround to atoms ([24a1c76](https://github.com/appium/appium-remote-debugger/commit/24a1c76562a88b03bf12e13d7bbe193ee71aff9d))
* add timeout to connect, defaulting to 0 ([#196](https://github.com/appium/appium-remote-debugger/issues/196)) ([6411e54](https://github.com/appium/appium-remote-debugger/commit/6411e549a2c606439dc8595d082b619c213bbef7))
* add utility for listening to protocol on sims ([aafd304](https://github.com/appium/appium-remote-debugger/commit/aafd304393783390576173aebd8c963de7d135b5))
* add webInspectorMaxFrameLength option ([#234](https://github.com/appium/appium-remote-debugger/issues/234)) ([38ab073](https://github.com/appium/appium-remote-debugger/commit/38ab073d3d56fd1627472bae296216ab6822b4dc))
* add WIRTypeWebPage as an accepted web page type ([#203](https://github.com/appium/appium-remote-debugger/issues/203)) ([c6ac94c](https://github.com/appium/appium-remote-debugger/commit/c6ac94c77faa828c6f06a2dcadc47045deebe7f2))
* allow '*' as bundle id reported by Safari ([#179](https://github.com/appium/appium-remote-debugger/issues/179)) ([154c8b5](https://github.com/appium/appium-remote-debugger/commit/154c8b5bbeb62923f61f34f0aaddf9b0e8d5c1f5))
* allow passing in a list of additional possible bundle identifiers ([#182](https://github.com/appium/appium-remote-debugger/issues/182)) ([c3ffd1d](https://github.com/appium/appium-remote-debugger/commit/c3ffd1df16c3e55aa11dcd52a449069e33fd7abc))
* do not note when scripts are parsed ([bd1067b](https://github.com/appium/appium-remote-debugger/commit/bd1067bb3e1ee3a1877db4589540f9278be7db5d))
* do not throw error if circular structure found ([#212](https://github.com/appium/appium-remote-debugger/issues/212)) ([0e85f35](https://github.com/appium/appium-remote-debugger/commit/0e85f352d5859df70c20664cb4745c4d810c8e33))
* enable debugger on page selection ([c508f85](https://github.com/appium/appium-remote-debugger/commit/c508f85ca384fc4c7f92032fa759960eea78cb54))
* handle Console.messageRepeatCountUpdated event ([fbadd0c](https://github.com/appium/appium-remote-debugger/commit/fbadd0cea72106ae0f7342b7c441a6443479eb4d))
* handle new provisional target creation ([#204](https://github.com/appium/appium-remote-debugger/issues/204)) ([0358f02](https://github.com/appium/appium-remote-debugger/commit/0358f029703d00d0463a529767c09114b3f561b3))
* make isTargetBased true by default ([#238](https://github.com/appium/appium-remote-debugger/issues/238)) ([913e055](https://github.com/appium/appium-remote-debugger/commit/913e055c69612a0fdf9e02cda0593cc562f0d5b2))
* Remove the dependency of iwdp for real devices and use appium-ios-device ([#137](https://github.com/appium/appium-remote-debugger/issues/137)) ([ce6da2f](https://github.com/appium/appium-remote-debugger/commit/ce6da2f101a0ac698628254a5bb05d0cead7384e))
