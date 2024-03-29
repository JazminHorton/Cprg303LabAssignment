import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import Footer from '../layouts/Footer';

function About({navigation}) {
  return (
    <>
      <MainLayout>
        <View style={styles.container}>
          <Text>My To Do List App</Text>
          <Text>Created by: Jazmin Horton</Text>
          <Text>Version 0.1.58666</Text>
        </View>
        <Button
          title="Homepage"
          onPress={() => navigation.navigate('Home')}
        />
      </MainLayout>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default About;