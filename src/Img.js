import React, { Component, useState, useContext } from 'react';
import Image from 'react-bootstrap/Image';
import images from './images.js';
import Button from 'react-bootstrap/Button';
import { UserContext } from './UserContext';
import { MetaContext } from './MetaContext';


function Img() {

  const [path, setPath] = useContext(UserContext);

  return (
    <>
        <Image src={path} alt="image" className="mt-5" id="imgKeywords" />
    </>
    )
  }

export default Img;