import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const SafeAreaWrapper = (props: { children: JSX.Element }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {props.children}
    </SafeAreaView>
  )
}