import React, {Component} from 'react';
import styles from './style/Style';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {AsyncStorage} from 'react-native';
//import { threadId } from 'worker_threads';

class Dados extends Component {
  constructor(props) {
    super(props);
    this.state = {lista: []};
    this.showData = this.showData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }
  //splice usar na lista
  delete(a) {
    this.removeItem(a);
  }
  componentDidMount() {
    this.showData();
  }

  /*async deleteData(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(key, (err, response) => {
        if (response) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }*/

  async deleteData(id) {
    try {
      this.state.lista.splice(id, 1);
      await AsyncStorage.setItem('myArray', JSON.stringify(this.state.item));
      this.setState({item: JSON.parse(await AsyncStorage.getItem('myArray'))});
      alert('voce removeu o que vc queria');
    } catch (error) {
      console.log(error);
    }
  }

  async showData() {
    let myArray = await AsyncStorage.getItem('myArray');
    let datas = JSON.parse(myArray);

    //alert(data.nome + '' + data.email);
    this.setState({lista: datas});
    console.log('teste');
    console.log(this.state.lista);
  }

  render() {
    //var nome = this.state.lista.length>0 ? this.state.lista[0].nome : "vazio";
    return (
      <View
      /*onTouchStart={()=>{this.props.navigation.push('Detalhes')}} style={
      styles.lay}*/
      >
        <TouchableOpacity
          style={styles.lay6}
          onPress={() => {
            this.deleteData(1);
          }}>
          <Text>Remover</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.lista}
          renderItem={({item, index}) => (
            <TouchableOpacity
              //onLongPress={()=}
              onPress={() => {
                this.props.navigation.push('Detalhes', {
                  item: this.state.lista[index],
                });
                //this.deleteData(index);
              }}>
              <Text key={index} style={styles.lay5}>
                {item.nome}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Dados;
