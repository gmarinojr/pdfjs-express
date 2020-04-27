import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';

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

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/VS 6-22.pdf',
      },
      viewer.current
    ).then((instance) => {
      const { docViewer, annotManager } = instance;
      input.addEventListener('change', function() {
        var file = input.files[0];
        instance.loadDocument(file, { filename: file.name });
      });

      docViewer.on('documentLoaded', async () => {
        // const documentStream = await docViewer.getDocument().getFileData({});
        // documentBlob = new Blob([documentStream], {
        //   type: 'application/pdf',
        // });
        // annotManager.on('fieldChanged', (field, value) => {
        //   console.log('Field changed: ' + field.name + ', ' + value);
        // });
        saveBlob.addEventListener('click', async () => {
          xfdfData = await annotManager.exportAnnotations();
          // saveBlobToServer(documentBlob);
        });
        loadBlob.addEventListener('click', async () => {
          await annotManager.importAnnotations(xfdfData);
        });
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
