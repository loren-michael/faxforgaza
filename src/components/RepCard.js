import React, { useContext } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { NameContext } from '../context/NameStore';
import { AddressContext } from '../context/AddressStore';

function RepCard ({ representative }) {
  const [name, setName] = useContext(NameContext);
  const [address, setAddress] = useContext(AddressContext);

  Font.registerHyphenationCallback(word => [word]);
  
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
      fontSize: 16,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    }
  });

    const greeting = `Dear ${representative.name},`
    const paragraph1 = `I am writing as a constituent to demand an immediate, permanent ceasefire in occupied Palestine. I urge you to issue a public statement in support of a ceasefire. Additionally, if you have not already done so, please sign on as a co-sponsor of H. Res. 786, the ceasefire resolution introduced by Rep. Cori Bush.`
    const paragraph2 = `Over 37,000 Palestinians have been killed since October 7 with estimates approaching 40,000. This includes 15,000 children who have died. The UN has added Israel to a blacklist of global offenders that harm children. The humanitarian situation is dire for the 2.3 million Palestinians living in Gaza. 80 percent of Palestinians living in Gaza are now homeless. Israel’s unrelenting violence has led to worsening conditions, including the rapid spread of deadly cholera and widespread shortages of food, clean water, and medical supplies. Israel has damaged or destroyed housing, educational and medical facilities. They have targeted and killed over 100 journalists and media workers. The escalating, catastrophic violence threatens to lead to more and more loss of life for Palestinians. This is genocide.`
    const paragraph3 = `Congress must hear loud and clear that Americans support a permanent ceasefire, and want to ensure that Palestine’s freedom is no longer a dream.`
    const paragraph4 = `Millions of human lives are at stake. We must build on our collective humanity and call for an immediate and permanent ceasefire.`
    const paragraph5 = `I will end this letter with a reminder that 67% of American voters support a ceasefire, yet only 11 percent of our elected representatives have shown support of this view. This poll data includes 77% of Democrats, 69% of Independents, and 56% of Republicans. These numbers have increased steadily over the last 60 days.`
    const paragraph6 = `If you do not act, we will remember.`
    const paragraph7 = `Thank you.`

  const fileName = `${representative.name} Letter.pdf`;

  const ThisRepresentativeLetter = () => (
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
            {paragraph7}{"\n"}{"\n"}{"\n"}
            {name}{"\n"}
            {address.line1}{"\n"}
            {address.city}, {address.state}  {address.zip}
          </Text>
        </View>
      </Page>
    </Document>
)

  return (
    <div class="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-merriweather">
        Local Representative {representative.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-merriweather">
        {representative.party}
        {representative.photoUrl ? <img src={representative.photoUrl} alt="Official Portrait"/> : <div></div>}
      </p>
      <p>Document preview:</p>
      <PDFViewer>
        <ThisRepresentativeLetter />
      </PDFViewer>
      <br></br>
      <span>
        <PDFDownloadLink document={<ThisRepresentativeLetter />} fileName={fileName} >
          {
            <button type="button" class="bg-green-700 hover:bg-green-900 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init="false" data-te-ripple-color="dark"> Download Letter </button>
          }
        </PDFDownloadLink>
        <div>
          <a href="https://faxzero.com/fax_congress.php" class="text-green-800 font-bold" target="_blank" rel="noopener noreferrer">
            <button type="button" class="bg-green-700 hover:bg-green-900 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init="false" data-te-ripple-color="dark"> FaxZero Representative List </button>
          </a>
        </div>
      </span>
      <br></br>
    </div>
  )
}

export default RepCard
