import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import GlobalStack from "../../navigation/globalStack/GlobalStack";

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GlobalStack />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
