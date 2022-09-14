# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
#### 

