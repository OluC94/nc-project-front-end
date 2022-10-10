# nc-project-front-end

## Initial setup of RN project

1. Install expo CLI globally: `npm i -g expo-cli`
2. In the root of the repository create the expo directory: `expo init <project-name>`
3. Under `Managed Workflow` in the terminal prompt select `blank (TypeScript)`

### Expo project files

#### Assets folder

- Image/audio/video/etc files
- Any kind of asset that needs to be bundled with the app

#### App.tsx

- For IOS View is mapped to UIView
- For Android View is mapped to AndroidView

####

### iOS Simulation

#### Mac

- Open XCode, got to Preferences -> Location, ensure that the latest CLI is enabled
- Open the iphone simulator but going to Developer Tools -> Simulator
- In the simulator press CMD + D to bring up the developer menu

#### Linux

### Android Simulation

#### Mac

- Open Android Studio and open the SDK Manager
- Under SDK platforms select `Android Tiramisu`
- Under SDK Tools select `Android SDK Build-Tools 33`, `Android Emulator`, `Android SDK Platform-Tools` and `Intel x86 Emulator Accelerator (HAXM Installer)`. If any are not installed, Android Studios will install them when you select `OK`
- Further steps for Mac: https://docs.expo.dev/workflow/android-studio-emulator/
- In Android Studio go to Virtual Device Manager and Select `Create Device`
- Select a Pixel version with Play Store installed
- Download the Tiramisu system image
- Finish then press play to run device

#### Linux
