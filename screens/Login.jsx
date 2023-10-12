import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/user.actions";
import { isValidEmail, isValidPassword } from "../utils/validations";

function Login({ navigation }) {

  const [body, setBody] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { user, error: userError, loading: userLoading } = useSelector( state => state.user_reducer)
 

  const handleLogin = async () => {
    if (!isValidPassword(body.password) || !isValidEmail(body.email ?? '')) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(userLogin(body))  
  }

  useEffect(() => {
    if (userError) {
      setError(userError);
    }
  }
  , [userError])

  useEffect(() => {

    if (user) {
      setSuccess("Login success");
      navigation.navigate("Oeuvres");
    }

  }, [user])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {userLoading && <ActivityIndicator size="large" color="#7159c1" />}


      <View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {success ? <Text style={styles.success}>{success}</Text> : null}
        {loading ? <Text style={styles.loading}>Loading...</Text> : null}
      </View>


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
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("resetpassword")}>
                <Text style={styles.link} >Mot de passe oublié ?</Text>
            </TouchableOpacity>
        </View>
        <Button text={"Login"} type="primary" onPress={handleLogin} />
        <Button text={"Register"} type="secondary" onPress={() => navigation.navigate("register")} /> 
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

export default Login;
