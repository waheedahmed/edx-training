import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header text="Header" />
        <div>
          App Component
        </div>
        <Footer text="Footer" number={4} />
      </Fragment>
    );
  }
}

export default App;
