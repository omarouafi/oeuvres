import { View, 
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert
 } from "react-native"
import FormInput from "../components/FormInput"
import Button from "../components/Button"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { admin_add_user } from "../redux/actions/user.actions";
import { isValidEmail, isValidPassword } from "../utils/validations";

function AdminAddUser({route, navigation}) {


  const {success, loading, error} = useSelector(state => state.user_reducer)

  const [body, setBody] = useState({})

  const dispatch = useDispatch()  
  const handle_submit = () => {

    if (!isValidPassword(body.password) || !isValidEmail(body.email ?? '')) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(admin_add_user(body))
    navigation.navigate('Utilisateurs')
  }

  return (
    <View style={styles.container}>
    <Header />
    <View>
      <Text style={{paddingHorizontal:20,marginBottom: 7}} >Email</Text>
      <FormInput onChangeText={(text) => setBody({...body, email: text})} value={body?.email} />
    </View>

    <View>
      <Text style={{paddingHorizontal:20,marginBottom: 7}} >Mot de passe</Text>
      <FormInput onChangeText={(text) => setBody({...body, password: text})} value={body?.password} isSecure={true} />
    </View>

    <View>
      <Text style={{paddingHorizontal:20,marginBottom: 7}} >Role</Text>
      <FormInput onChangeText={(text) => setBody({...body, role: text})} value={body?.role} />
    </View>
    <Button text="Save"  type="primary" onPress={handle_submit} />
    {
      loading && <ActivityIndicator  size="large" color="#0000ff" />
    }
</View>          
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 170,
    paddingHorizontal: 20,
    height: '100%',
    
  },
  text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
  }
})

export default AdminAddUser