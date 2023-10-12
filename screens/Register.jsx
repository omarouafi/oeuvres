import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { register_user } from "../redux/actions/user.actions";
import { isValidEmail, isValidPassword } from "../utils/validations";

function Register({ navigation }) {
  const [body, setBody] = useState({});
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.user_reducer);

  const handleRegister = () => {
    if (!isValidPassword(body.password) || !isValidEmail(body.email ?? '')) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }

    dispatch(register_user(body));
    navigation.navigate({name:"Oeuvres"});
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, alignItems: "center" }}>
      <Text style={styles.title}>Register</Text>
      </View>
      

      <FormInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={body.email}
        onChangeText={(text) => setBody({ ...body, email: text })}
      />

      <FormInput
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={body.password}
        onChangeText={(text) => setBody({ ...body, password: text })}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      {loading ? (
        <ActivityIndicator size="large" color="#7159c1" style={styles.loadingIndicator} />
      ) : (
        <Button text={"Sign Up"} type="primary" onPress={handleRegister} />
      )}

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.linkText}>Vous avez déjà un compte ? Connectez-vous.</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  error: {
    color: "#ff0000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  link: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#7159c1",
  },
});

export default Register;