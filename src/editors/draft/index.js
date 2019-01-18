import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
    this.setEditor = this.setEditor.bind(this);
    this.focusEditor = this.focusEditor.bind(this);
  };

  onChange (editorState) {
    this.setState({editorState});
  };

  setEditor (editor) {
    this.editor = editor;
  };

  focusEditor () {
    if (this.editor) {
      this.editor.focus();
    }
  };

  componentDidMount() {
    this.focusEditor();
  };

  render() {
    return (
      <div className='editor' onClick={this.focusEditor}>
        <h2>Draft</h2>
        <div className='quill-editor'>
          <Editor
            ref={this.setEditor}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
};

export default EditorComponent
