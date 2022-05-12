import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import TodoList from '../screens/TodoList';
import Links from '../screens/Links'


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TodoList" component={TodoList} />
            <Stack.Screen name="Links" component={Links} />
        </Stack.Navigator>
    )
}

export default AppNavigator