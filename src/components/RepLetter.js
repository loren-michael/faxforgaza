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
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
}

export default RepLetter