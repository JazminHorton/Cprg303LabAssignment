import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Made by Jazmin Horton @2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0b6974',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Footer;