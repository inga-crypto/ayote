import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const LogoComponent = () => {
  return (
    <View>
      <Text style={styles.logoStyle}>AYOTE</Text>
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({
  logoStyle: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#ff007f',
    fontSize: 19,
    paddingVertical: 15,
    marginBottom: 15,
    paddingTop: 0,
  },
})