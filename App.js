import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppRoutes from './src/pages/Routes';
export default function App() {
  return (
      <AppRoutes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
