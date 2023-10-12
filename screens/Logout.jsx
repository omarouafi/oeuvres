import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { USER_TYPES } from '../redux/types/user.types';

function Logout({ navigation }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: USER_TYPES.LOGOUT });
    navigation.navigate({name:'Login'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Etes-vous sûr de vouloir vous déconnecter ?</Text>
      <Button title="Déconnexion" onPress={handleLogout} color="#FF0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Logout;
