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
import { admin_modifier_user, modifier_user } from "../redux/actions/user.actions";

function AdminModifierUser({route, navigation}) {

  const {user} = route.params

  const {success, loading, error} = useSelector(state => state.user_reducer)

  const [body, setBody] = useState(user)

  useEffect(() => {
    setBody(user)
  } , [user])

  const dispatch = useDispatch()  
  const handle_submit = () => {

    if(!body?.email || !body?.password || !body?.role) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }

    dispatch(admin_modifier_user({...body, old_email: user.email}))
    navigation.navigate('Utilisateur', {user: body})
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

export default AdminModifierUser