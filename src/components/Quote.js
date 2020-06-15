import React, {Component} from "react";
import axios from "axios";
import styles from "./Quote.module.css";

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quote: null,
      author: "",
    };
    this.getQuotes = this.getQuotes.bind(this);
  }
//   componentDidMount() {
//     this.getQuotes;
//   }
  getQuotes(){
      const url  =
     " http://quotes.stormconsultancy.co.uk/random.json"
    axios
      .get(url)
      .then(data =>
        this.setState({ quote: data.data.quote, author: data.data.author })
      );
    console.log('clicked');
  }
  
  render() {
    return (
      <div className = {styles.quoteContainer}>
        <p className = {styles.sidebarTitle}>Some Random Quotes!</p>
        <div className={styles.container}>
          <div className={styles.quoteBox}>
            <div className={styles.quote}>
            {!this.state.quote ? (
              <p>Take the journey, soar like an eagle, there are so many roads to explore, so little time</p>
            ) : (
              <p>{this.state.quote}</p>
            )}
            
            <p>
              {' '}
              &mdash;{this.state.author} &mdash;
            </p>
            </div>
            <div className={styles.author}></div>
            
          </div>
        </div>
        <button className={styles.new_quote} onClick={this.getQuotes}>New Quote</button>
      </div>
    );
    }
}
export default Quote;
