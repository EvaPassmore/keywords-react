import React, { Component, useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import images from './images.js';
import { UserContext } from './UserContext';
import { MetaContext } from './MetaContext';

let correctArr = [];
let incorrectArr = [];
let score = 0;
let i = 0;

function Words() {

// let metaWeb = "body, exercise, fit, fitness, functional, girl, gym, health, healthy, indoors, lifestyle, model, muscles, muscular, people, pilates, plank, planking, slim, space, sport, sportive, sports person, sportswear, sportswoman, sporty, static, strength, strong, style, training, weight, woman, workout, yoga, young"

  // console.log(metaWeb.replace(/\,\s/g, '", "'))

  const [text, setText] = useState('');
  const [vis, setVis] = useState('d-none');
  const [disabled, setDisabled] = useState(false);

  const [img, setImg] = useContext(UserContext);
  const [meta, setMeta] = useContext(MetaContext);

  let keywordsArr = meta;

    const handleChange = (event) => {
      setText(event.target.value);
    }

    const handleSubmit = (event) => {
        if (correctArr.includes(text) || incorrectArr.includes(text)) {
          alert('Please enter a new word');
        } else if (keywordsArr.includes(text)) {
            correctArr.push(text);
            score+=1;
          } else {
            incorrectArr.push(text);
          }
          setText('');

        event.preventDefault();

        if (correctArr.length + incorrectArr.length === 5) {
        setVis('d-block');
        setDisabled(!disabled);
      }    
    }
  
    const allKeywords = keywordsArr.map(
      function(item) {
          if (item === keywordsArr[keywordsArr.length-1] && correctArr.includes(item)) {
            return <span style={{color: 'green', fontWeight: 'bold'}}>{item}</span>;
          } else if (item === keywordsArr[keywordsArr.length-1] && !correctArr.includes(item)) {
            return <span>{item}</span>;
          } else if (correctArr.includes(item)) {
            return <span style={{color: 'green', fontWeight: 'bold'}}>{item},&#32;</span>;
          } else {
            return <span>{item},&#32;</span>;
          }
    });

    console.log(allKeywords)

    const nextImage = () => {
      if (i === images.length-1) {
        i=-1;
      }
      setImg(images[i+1].path);
      setMeta(images[i+1].meta);
      setVis('d-none');
      setDisabled(false);
      i++;
      correctArr = [];
      incorrectArr = [];
      score = 0;
    }
   
      return (
        <>
        <Form className="mt-5 mr-5 p-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Make a guess which keyword is in the metadata of this image.</Form.Label>
            <Form.Control type="text" placeholder="Enter keyword" value={text} onChange={handleChange} disabled={disabled}/>  
          </Form.Group>
          <Button variant="outline-secondary" type="submit" value="Submit">Submit</Button>
      
        <p className='d-block text-left'>Correct guesses: {correctArr.join(", ")}</p>
        <p className='d-block text-left'>Incorrect guesses: {incorrectArr.join(", ")}</p>
        <p className={vis} >{allKeywords}</p>
        <p className={`${vis} text-danger font-weight-bold`} >Your score is: {score}</p>
        <Button variant="secondary" className={`${vis} mx-auto`} onClick={nextImage}>Next</Button>
        </Form>
        </>
      )
    }
  
  export default Words;