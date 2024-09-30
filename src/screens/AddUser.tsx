import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddUser({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  const handleAddUser = () => {
    fetch('http://192.168.0.96:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, login, password, city }),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Sucesso', 'Usuário cadastrado!');
        navigation.navigate('Home', { onGoBack: true }); 
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao cadastrar o usuário');
      });
  };

  return (
    <View style={styles.container}>
<Text style={styles.title}>Adicionar Usuário</Text>
<TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Login" value={login} onChangeText={setLogin} style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TextInput placeholder="Cidade" value={city} onChangeText={setCity} style={styles.input} />
      <Button title="Adicionar" onPress={handleAddUser} color="#7b5bf2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius:10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius:14,
    borderColor: '#08194c', 
    width:290,
    alignItems:'center',
    marginLeft: 50,
    borderWidth:1.5,

  },


  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color:'#08194c'
  },
});
