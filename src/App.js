import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import Fun from "./components/Fun";
import Projects from "./components/Projects";
// import Nav from "./components/Nav";
import NavbarBoot from "./components/NavbarBoot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



//hamburger menu code copied into a readMe to revisit at a later time

function App(props) {
  
  return (
    <Router>
      {/* to give the sidedrawer 100% set inline to 100 height */}
      <div style={{ height: "100%" }} className="App">
        <Switch>
          <Route path="/about" component={About}>
            <NavbarBoot />
            <About />
            <Footer />
          </Route>

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
