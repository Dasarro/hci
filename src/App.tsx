import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { Component } from './Component';

const App = () => {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}
export default App;
