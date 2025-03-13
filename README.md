# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


1️⃣ Redux Store (store.js)
Creates a global store using createStore.
Persists data using redux-persist and AsyncStorage, 
so messages don’t disappear on app restart.
persistReducer wraps the root reducer to enable persistence.
Exports store and persistor to manage state.

2️⃣ Reducer (reducers.js)
Manages the messages array in Redux state.
Listens for the "ADD_MESSAGE" action to append new messages.
Returns unchanged state if no recognized action is dispatched.

3️⃣ Action Creator (actions.js)
Defines addMessage(message), which:
Returns an action with type "ADD_MESSAGE".
Sends the message as payload to the reducer.

🤔 How It Works
Messages are stored in Redux and persisted using AsyncStorage.
The reducer updates the state when ADD_MESSAGE is dispatched.
The app can access and display messages even after reload.