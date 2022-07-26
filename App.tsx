import React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Home</Text>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Profile</Text>
    </View>
  );
}

function Calendar({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Calendar</Text>
    </View>
  );
}

function Search({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Search</Text>
    </View>
  );
}




const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
  
    <Drawer.Navigator useLegacyImplementation>
      
      <Drawer.Screen name="Home" component={Home}
        options={({ navigation }: any) => ({
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'violet'} size={30} />
          ),
          title: 'Home',
          headerTitle:'',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerRight: () => (
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name='share-variant' color={'white'} size={30} style={{ paddingRight: 20 }}
                onPress={() => navigation.navigate("Profile")} />
              <View>
                <MaterialCommunityIcons name='calendar' color={'white'} size={30} style={{ paddingRight: 20 }}
                onPress={() => navigation.navigate("Calendar")} />
              </View>
              <View>
              <MaterialIcons name='search' color={'white'} size={30} style={{ paddingRight: 20 }}
              onPress={() => navigation.navigate("Search")} />
              </View>
            </View>
          ),
        })}
        
      />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'violet'} size={30} />
          ),
        }}
      />
      <Drawer.Screen name="Calendar" component={Calendar}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={'violet'} size={30} />
          ),
        }}
      />
      <Drawer.Screen name="Search" component={Search}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={'violet'} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
