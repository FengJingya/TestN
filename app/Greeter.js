/**
 * Created by ZK04 on 2018/6/28.
 */
// Greeter.js
import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';//µº»Î

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}> 
        {config.greetText}
      </div>
    );
  }
}

export default Greeter

