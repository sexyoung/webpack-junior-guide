import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import style from "./app.scss";

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

if(module.hot){
  module.hot.accept();
}


ReactDOM.render(
  <App />,
  document.getElementById('content')
);
