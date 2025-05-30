import React, { useEffect, useRef } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"

const TextEditor = () => {
    const editorRef=useRef(null)
    const quillRef=useRef(null)

    useEffect(()=>{
        if(editorRef.current && !quillRef.current)
        {
            quillRef.current= new Quill(editorRef.current,{theme:"snow"})
        }
    })
  return (
    <div ref={editorRef}></div>
  )
}

export default TextEditor