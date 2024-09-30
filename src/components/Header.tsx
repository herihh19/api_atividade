import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.header}>
      <Text style={styles.title}></Text>
      <Button title="Add User" onPress={() => navigation.navigate('AddUser')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Header;
