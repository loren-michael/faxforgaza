import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import SenLetter from "./SenLetter";

const pdfSaver = async (documentData) => {
  const blob = await pdf((
    <SenLetter
      title='Senator Letter PDF'
      pdfDocumentData={documentData}
    />
  )).toBlob();
  saveAs(blob, `SenatorLetter.pdf`)
};

export default pdfSaver;