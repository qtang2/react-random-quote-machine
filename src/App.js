import React, { Component } from 'react';
import {random} from 'lodash'
import QuoteMachine from './components/QuoteMachine';
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid';
import {  withStyles } from '@material-ui/core/styles';

const styles={
  container:{
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  }
}


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      quotes:[],
      selectedQuoteIndex: null
    }

    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this)
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this)
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(response => response.json())
    .then(quotes => this.setState({quotes},this.assignNewQuoteIndex))
  }

  assignNewQuoteIndex(){
    this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()})
  }

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return undefined
    }
    return this.state.quotes[this.state.selectedQuoteIndex]
  }

  generateNewQuoteIndex(){
    if(!this.state.quotes.length){
      return
    }
    return random(0, this.state.quotes.length-1)
  }

  nextQuoteHandler(){
    console.log(this.state.selectedQuoteIndex)
  }


  render(){
    console.log(this.state.selectedQuoteIndex)
    return (
      <Grid className = {this.props.classes.container} id="quote-box" justify="center" container >
        <Grid xs={11} lg={8} item>
          {this.selectedQuote ?
          <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
            : null
          }
          
        </Grid>
        
      </Grid>
    );
  }
  
}

export default withStyles(styles)(App)
