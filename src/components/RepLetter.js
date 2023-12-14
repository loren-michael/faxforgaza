import React, { useContext } from 'react';
import { NameContext } from '../context/NameStore';
import { AddressContext } from '../context/AddressStore';
import { OfficialContext } from '../context/OfficialStore';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

function RepLetter() {
  const [name, setName] = useContext(NameContext);
  const [address, setAddress] = useContext(AddressContext);
  const [official, setOfficial] = useContext(OfficialContext);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Dear {official.name},</Text>
        </View>
        <View>
          <Text>I am writing as a constituent to demand an urgent, permanent ceasefire in occupied Palestine. I urge you to issue a public statement in support of a ceasefire. Additionally, please sign on as a co-sponsor of H. Res. 786, the ceasefire resolution introduced by Rep. Cori Bush. Over 20,000 Palestinians have been killed since October 7. The humanitarian situation is dire for the 2.3 million Palestinians living in Gaza. 80 percent of Palestinians living in Gaza are now homeless. 
          
          Israel’s unrelenting violence has led to worsening conditions, including the rapid spread of deadly cholera and widespread shortages of food, clean water, and medical supplies. Israel has damaged or destroyed housing, educational and medical facilities. They have targeted journalists and media workers. The escalating, catastrophic violence threatens to lead to more and more loss of life for Palestinians. This is genocide.

          Congress must hear loud and clear that Americans support a permanent ceasefire, and want to ensure that Palestine’s freedom is no longer a dream. Millions of human lives are at stake. We must build on our collective humanity and call for an immediate ceasefire. I will end this letter with a reminder that 60 percent of American voters support a ceasefire, yet only 11 percent of our elected representatives have shown support of this view. This includes 76% of Democrats, 57% of Independents, and 49% of Republicans.

          If you do not act, we will remember.
          
          Thank you.</Text>
        </View>
        <View>
          <Text>
            Sincerely,

            {name}
            {address.line1}
            {address.city} {address.state} {address.zip}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export default RepLetter


// Dear 
// I am writing as a constituent to demand an urgent, permanent ceasefire in occupied Palestine. I urge 
// you to issue a public statement in support of a ceasefire. Additionally, please sign on as a co-sponsor of 
// H. Res. 786, the ceasefire resolution introduced by Rep. Cori Bush.
// Over 20,000 Palestinians have been killed since October 7. The humanitarian situation is dire for the 
// 2.3 million Palestinians living in Gaza. 80 percent of Palestinians living in Gaza are now homeless. 
// Israel’s unrelenting violence has led to worsening conditions, including the rapid spread of deadly 
// cholera and widespread shortages of food, clean water, and medical supplies. Israel has damaged or 
// destroyed housing, educational and medical facilities. They have targeted journalists and media 
// workers. The escalating, catastrophic violence threatens to lead to more and more loss of life for 
// Palestinians. This is genocide.
// Congress must hear loud and clear that Americans support a permanent ceasefire, and want to ensure 
// that Palestine’s freedom is no longer a dream.
// Millions of human lives are at stake. We must build on our collective humanity and call for an 
// immediate ceasefire.
// I will end this letter with a reminder that 60 percent of American voters support a ceasefire, yet only
// 11 percent of our elected representatives have shown support of this view. This includes 76% of 
// Democrats, 57% of Independents, and 49% of Republicans.
// If you do not act, we will remember.
// Thank you.
// Name
// Address
