import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import RepLetter from "./RepLetter";

const repPdfSaver = async (representative) => {
  console.log(representative)
  const blob = await pdf(( <RepLetter official={representative} /> )).toBlob();
  saveAs(blob, `${representative} Letter.pdf`)
};

export default repPdfSaver;