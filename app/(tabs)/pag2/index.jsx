import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const atividades = [
  {
    id: '1',
    titulo: 'API POKEMON',
    url: 'https://github.com/Narogames/Pokemon_Ramon',
  },
  {
    id: '2',
    titulo: 'Lista de Tarefas',
    url: 'https://github.com/Narogames/Lista_Tarefas',
  },
  {
    id: '3',
    titulo: 'Calculadora',
    url: 'https://github.com/Narogames/Calculadora_redondo',
  },
];

const PaginaAtividades = () => {
  const navigation = useNavigation();

  const tratarVoltar = () => {
    navigation.goBack();
  };

  const tratarPressaoBotao = (url) => {
    Linking.openURL(url);
  };

  const renderizarAtividade = ({ item }) => (
    <View style={estilos.containerAtividade}>
      <Image 
        source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }} 
        style={estilos.imagemGitHub} 
      />
      <Text style={estilos.tituloAtividade}>{item.titulo}</Text>
      <Button 
        title="Ver no GitHub"
        onPress={() => tratarPressaoBotao(item.url)} 
      />
    </View>
  );

  return (
    <View style={estilos.container}>
      <Header title="Atividades" onBackPress={tratarVoltar} />
      <FlatList
        data={atividades}
        renderItem={renderizarAtividade}
        keyExtractor={(item) => item.id}
        style={estilos.lista}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  lista: {
    width: '100%',
    paddingTop:'50px',
  },
  containerAtividade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  imagemGitHub: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  tituloAtividade: {
    fontSize: 18,
    flex: 1,
  },
});

export default PaginaAtividades;
