import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  home: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
  },
  lay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  lay1: {
    width: 300,
    margin: 15,
    height: 50,
    borderWidth: 3,
    backgroundColor: 'yellow',
  },
  lay2: {
    width: 300,
    margin: 15,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  lay3: {
    width: 300,
    margin: 15,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'yellow',
  },
  lay4: {
    width: 100,
    backgroundColor: '#008000',
    margin: 15,
    height: 40,
  },
  lay5: {
    //width: 100,
    backgroundColor: '#fac391',
    borderColor: '#000',
    margin: 5,
    height: 50,
  },
  lay6: {
    width: 160,
    backgroundColor: '#ffff00',
    borderColor: '#000',
    margin: 5,
    height: 50,
  },
  submitButtonText: {
    color: 'white',
  },
  container: {
    paddingTop: 23,
  },
});

export default styles;
