import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function DetailsUser({ route, navigation }: any) {
  const { userId } = route.params;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch(`http://192.168.0.96:3000/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao carregar os detalhes do usuário');
      });
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Login: {user.login}</Text>
      <Text>Cidade: {user.city}</Text>

      <Button title="Editar" onPress={() => navigation.navigate('EditUser', { userId })}color="#7b5bf2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
