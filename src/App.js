import React, { Component, useState } from 'react';
import './App.css';
import Img from './Img';
import Navig from './Navig';
import Words from './Words';
import images from './images.js';
import { UserContext } from './UserContext';
import { MetaContext } from './MetaContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {

  let i = 0;
  const [path, setPath] = useState(images[i].path);
  const [meta, setMeta] = useState(images[i].meta);

  return (
    <div className="App">
      <Navig />
      <Container fluid >
        <UserContext.Provider value={[path, setPath]}>
        <MetaContext.Provider value={[meta, setMeta]}>
          <Row>
            <Col>
              <Img />
            </Col>
            <Col>
              <Words />
            </Col>
          </Row>
          </MetaContext.Provider>
          </UserContext.Provider>
      </Container>
    </div>
  );
}

export default App;


