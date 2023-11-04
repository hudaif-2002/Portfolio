import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Hudaif_Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';//contains styles for the annotation layer of a PDF page, which is used for features like highlighting or commenting.
import 'react-pdf/dist/esm/Page/TextLayer.css';//contains styles for the text layer of a PDF page, which is responsible for rendering selectable text.

//PDF.js uses a web worker to perform heavy tasks, and this line specifies the location of the worker script.
//The script is sourced from the unpkg.com CDN, and it uses the version of PDF.js specified by pdfjs.version.
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
//PDF.js Web Worker:
// PDF.js is a JavaScript library for rendering PDF documents directly in the browser.
// To handle computationally intensive tasks, such as rendering and processing PDF files, PDF.js uses a web worker. Web workers allow parallel execution of scripts in the background, separate from the main thread, to prevent UI freezing.

// Setting Worker Source:
// The line pdfjs.GlobalWorkerOptions.workerSrc = //unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`` sets the source URL for the PDF.js worker script.
// pdfjs.GlobalWorkerOptions.workerSrc is a configuration option provided by PDF.js to set the location of the worker script.

// CDN Source - unpkg.com:
// The script is sourced from the unpkg.com CDN (Content Delivery Network). CDNs host and distribute libraries, scripts, and other assets to improve performance and reduce the load on individual servers.
// The URL construction uses the pdfjs.version variable to specify the version of the PDF.js library.

// Minified Script:
// The worker script is specified as build/pdf.worker.min.js, indicating that it's a minified (compressed) version of the PDF.js worker script. Minification reduces file size for faster downloads.


const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
          <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
      </Document>

      <a href={pdf} target='_blank' download="Hudaif's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume