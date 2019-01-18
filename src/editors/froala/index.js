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

  render () {
    return (
      <div className='editor'>
        <h1>Froala</h1>
        <FroalaEditor
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
      </div>
    )
  };
}

export default EditorComponent;