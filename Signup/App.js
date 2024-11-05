// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import SignUpForm from './src/components/SignUpForm';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignUpForm />
    </SafeAreaView>
  );
};

export default App;
