import React from "react";

// Modules
import { Provider } from 'react-redux';

// Utilities
import store from '../../store/index';
import { BrowserRouter } from "react-router-dom";
import "./index.css";

//Components
import Header from "../../components/Header/Header";
import DiscographyView from "../DiscographyView/DiscographyView";
import ToursView from "../ToursView/ToursView";
import LatterCompositionsView from "../LatterCompositionsView/LatterCompositionsView";

class Root extends React.Component {

  render() {
    
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <section>
            <DiscographyView/>
            <ToursView/>
            <LatterCompositionsView/>
          </section>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Root;