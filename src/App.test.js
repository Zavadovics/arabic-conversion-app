import { render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './components/InputField';
import Result from './components/Result';
import Button from './components/Button';
import Home from './components/Home';

test('renders h1 text', () => {
  render(<App />);
  const linkElement = screen.getByText(/number conversion tool/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App></App>, div);
});

test('renders InputField component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputField></InputField>, div);
});

test('renders Result component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Result></Result>, div);
});

test('renders Button component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

test('renders Home component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home></Home>, div);
});
