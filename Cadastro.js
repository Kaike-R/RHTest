/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import styles from './style/Style';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AsyncStorage} from 'react-native';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myArray: [],
      nome: '',
      email: '',
      key: '',
    };

    this.cadastrar = this.cadastrar.bind(this);
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
    console.log('teste');
    console.log(this.state.myArray);
  }

  nome = text => {
    this.setState({nome: text});
  };
  email = text => {
    this.setState({email: text});
  };
  async cadastrar() {
    let novo = {
      key: String(this.state.myArray.length + 1),
      nome: this.state.nome,
      email: this.state.email,
    };

    var array = [...this.state.myArray];
    array.push(novo);

    await this.setState({myArray: array});

    console.log('cadastro:');
    console.log(array);
    await AsyncStorage.setItem('myArray', JSON.stringify(this.state.myArray));

    // eslint-disable-next-line no-alert
    alert(
      'nome: ' +
        this.state.nome +
        ' email: ' +
        this.state.email +
        'cadastrado com sucesso',
    );
  }
  render() {
    return (
      <View style={styles.lay}>
        <View style={styles.lay2}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Nome"
            placeholderTextColor="#008000"
            autoCapitalize="none"
            onChangeText={this.nome}
          />
        </View>
        <View style={styles.lay3}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="email"
            placeholderTextColor="#008000"
            autoCapitalize="none"
            onChangeText={this.email}
          />
        </View>
        <View style={styles.lay4}>
          <TouchableOpacity onPress={() => this.cadastrar()}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Cadastro;
