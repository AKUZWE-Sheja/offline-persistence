const saveOfflineAction = async (action) => {
  const storedActions = JSON.parse(await AsyncStorage.getItem('offlineActions')) || [];
  storedActions.push(action);
  await AsyncStorage.setItem('offlineActions', JSON.stringify(storedActions));
};

const replayActions = async () => {
  const storedActions = JSON.parse(await AsyncStorage.getItem('offlineActions')) || [];
  storedActions.forEach(action => {
    // Perform the action when online
  });
  await AsyncStorage.removeItem('offlineActions');
};
