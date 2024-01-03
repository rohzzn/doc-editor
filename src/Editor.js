import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({docFile}) {
  
  const [text, setText] = useState('');
  
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],         
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'header': '1'}, { 'header': '2' }, 'blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet'}, { 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl'}],                        
      [{ 'align': [] }],
      ['link', 'image', 'video']
    ]
  }

  const formats = [
    'font',
    'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  const handleTextChange = (value) => {
    setText(value);
  }

  return (
    <div className="editor">
      <ReactQuill 
        theme="snow" 
        value={text}
        onChange={handleTextChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );  
}

export default Editor;