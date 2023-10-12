import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import ResetPassword from "./screens/ResetPassword";
import ListOeuvres from "./screens/Oeuvres";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddOeuvre from "./screens/AddOeuvre";
import ButtomNavigation from "./components/BottomNavigation";
import Navigations from "./screens/Navigations";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
