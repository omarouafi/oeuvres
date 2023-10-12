import React, { useState } from 'react'
import { View,Text,StyleSheet, ActivityIndicator, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { add_oeuvre, modifier_oeuvre } from '../redux/actions/oeuvre.actions';
import FormInput from '../components/FormInput';
import Header from '../components/Header';
import Button from '../components/Button';

function EditOeuvre({route, navigation}) {
  const { user } = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();
  const {
    oeuvres,
    loading,
    error,
  } = useSelector((state) => state.oeuvre_reducer);
  const [body, setBody] = useState(route.params?.oeuvre);
  console.log(body)
  const handleEditOeuvre = () => {
    
    if (body.auteur != user.email) {
        Alert.alert("Vous n'êtes pas l'auteur de cette oeuvre")
        return
    }
    dispatch(modifier_oeuvre({...body, auteur: user.email}));
  };

  return (
    <View style={styles.container}>
      <Header title="Modifier une oeuvre" />
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <View>
        <Text style={{paddingHorizontal:20,marginBottom: 7}} >Nom</Text>
        <FormInput
        
          placeholder="Nom"
          value={body?.nom}
          onChangeText={(text) => setBody({ ...body, nom: text })}
        />
        </View>
        <View>
        <Text style={{paddingHorizontal:20,marginBottom: 7}} >Image</Text>
        <FormInput
          placeholder="Image"
          value={body?.image}
          onChangeText={(text) => setBody({ ...body, image: text })}
          />
          </View>
          <View>
        <Text style={{paddingHorizontal:20,marginBottom: 7}} >Description</Text>
        <FormInput
          placeholder="Description"
          value={body?.description}
          onChangeText={(text) => setBody({ ...body, description: text })}
        />
        </View>
        <Button text="Modifier" onPress={handleEditOeuvre} />
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,  
    paddingTop: 80,  
  },
  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
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
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});



export default EditOeuvre



