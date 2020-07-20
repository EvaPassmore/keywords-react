import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import images from './images.js';
import { UserContext } from './UserContext';

// const keywordsArr = ["adorable", "african", "american", "baby", "beauty", "black", "blowing", "boy", "bubbles", "casual", "child", "childhood", "curls", "cute", "emotion", "ethnic", "expression", "fun", "funny", "grass", "green", "happiness", "happy", "infant", "innocence", "innocent", "kid", "laughing", "lifestyle", "little", "minority", "mixed", "nature", "outdoor", "outside", "park", "people", "person", "playing", "portrait", "race", "smile", "soap", "spring", "summer", "summertime", "sun", "sweet", "young"];
let keywordsArr = images[0].keywords;
const correctArr = [];
const incorrectArr = [];
let score = 0;

class Words extends Component {

    constructor(props) {
      super(props);
      this.state = {
        correctAnswers: [],
        value: '',
        visibility: 'd-none'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clickNext = this.clickNext.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      let value = this.state.value;
        if (correctArr.includes(value) || incorrectArr.includes(value)) {
          alert('Please enter a new word');
        } else if (keywordsArr.includes(value)) {
          correctArr.push(value);
          score+=1;
        } else {
          incorrectArr.push(value);
        }
      this.setState({value: ''});
  
      event.preventDefault();
  
      if (correctArr.length + incorrectArr.length === 5) {
        this.setState({
          visibility: 'd-block',
          correctAnswers: correctArr
        });
      }
    }

    clickNext(event) {

    }

  
    render() {
      const allKeywords = keywordsArr.map(function(item) {
        if (correctArr.includes(item)) {
          return <span style={{color: 'green'}}>{item},&#32;</span>
        } else {
          return <span>{item},&#32;</span>;
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
        <p className='d-block text-left'>Correct guesses: {correctArr.join(", ")}</p>
        <p className='d-block text-left'>Incorrect guesses: {incorrectArr.join(", ")}</p>
        <p className={`${this.state.visibility} text-left`} id="keywordsList">{allKeywords}</p>
        <p className={`${this.state.visibility} text-left`}>Your score is: {score}</p>
        <Button variant="outline-secondary" className={`${this.state.visibility} mx-auto`} onClick={this.clickNext}>Next</Button>
        </>
      )
    }
  }
  
  export default Words;