import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { reset_password } from "../redux/actions/user.actions";
import { useSelector } from "react-redux";
import { isValidEmail, isValidPassword } from "../utils/validations";

function ResetPassword({ navigation }) {

  const {loading,error} = useSelector(state => state.user_reducer) 

  const dispatch = useDispatch();
  const handle_reset_password = () => {
    if(!isValidEmail(body.email) || !isValidPassword(body.password)) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(reset_password(body));
    
  }


  const [body, setBody] = useState({});
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Mot de passe oublié ?</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {loading ? <ActivityIndicator size="large" color="#7159c1" /> : null}

      <View style={styles.form}>
        <FormInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={body.email}
          onChangeText={(text) => setBody({ ...body, email: text })}
        />
        <View>
          <FormInput
            placeholder="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={body.password}
            onChangeText={(text) => setBody({ ...body, password: text })}
          />
        </View>

        <Button type="primary" text={"Réinitialiser"} onPress={handle_reset_password} />
        <Button text={"Login"} type="secondary" onPress={() => navigation.navigate("login")} />
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    marginTop: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "#7159c1",
  },

  form: {
    marginTop: 20,
  },

  
  

  error: {
    color: "#ff0000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  success: {
    color: "#008000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  loading: {
    marginTop: 20,
  },
  link : {
    marginTop: 3,
    marginBottom: 10,
    textAlign: "center",
    color: "#7159c1",
  }
});

export default ResetPassword;
