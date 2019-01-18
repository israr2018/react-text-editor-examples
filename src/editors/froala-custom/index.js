import React, { Component } from 'react';
import './styles.css';
import FroalaEditor from 'react-froala-wysiwyg';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

class EditorComponent extends Component {
  constructor (props) {
    super(props);

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: ''
    };
  };

  handleModelChange (model) {
    this.setState({
      model
    });
  };

  config = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarInline: false,
    toolbarButtons: ['undo', 'redo' , '|', 'bold', 'italic', 'underline', 'fontSize', 'color', 'align', 'clearFormatting', 'insertLink', 'html'],
    quickInsertButtons: ['image', 'ul']
  };



  render () {
    return (
      <div className='editor'>
        <h1>Custom Froala</h1>
        <FroalaEditor
          config={this.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
      </div>
    )
  };
};

export default EditorComponent;