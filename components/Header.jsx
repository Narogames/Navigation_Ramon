import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    backgroundColor: '#f8f8f8',
    elevation: 2,
    backgroundColor: 'blue',
    position:'absolute',
    width:'100%',
    top:'0',
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default Header;
