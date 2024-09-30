import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';

export default function Home({ navigation }: any) {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = () => {
    fetch('http://192.168.0.96:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao carregar usuários');
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []); 

  const navigateToAddUser = () => {
    navigation.navigate('AddUser', { onGoBack: fetchUsers });
  };

  const navigateToDetailsUser = (userId: number) => {
    navigation.navigate('DetailsUser', { userId });
  };

  const handleEditUser = (userId: number) => {
    navigation.navigate('EditUser', { userId });
  };

  const handleDeleteUser = (userId: number) => {
    fetch(`http://192.168.0.96:3000/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          Alert.alert('Usuário deletado!');
          fetchUsers();
        } else {
          Alert.alert('Erro', 'Erro ao deletar o usuário');
        }
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao deletar o usuário');
      });
  };

  const renderUserCard = ({ item }: any) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigateToDetailsUser(item.id)} 
      >
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <Button title="Detalhes" onPress={() => navigateToDetailsUser(item.id)} color="#7b5bf2" />
        <Button title="Editar" onPress={() => handleEditUser(item.id)} color="#7b5bf2"  />
        <Button title="Excluir" onPress={() => handleDeleteUser(item.id)} color="#7b5bf2" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      <Button title="Adicionar Usuário" onPress={navigateToAddUser} color="#7c5af1" />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#d5cef1',
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color:'#2f2d2d',
    fontWeight:'bold',
  },
  card: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 18,
    color: '#2f2d2d',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#b3b2b7',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    justifyContent: 'flex-end',
  },
});
