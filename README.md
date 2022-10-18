# nc-project-front-end

## Initial setup of RN project

1. Install expo CLI globally: `npm i -g expo-cli`
2. In the root of the repository create the expo directory: `expo init <project-name>`
3. Under `Managed Workflow` in the terminal prompt select `blank (TypeScript)`

### Expo project files

#### Assets folder

- Image/audio/video/etc files
- Any kind of asset that needs to be bundled with the app
- To import images into a React Native project:
  1. Create a file called `custom.d.ts` in the `src` folder
  2. Add the `declare module "*.png";` to the file
  3. Import the image file into the React App using `import <filename> from "<path>"`

#### App.tsx

- For IOS View is mapped to UIView
- For Android View is mapped to AndroidView

####

### iOS Simulation

#### Mac

- Open XCode, got to Preferences -> Location, ensure that the latest CLI is enabled
- Open the iphone simulator by going to Developer Tools -> Simulator
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

### Notes on project structure

- Main Nav houses the AuthStack and AppStack
- AuthStack houses login + signup screens
- Appstack houses HomeScreen + Event screens
- all screens and components are exported into the index for their relative folder
- importing screens/components -> `import {ScreenName} from "../screens"`

### unable to resolve modules ../../App from ...

- make sure node_modules/expo/AppEntry.js contains `import App from '../../src/App';`

### Camera Roll Access

- run `npx expo install expo-image-picker`
