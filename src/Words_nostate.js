import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import images from './images.js'


const keywordsArr = ["adorable", "african", "american", "baby", "beauty", "black", "blowing", "boy", "bubbles", "casual", "child", "childhood", "curls", "cute", "emotion", "ethnic", "expression", "fun", "funny", "grass", "green", "happiness", "happy", "infant", "innocence", "innocent", "kid", "laughing", "lifestyle", "little", "minority", "mixed", "nature", "outdoor", "outside", "park", "people", "person", "playing", "portrait", "race", "smile", "soap", "spring", "summer", "summertime", "sun", "sweet", "young"];
const correctArr = [];
const incorrectArr = [];
let score = 0;

function Words() {

  const [vis, setVis] = useState("d-none");


  function handleClick() {
    setVis("d-block");

  }

 
  //event handling
  //match correct words
  //turn correct words green

  return (
    <>
    <Form>
      <Form.Group>
        <Form.Label>Guess the word</Form.Label>
        <Form.Control type="text" placeholder="enter a word" id="keywordInput"></Form.Control>
        <Form.Text>Guess which keywords is in the metadata for this image</Form.Text>
      </Form.Group>
      <Button variant="secondary" type="submit" onClick={handleClick}>Submit</Button>
    </Form>

    <p className={vis}>
      Keywords: {keywordsArr}
    </p>

    <p className={vis}>
      Score: {score}
    </p>

    <Button className={vis} variant="secondary">Next</Button>
    </>
  )
}

  
 
  

  
  export default Words;