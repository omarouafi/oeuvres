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
import { get_user, modifier_user } from "../redux/actions/user.actions";
import { isValidEmail, isValidPassword } from "../utils/validations";

function Profile() {

  const { user, loading, error
   } = useSelector(state => state.user_reducer)


  const [body, setBody] = useState({})

  useEffect(() => {
    setBody(user)
  } , [user])



  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(get_user(user))
  },[])

  
  const handle_submit = () => {
    if (!isValidPassword(body.password) || !isValidEmail(body.email ?? '')) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(modifier_user({...body, old_email: user.email}))
  }

  return (
    <View style={styles.container}>
        <Header title="Profile" />
        <FormInput onChangeText={(text) => setBody({...body, email: text})} value={body?.email} />
        <FormInput onChangeText={(text) => setBody({...body, password: text})} value={body?.password} isSecure={true} />
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

export default Profile