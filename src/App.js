import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import Fun from "./components/Fun";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about" component={About}>
            <Nav />
            <About/>
            <Footer />
          </Route>
          {/*  add new nav for other pages here to start */}
          {/* <Nav/> revisit not working as expected   */}
          <Route path="/projects" component={Projects} />
          <Route path="/fun" component={Fun} />
          <Route path="/" exact>
            <Header />
            <MainNav />
            <Content />
            <Footer />
          </Route>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
