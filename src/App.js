import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg'

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>CAIO ORLEANS</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <Icon name="github" size={30} color='black'/>
            <Icon name="linkedin" size={30} color='black'/> 
          </View>
        </View>
      </View>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho:{
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20
  },
  foto:{
    width:250,
    height:250,
    borderRadius: 125
  },
  nome:{
    fontSize: 26,
    fontWeight:'bold',
    color: 'black',
    marginTop:10
  },
  funcao:{
    fontWeight:'bold',
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 20
  }
})
