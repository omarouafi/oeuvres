
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListOeuvres from '../screens/Oeuvres';
import Profile from '../screens/Profile';
import ListMesOeuvres from '../screens/MesOeuvres';
import AddOeuvre from '../screens/AddOeuvre';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OeuvreDetail from '../screens/OeuvreDetail';
import EditOeuvre from '../screens/EditOeuvre';
import { useSelector } from 'react-redux';
import AdminListUser from '../screens/AdminListUser';
import AdminModifierUser from '../screens/AdminModifierUser';
import UserDetails from '../screens/AdminUserDetail';
import AdminListOeuvres from '../screens/AdminOeuvreList';
import AdminOeuvreEdit from '../screens/AdminOeuvreEdit';
import AdminAddUser from '../screens/AdminAddUser';
import AdminOeuvreAdd from '../screens/AdminOeuvreEdit copy';
import Logout from '../screens/Logout';


const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const { user } = useSelector((state) => state.user_reducer);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#7159c1',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Oeuvres') {
            iconName = focused ? 'ios-images' : 'ios-images-outline';
          } else if (route.name === 'MesOeuvres') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Ajouter') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }else if (route.name === 'Utilisateurs') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          }else if (route.name === 'Admin Oeuvres') {
            iconName = focused ? 'ios-images' : 'ios-images-outline';
          }else if (route.name === 'Logout') {
            iconName = focused ? 'ios-log-out' : 'ios-log-out-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
     
    >
      <Tab.Screen name="Oeuvres" component={ListOeuvres} />
      <Tab.Screen name="MesOeuvres" component={ListMesOeuvres} />
      <Tab.Screen name="Ajouter" component={AddOeuvre} />
      <Tab.Screen component={OeuvreDetail} name="OeuvreDetail"  options={{ tabBarButton: () => null }} />
      <Tab.Screen component={EditOeuvre} name="OeuvreEdit"  options={{ tabBarButton: () => null }} />
      {
        user.role === "admin" && (
          <>
            <Tab.Screen name="Utilisateurs" component={AdminListUser} />
            <Tab.Screen name="Admin Oeuvres" component={AdminListOeuvres} />
            <Tab.Screen name="Admin Modifier Utilisateur" component={AdminModifierUser}  options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Utilisateur" component={UserDetails}  options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Admin Modifier Oeuvres" component={AdminOeuvreEdit}  options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Admin Ajouter Utilisateur" component={AdminAddUser}  options={{ tabBarButton: () => null }} />
            <Tab.Screen name="Admin Ajouter Oeuvre" component={AdminOeuvreAdd}  options={{ tabBarButton: () => null }} />

          </>
          )
      }
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Logout" component={Logout} />
      
    </Tab.Navigator>
  );
}


export default BottomNavigation