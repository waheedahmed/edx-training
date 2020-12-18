import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { FormikForm } from './components/form';


class App extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <Header text="Header" /> */}
        <FormikForm />
        {/* <Footer text="Footer" /> */}
      </Fragment>
    );
  }
}

export default App;
