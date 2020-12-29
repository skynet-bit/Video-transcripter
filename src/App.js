import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const VideoCheck = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button id="loadvid" onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Video Player</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">AI Transcriptor</h1>
      <VideoCheck>
       Please enter URL of the Youtube video to Analyse in the next step
              </VideoCheck>
    </Jumbotron>
  </Container>
);

export default App;
