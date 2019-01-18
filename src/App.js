import React, { Component } from 'react';
import './App.css';

import {
  FroalaEditor,
  CustomFroalaEditor,
  QuillEditor,
  DraftEditor,
  CustomDraftEditor
} from './editors'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Rich text editor examples
          </p>
        </header>
        <FroalaEditor />
        <CustomFroalaEditor />
        <QuillEditor />
        <DraftEditor />
        <CustomDraftEditor />
      </div>
    );
  }
}

export default App;
