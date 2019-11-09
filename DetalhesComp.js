/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style/Style';
import {AsyncStorage} from 'react-native';
class DetalhesComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.getParam('item'),
      myArray: [],
      nome: '',
      email: '',
      key: '',
    };
    this.alterar = this.alterar.bind(this);
    this.showData = this.showData.bind(this);
  }
  componentDidMount() {
    this.showData();
    console.log('montou');
  }

  async showData() {
    let myArray = await AsyncStorage.getItem('myArray');
    let datas = JSON.parse(myArray);

    //alert(data.nome + '' + data.email);
    this.setState({myArray: datas});
    console.log('alrerar');
    console.log(this.state.myArray);
  }

  nome = text => {
    this.setState({nome: text});
  };
  email = text => {
    this.setState({email: text});
  };
  async alterar(a) {
    let novo = {
      key: String(this.state.myArray.length + 1),
      nome: this.nome,
      email: this.email,
    };
    console.log('alrerar2');
    console.log(a);

    var array = [...this.state.myArray];
    array.slice(a, 1, novo);

    await this.setState({myArray: array});

    console.log('alterar:');

    await AsyncStorage.setItem('myArray', JSON.stringify(this.state.myArray));
    console.log(array);
    // eslint-disable-next-line no-alert
    alert(
      'nome: ' +
        this.state.nome +
        ' email: ' +
        this.state.email +
        'alterado com sucesso',
    );
  }
  render() {
    return (
      <View style={styles.lay}>
        <View style={styles.lay1}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder={this.state.item.nome}
            placeholderTextColor="#008000"
            autoCapitalize="none"
            onChangeText={this.nome}
          />
        </View>
        <View style={styles.lay2}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder={this.state.item.email}
            placeholderTextColor="#008000"
            autoCapitalize="none"
            onChangeText={this.email}
          />
        </View>
        <View style={styles.lay4}>
          <TouchableOpacity onPress={() => this.alterar(this.state.item.key)}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DetalhesComp;
