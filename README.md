## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Start/Build android application
Make sure that android studio is installed
#### 1. Build js project
```
npm run build
```
#### 2. Add android platform
```
npx cap add android
```
#### 3. Update native project
```
npx cap sync
```
#### 4. Set icon and splash screen
1. update images
```
npx cordova-res android --skip-config --copy
```
2. set sources from /androidSplashAssets to app/res/drawable
3. change splash screen style in app/res/values/styles.xml to this:
```
<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
    <item name="android:background">@drawable/launch_screen</item>
    <item name="android:navigationBarColor">#365090</item>
</style>
```
#### 5. Open native project
```
npx cap open android
```
#### 6. Set read/create files permissions
set permissions in android/app/src/main/AndroidManifest.xml
in Android Studio it can be here: app/manifests/AndroidManifest.xml
```
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```
#### 7. Start and build
* To start android application create an android simulator, then tap "play" button toolbar
* To build tap build in toolbar and select necessary build type

See more information here: [https://developer.android.com/studio/run](https://developer.android.com/studio/run)

## Setting ios application
to init project and setting environment check capacitor ios docs. [https://capacitorjs.com/docs/ios](https://capacitorjs.com/docs/ios)

### 1. Build/run/open application.
* To add ios project use:
```
npx cap add ios
```
* To build js project use:
```
npm run build
```
* To update native project use:
```
npx cap sync
```
* To open native project use:
```
npx cap open ios
```

### 2. Configure info.plist

add these following descriptions:
* Privacy - Camera Usage Description
* Privacy - Photo Library Additions Usage Description
* Privacy - Photo Library Usage Description

### 3. Set ios splash assets to the project.

1. delete all folder in following folder: /ios/App/App/Assets.xcassets
2. add AppIcon.appiconset, Splash.imageset, SplashLogoset to /ios/App/App/Assets.xcassets.
3. open xcode app and make sure that xcode see these files, then drag and drop Splash.storyboard to App folder in xcode app
4. then in General app settings set Splash as a Launch Screen File, appIcon as an App Icons Source.
