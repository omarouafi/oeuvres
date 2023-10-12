import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { admin_delete_user, admin_list_user } from '../redux/actions/user.actions';

function AdminListUser({navigation}) {
  const { users, loading,success, error,user } = useSelector((state) => state.user_reducer);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(admin_list_user())
  } , [dispatch,success]);

  const handleDeleteUser = (user) => {
    dispatch(admin_delete_user(user, admin_list_user()));
  }


  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#7159c1" />}
      {error && <Text style={styles.errorText}>Erreur : {error}</Text>}
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin Ajouter Utilisateur')}>
        <Text style={styles.buttonText}>Ajouter un utilisateur</Text>
      </TouchableOpacity>
      <FlatList
        data={users.filter((item) => user.email !== item.email)}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.label}>E-mail :</Text>
            <Text style={styles.value}>{item.email}</Text>

            <Text style={styles.label}>Rôle :</Text>
            <Text style={styles.value}>{item.role}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin Modifier Utilisateur', { user: item })}>
                <Text style={styles.buttonText}>Modifier</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => handleDeleteUser(item)}>
                <Text style={styles.buttonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  userContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#7159c1',
    padding: 10,
    borderRadius: 8,
    
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default AdminListUser;
