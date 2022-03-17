import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg'

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu LinkedIn','Linkedin')
        break
      case 'github':
        Alert.alert('Meu GitHub','https://github.com/caioorleans')
        break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>CAIO ORLEANS</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} color='black'/>
            </TouchableOpacity> 
          </View>
        </View>
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_content_header}>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Bolsista no Projeto Athena, na Universidade Federal do Ceará</Text>
            </View>
          </View>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.card_content_header}>Formação</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Matemática Industrial - Incompleto</Text>
              <Text style={style.card_content_text}>Sistemas e Mídias Digitais - A concluir</Text>
            </View>
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
    flex: 1,
  },
  container_cabecalho:{
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20
  },
  foto:{
    width:200,
    height:200,
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
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  card_content: {
    marginTop: 20,
  },
  card_content_header:{
    color: 'black',
    fontWeight: 'bold'
  },
  card_content_text:{
    color: '#939393',
    marginBottom: 10,
  }
})
