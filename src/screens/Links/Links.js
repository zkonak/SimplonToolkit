import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card,TextInput } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Links ({ navigation }) {

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title="Links" />
        <Card.Content>
        <TextInput mode="outlined" label="Name"/>
            <Button mode="contained"  onPress={() => navigation.navigate('Name', { name })}>
                Button
    	</Button>
    </Card.Content>
   </Card>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textInput: {
    marginBottom: 10
  }
});

export default Links