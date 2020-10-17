import React, { Component } from 'react';
import {random} from 'lodash'
import QuoteMachine from './components/QuoteMachine';
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid';
import {  withStyles } from '@material-ui/core/styles';

const styles={
  container:{
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column',
    alignItems:'center',
    transitionDuration: "1s",
    transitionTimingFunction: 'ease-out'
  },
  gridItem:{
    display: 'flex',
    height: '40vh',
    width: '50vw',
    justifyContent: 'center',
    alignItems:'center'
  }
}


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      quotes:[],
      selectedQuoteIndex: null,
      colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ],
      selectedColorIndex: null
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
    this.setState({selectedColorIndex:this.generateNewColorIndex()})
  }

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return undefined
    }else{

      return this.state.quotes[this.state.selectedQuoteIndex]
    }
    
  }

  generateNewQuoteIndex(){
    if(!this.state.quotes.length){
      return
    }
    return random(0, this.state.quotes.length-1)
  }

  generateNewColorIndex(){
    return random(0, this.state.colors.length-1)
  }

  nextQuoteHandler(){
    console.log(this.state.selectedQuoteIndex)
  }


  render(){
    console.log(this.state.selectedQuoteIndex)
    return (
      <Grid 
      className = {this.props.classes.container} 
      id="quote-box" 
      justify="center" 
      container 
      style={{backgroundColor:this.state.colors[this.state.selectedColorIndex]}}>
        <Grid className={this.props.classes.gridItem} xs={11} lg={8} item style={{color:this.state.colors[this.state.selectedColorIndex]} }>
          {this.selectedQuote ?
          <QuoteMachine 
          selectedQuote={this.selectedQuote} 
          assignNewQuoteIndex={this.assignNewQuoteIndex} 
          textColor={this.state.colors[this.state.selectedColorIndex]}/>
            : null
          }
        </Grid>
        
        <label style={{display:'flex', displayDirection:'column', justifyContent:'flex-end'}}>© Qian Tang 2020</label>
      </Grid>
      
    );
  }
  
}

export default withStyles(styles)(App)
