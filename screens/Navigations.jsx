import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "../components/BottomNavigation"
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

function Navigations() {

    const Stack = createNativeStackNavigator();
    const user = useSelector(state => state.user_reducer.user)

  return (
    <>
    <NavigationContainer>
        {
            !user ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="resetpassword"
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
            ):(
                <>
                <BottomNavigation />
                </>
            )
        }
      </NavigationContainer>
    </>
  )
}

export default Navigations