import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const SobreMim = () => {
  const navigation = useNavigation();

  const tratarVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={estilos.container}>
      <Header title="Sobre Mim" onBackPress={tratarVoltar} />
      <View style={estilos.conteudo}>
        <Image 
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQFJHh4HCVOLVQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720301199322?e=1732147200&v=beta&t=XP0CzRt1K5g-bba5aI3Dp7IJQfHhxPJHq-Yq9VFK_sc' }} 
          style={estilos.imagem} 
        />
        <Text style={estilos.titulo}>Olá, eu sou Narottam!</Text>
        <Text style={estilos.descricao}>
        Meu nome completo é Narottam Kirtan Lencinaz Celestrino, sou de Maringá/PR e nasci no dia 24/12/2006.
        Moro em Santa Catarina a 12 anos, hoje moro em São Pedro de Alcântara e estudo no Senai.
        Sou lacto vegetariano (não como carne nem ovo).

        </Text>
        <Text style={estilos.descricao}>
          No meu tempo livre, gosto de explorar novas tecnologias, ler livros e praticar esportes.
        </Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  conteudo: {
    alignItems: 'center',
    marginTop: 50,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    width:'50%'
  },
});

export default SobreMim;
