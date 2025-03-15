
import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/services/store/api-store';
import ErrorFallbackComponent from './src/components/error-fallback.component';
import { customTheme } from './src/components/theme';
import BottomTabBar from './src/navigators/bottom-tabs';





const Stack = createStackNavigator();

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <Provider store={store}>
        <PaperProvider theme={customTheme}>
          <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />

          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="profile"
                component={BottomTabBar}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

const styles = StyleSheet.create({});
