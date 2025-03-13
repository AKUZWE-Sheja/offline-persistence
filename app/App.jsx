import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { store, persistor } from "../redux/store";
import { addMessage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import OfflineNotice from "../components/OfflineNotice";
import { storeData } from "../storage/storage";
import { useNetworkStatus } from "../components/NetworkStatus";

// Component for displaying and sending messages
const MessageScreen = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages); // Retrieve messages from Redux store
  const [message, setMessage] = useState(""); 
  const isConnected = useNetworkStatus(); 

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    dispatch(addMessage(message));

    if (isConnected) {
      await storeData("messages", [...messages, message]); // Save only if online
    } else {
      console.warn("No internet. Message will be saved locally.");
    }

    setMessage("");
  };


  return (
    <View style={{ flex: 1, padding: 20 }}>
      {!isConnected && <OfflineNotice />} {/* Show notice if offline */}

      {/* List of messages stored in Redux */}
      <FlatList
        data={messages} // Data source: Redux messages state
        renderItem={({ item }) => <Text>{item}</Text>} // Render each message as a Text element
        keyExtractor={(item, index) => index.toString()} // Ensure unique keys for each message
      />

      {/* Input field for typing a new message */}
      <TextInput
        placeholder="Type a message..."
        value={message}
        onChangeText={setMessage}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      {/* Button to send the message */}
      <Button title="Send Message" onPress={handleSendMessage} />
    </View>
  );
};

// Main App component wrapping MessageScreen with Redux and PersistGate
const App = () => (
  <Provider store={store}> {/* Provide Redux store to entire app */}
    <PersistGate loading={null} persistor={persistor}> {/* Persist Redux state across app reloads */}
      <MessageScreen /> {/* Render the MessageScreen component */}
    </PersistGate>
  </Provider>
);

export default App; // Export App component as default
