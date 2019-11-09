import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeComp from './HomeComp';
import DetalhesComp from './DetalhesComp';
import Cadastro from './Cadastro';
import Dados from './Dados';

let navegador = createStackNavigator({
  Home: {screen: HomeComp},
  Detalhes: {screen: DetalhesComp},
  Cadastro: {screen: Cadastro},
  Dados: {screen: Dados},
});

let App = createAppContainer(navegador);

export default App;
