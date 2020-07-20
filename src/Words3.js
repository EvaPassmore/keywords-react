import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import images from './images.js'


const keywordsArr = ["adorable", "african", "american", "baby", "beauty", "black", "blowing", "boy", "bubbles", "casual", "child", "childhood", "curls", "cute", "emotion", "ethnic", "expression", "fun", "funny", "grass", "green", "happiness", "happy", "infant", "innocence", "innocent", "kid", "laughing", "lifestyle", "little", "minority", "mixed", "nature", "outdoor", "outside", "park", "people", "person", "playing", "portrait", "race", "smile", "soap", "spring", "summer", "summertime", "sun", "sweet", "young"];
const correctArr = [];
const incorrectArr = [];
let score = 0;


class Words extends Component {

  
    constructor(props) {
      super(props);
      this.state = {
        correctAnswers: [],
        keywordsContents: ["adorable", "african", "american", "baby", "beauty", "black", "blowing", "boy", "bubbles", "casual", "child", "childhood", "curls", "cute", "emotion", "ethnic", "expression", "fun", "funny", "grass", "green", "happiness", "happy", "infant", "innocence", "innocent", "kid", "laughing", "lifestyle", "little", "minority", "mixed", "nature", "outdoor", "outside", "park", "people", "person", "playing", "portrait", "race", "smile", "soap", "spring", "summer", "summertime", "sun", "sweet", "young"],
        value: '',
        visibility: 'd-none'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      let value = this.state.value;
        if (keywordsArr.includes(value)) {
          correctArr.push(value);
          score+=1;
        } else {
          incorrectArr.push(value);
        }

        let style = {
          color: 'green'
        };

   


      // this.setState({value: ''});
  
      //why use this?
      event.preventDefault();
  
      if (correctArr.length + incorrectArr.length === 5) {

        this.setState({
          visibility: 'd-block',
          correctAnswers: correctArr
        });
      }
    }
  
  
  
    render() {

     
      const allKeywords = keywordsArr.map(function(item) {
      
        if (correctArr.includes(item)) {
          return <span style={{color: 'green'}}>{item}&nbsp;</span>
        } else {
          return <span>{item}&nbsp;</span>;
        }
   
    });

      return (
        <>
        <Form className="mt-5 mr-5 p-3" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Make a guess which keyword is in the metadata of this image.</Form.Label>
            <Form.Control type="text" placeholder="Enter keyword" value={this.state.value} onChange={this.handleChange} />  
          </Form.Group>
          <Button variant="outline-secondary" type="submit" value="Submit">
            Submit
          </Button>
        </Form>
        <p className='d-block'>Correct guesses: {correctArr.join(", ")}</p>
        <p className='d-block'>Incorrect guesses: {incorrectArr.join(", ")}</p>
        <p className={this.state.visibility} id="keywordsList">{allKeywords}</p>
        <p className={this.state.visibility}>Your score is: {score}</p>
        <Button variant="outline-secondary" className={this.state.visibility}>Next</Button>
        </>
      )
    }
  }
  
  export default Words;