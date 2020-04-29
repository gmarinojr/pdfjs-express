import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';
import cft from './mockData.json';
import { xfdfFields } from './xfdfFields';
import { saveToXml } from './saveToXml';

const App = () => {
  const viewer = useRef(null);
  const mergedData = saveToXml(xfdfFields);
  // const input = document.getElementById('file_upload');
  // const saveBlob = document.getElementById('save_blob');
  // const loadBlob = document.getElementById('load_blob');
  // let documentBlob;
  // let xfdfData;
  // const saveBlobToServer = (blob) => {
  //   console.log(blob);
  // };
  useEffect(() => {
    WebViewer(
      { path: '/webviewer/lib', initialDoc: '/files/VS 6-22.pdf' },
      viewer.current
    ).then((instance) => {
      const { docViewer, annotManager, Annotations } = instance;
      docViewer.on('annotationsLoaded', async () => {
        annotManager.importAnnotations(mergedData);
        console.log(Annotations.total.getBottom())
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

// saveBlob.addEventListener('click', async () => {
//   xfdfData = await annotManager.exportAnnotations();
//   console.log(xfdfData);
//   saveBlobToServer(documentBlob);
// });
// loadBlob.addEventListener('click', async () => {
//   await annotManager.importAnnotations(xfdfFields);
// });
