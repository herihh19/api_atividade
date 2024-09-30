import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function EditUser({ route, navigation }: any) {
  const { userId } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    fetch(`http://192.168.0.96:3000/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setEmail(data.email);
        setLogin(data.login);
        setPassword(data.password);
        setCity(data.city);
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao carregar os dados do usuário');
      });
  }, [userId]);

  const handleEditUser = () => {
    fetch(`http://192.168.0.96:3000/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, login, password, city }),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        navigation.navigate('Home'); 
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao atualizar o usuário');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuário</Text>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Login" value={login} onChangeText={setLogin} style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TextInput placeholder="Cidade" value={city} onChangeText={setCity} style={styles.input} />
      <Button title="Salvar" onPress={handleEditUser} color="#7b5bf2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius:14,
    borderColor:'#08194c', 
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
