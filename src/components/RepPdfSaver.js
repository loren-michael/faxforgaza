import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import RepLetter from "./RepLetter";

const repPdfSaver = async (documentData) => {
  console.log(documentData)
  // const blob = await pdf((
  //   <RepLetter
  //     title='Senator Letter PDF'
  //     pdfDocumentData={documentData}
  //   />
  // )).toBlob();
  // saveAs(blob, `RepresentativeLetter.pdf`)
};

export default repPdfSaver;