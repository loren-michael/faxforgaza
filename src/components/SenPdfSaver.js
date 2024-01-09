import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import SenLetter from "./SenLetter";

const senPdfSaver = async (documentData) => {
  console.log(documentData)
  // const blob = await pdf((
  //   <SenLetter
  //     title='Senator Letter PDF'
  //     pdfDocumentData={documentData}
  //   />
  // )).toBlob();
  // saveAs(blob, `SenatorLetter.pdf`)
};

export default senPdfSaver;