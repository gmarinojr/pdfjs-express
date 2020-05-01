import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';
import { vs622Fields } from './vs622Fields';
import { mergeData } from './mergeData';

const App = () => {
  const viewer = useRef(null);
  const mergedData = mergeData(vs622Fields);
  // const input = document.getElementById('file_upload');
  const saveBlob = document.getElementById('save_blob');
  // const loadBlob = document.getElementById('load_blob');
  let xfdfData;

  useEffect(() => {
    WebViewer(
      { path: '/webviewer/lib', initialDoc: '/files/VS 6-22.pdf' },
      viewer.current
    ).then((instance) => {
      const { docViewer, annotManager } = instance;
      var Feature = instance.Feature;
      instance.enableFeatures([Feature.Download]);
      // console.log(instance.enableElement('downloadButton'), 'chbhcbfhb')
      // instance.enableFeatures([Feature.FilePicker]);
      docViewer.on('annotationsLoaded', async () => {
        // console.log(Feature.Download, 'heeey')
        annotManager.importAnnotations(mergedData);
      });
      saveBlob.addEventListener('click', async () => {
        xfdfData = await annotManager.exportAnnotations();
        console.log(xfdfData);
      });
    });
  }, []);

  return (
    <div className='App'>
      <div className='header'>React sample</div>
      <div className='webviewer' ref={viewer}></div>
    </div>
  );
};

export default App;

// loadBlob.addEventListener('click', async () => {
//   await annotManager.importAnnotations(vs622Fields);
// });
