import React, { useContext } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { NameContext } from '../context/NameStore';
import { AddressContext } from '../context/AddressStore';
import senPdfSaver from './SenPdfSaver';

function SenCard ({ senator }) {
  const [name, setName] = useContext(NameContext);
  const [address, setAddress] = useContext(AddressContext);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
    },
    text: {
      margin: 30,
      fontSize: 20,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    }
  });

  const greeting = `Dear ${senator.name},`
  const paragraph1 = `I am writing as a constituent to demand an immediate, permanent ceasefire in occupied Palestine. I urge you to issue a public statement in support of the ceasefire resolution introduced in the House by Rep. Cori Bush.`
  const paragraph2 = `Over 22,000 Palestinians have been killed since October 7. The humanitarian situation is dire for the 2.3 million Palestinians living in Gaza. 80 percent of Palestinians living in Gaza are now homeless. Israel’s unrelenting violence has led to worsening conditions, including the rapid spread of deadly cholera and widespread shortages of food, clean water, and medical supplies. Israel has damaged or destroyed housing, educational and medical facilities. They have targeted journalists and media workers. The escalating, catastrophic violence threatens to lead to more and more loss of life for Palestinians. This is genocide.`
  const paragraph3 = `Congress must hear loud and clear that Americans support a permanent ceasefire, and want to ensure that Palestine’s freedom is no longer a dream.`
  const paragraph4 = `Millions of human lives are at stake. We must build on our collective humanity and call for an immediate ceasefire.`
  const paragraph5 = `I will end this letter with a reminder that 60% of American voters support a ceasefire, yet only 11 percent of our elected representatives have shown support of this view. This poll data includes 76% of Democrats, 57% of Independents, and 49% of Republicans.`
  const paragraph6 = `If you do not act, we will remember.`
  const paragraph7 = `Thank you.`

  const fileName = `${senator.name} Letter.pdf`

  const ThisSenatorLetter = () => (
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.header}></Text>
                <Text></Text>
                <br></br>
                <br></br>
                <Text style={styles.text}>
                  {greeting}{"\n"}{"\n"}
                  {paragraph1}{"\n"}{"\n"}
                  {paragraph2}{"\n"}{"\n"}
                  {paragraph3}{"\n"}{"\n"}
                  {paragraph4}{"\n"}{"\n"}
                  {paragraph5}{"\n"}{"\n"}
                  {paragraph6}{"\n"}{"\n"}
                  {paragraph7}{"\n"}{"\n"}
                </Text>
                <Text style={styles.text}>
                {name}{"\n"}
                {address.line1}{"\n"}
                {address.city}, {address.state}  {address.zip}
                </Text>
              </View>
            </Page>
          </Document>
  )

  // function handleDownload(e) {
  //   const senatorName = senator.name;
  //   e.preventDefault();
  //   senPdfSaver(senatorName);
  // }

  return (
    <div class="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-merriweather">
        State Senator {senator.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-merriweather">
        {senator.party}
        {/* {senator.photoUrl ? <img src={senator.photoUrl} alt="Official Portrait"/> : <></>} */}
      </p>
      <br></br>
      <div>
        <PDFDownloadLink document={<ThisSenatorLetter />} fileName={fileName} >
          {({ blob, url, loading, error }) =>
            loading ? 
              <button type="button" class="disabled bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init data-te-ripple-color="light"> Loading document...</button> 
              : 
              <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init="false" data-te-ripple-color="dark"> Download Letter </button>
          }
        </PDFDownloadLink>
      </div>
      <br></br>
    </div>
  )
}

export default SenCard