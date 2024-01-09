import React, { useContext } from 'react';
import { NameContext } from '../context/NameStore';
import { AddressContext } from '../context/AddressStore';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

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
    margin: 12,
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  }
});

function SenLetter({ official }) {
  const [name, setName] = useContext(NameContext);
  const [address, setAddress] = useContext(AddressContext);

  const greeting = `Dear ${official.name},`
  const paragraph1 = `I am writing as a constituent to demand an urgent, permanent ceasefire in occupied Palestine. I urge you to issue a public statement in support of the ceasefire resolution introduced in the House by Rep. Cori Bush.`
  const paragraph2 = `Over 22,000 Palestinians have been killed since October 7. The humanitarian situation is dire for the 2.3 million Palestinians living in Gaza. 80 percent of Palestinians living in Gaza are now homeless. Israel’s unrelenting violence has led to worsening conditions, including the rapid spread of deadly cholera and widespread shortages of food, clean water, and medical supplies. Israel has damaged or destroyed housing, educational and medical facilities. They have targeted journalists and media workers. The escalating, catastrophic violence threatens to lead to more and more loss of life for Palestinians. This is genocide.`
  const paragraph3 = `Congress must hear loud and clear that Americans support a permanent ceasefire, and want to ensure that Palestine’s freedom is no longer a dream.`
  const paragraph4 = `Millions of human lives are at stake. We must build on our collective humanity and call for an immediate ceasefire.`
  const paragraph5 = `I will end this letter with a reminder that 60% of American voters support a ceasefire, yet only 11 percent of our elected representatives have shown support of this view. This poll data includes 76% of Democrats, 57% of Independents, and 49% of Republicans.`
  const paragraph6 = `If you do not act, we will remember.`
  const paragraph7 = `Thank you.`

  return (
    <div>
        <PDFViewer>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.header}></Text>
                <Text></Text>
                <br></br>
                <br></br>
                <Text>
                  {greeting}{"\n"}{"\n"}
                  {paragraph1}{"\n"}{"\n"}
                  {paragraph2}{"\n"}{"\n"}
                  {paragraph3}{"\n"}{"\n"}
                  {paragraph4}{"\n"}{"\n"}
                  {paragraph5}{"\n"}{"\n"}
                  {paragraph6}{"\n"}{"\n"}
                  {paragraph7}{"\n"}{"\n"}
                </Text>
                <Text>{name}</Text>
                <Text>{address.line1}</Text>
                <Text>{address.city}, {address.state}  {address.zip}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
    </div>
  )
}

export default SenLetter