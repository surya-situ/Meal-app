import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}


export default function App() {

  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>

        <Stack.Navigator screenOptions={{
           headerStyle: {backgroundColor: '#351401'},
           headerTintColor: 'white',
           contentStyle: {backgroundColor: '#3f2f25'}
        }}>

          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              title: 'All categories', 
            }} 
          />

          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            options={({route, navigation}) => {
              const catId = route.params.Id;
              return {
                title: catId
              }
            }}
          />

          <Stack.Screen  
            name="Meal Detail"
            component={MealDetailScreen}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
