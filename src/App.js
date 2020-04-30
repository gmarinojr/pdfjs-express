import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';
import { vs622Fields } from './vs622Fields';
import { mergeData } from './mergeData';
import {
  xml2json
} from './helpers/xmlJson';
import {
  json2xml
} from './helpers/jsonXml';
import {
  jsonMapper
} from './helpers/jsonMapper';
// import xmlParser from 'xml2json';

const App = () => {
  const viewer = useRef(null);
  const mergedData = mergeData(vs622Fields);
  // console.log('heeey')
  // console.log(xmlParser.toJson(vs622Fields))

  // const input = document.getElementById('file_upload');
  // const saveBlob = document.getElementById('save_blob');
  // const loadBlob = document.getElementById('load_blob');
  // let xfdfData;
  // const saveBlobToServer = (blob) => {
  //   console.log(blob);
  // };
  const showXml = (xml) => {
    //parse xml
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    return xmlDoc
    // return xmlDoc.selectNodes('/xfdf/fields/field');

  }
  useEffect(() => {
    WebViewer(
      { path: '/webviewer/lib', initialDoc: '/files/VS 6-22.pdf' },
      viewer.current
    ).then((instance) => {
      const { docViewer, annotManager, Annotations } = instance;
      const xmlDom = showXml(vs622Fields);
      const xmlJson = xml2json(xmlDom, "");
      const mappedMockData = jsonMapper(xmlJson, cft);
      docViewer.on('annotationsLoaded', async () => {
        const updatedXml = json2xml(mappedMockData, "");
        await annotManager.importAnnotations(updatedXml);
        // annotManager.importAnnotations(mergedData);
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
//   await annotManager.importAnnotations(vs622Fields);
// });
