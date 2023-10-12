import React, { useEffect } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { delete_oeuvre, list_oeuvre } from '../redux/actions/oeuvre.actions';

function ListOeuvres({ navigation }) {
  const { user } = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();
  const { oeuvres, loading, error } = useSelector((state) => state.oeuvre_reducer);

  useEffect(() => {
    dispatch(list_oeuvre());
  }, []);

  const handleDeleteOeuvre = (oeuvre) => {
    dispatch(delete_oeuvre(oeuvre));
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#7159c1" />}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      <FlatList
        data={oeuvres}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('OeuvreDetail', { oeuvre: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.nom}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.author}>Auteur: {item.auteur}</Text>
            {user && user.email === item.auteur && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteOeuvre(item)}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => navigation.navigate('OeuvreEdit', { oeuvre: item })}
                >
                  <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
  },
  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
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

export default ListOeuvres;
