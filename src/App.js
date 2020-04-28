import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';
import cft from './mockData.json';
import {
  xfdfString
} from './xfdfDataString'
const parsed = JSON.parse(cft);

const App = () => {
  const viewer = useRef(null);
  const input = document.getElementById('file_upload');
  const saveBlob = document.getElementById('save_blob');
  const loadBlob = document.getElementById('load_blob');

  // let documentBlob;
  let xfdfData;

  // const saveBlobToServer = (blob) => {
  //   console.log(blob);
  // };

  const viewer = useRef(null);
  const saveBlobToServer = (blob) => {
    console.log(blob);
  };
  useEffect(() => {
    WebViewer({
      path: '/webviewer/lib',
      initialDoc: '/files/VS 6-22.pdf',
    },
      viewer.current
    ).then((instance) => {
      const {
        docViewer
      } = instance;
      const annotManager = docViewer.getAnnotationManager();
      input.addEventListener('change', function () {
        var file = input.files[0];
        instance.loadDocument(file, {
          filename: file.name
        });
      });
      docViewer.on('annotationsLoaded', async () => {
        const documentStream = await docViewer.getDocument().getFileData({});
        documentBlob = new Blob([documentStream], {
          type: 'application/pdf',
        });
        // console.log(typeof xfdfString, 'xfdf')
        console.log(cft);
        await annotManager.importAnnotations(xfdfString);
      });
      saveBlob.addEventListener('click', async () => {
        xfdfData = await annotManager.exportAnnotations();
        // saveBlobToServer(documentBlob);
        console.log(xfdfData);
      });
      loadBlob.addEventListener('click', async () => {
        // annotManager.importAnnotations(xfdfData);
        await annotManager.importAnnotations(xfdfString);
        // const getCommand = await annotManager.exportAnnotCommand();
        // console.log(getCommand);
        // instance.loadDocument(documentBlob, {
        //   filename: 'myfile.pdf'
        // });
        // instance.drawAnnotations(xfdfData)
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
