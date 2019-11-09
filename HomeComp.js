import React, {Component} from 'react';
import styles from './style/Style';
import {View, Text, Button} from 'react-native';
class HomeComp extends Component {
  render() {
    return (
      <View style={styles.ley}>
        <View style={styles.lay1}>
          <Text style={styles.home}>RH Korp.corporation</Text>
        </View>
        <View style={styles.lay3}>
          <Button
            title={'vai para cadastro'}
            onPress={() => {
              this.props.navigation.navigate('Cadastro');
            }}
          />
        </View>
        <View style={styles.lay2}>
          <Button
            title={'lista de cadastrados'}
            onPress={() => {
              this.props.navigation.navigate('Dados');
            }}
          />
        </View>
      </View>
    );
  }
}

export default HomeComp;
