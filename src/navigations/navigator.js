import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../store/authSlice';

const AppRoute = () => {
//React.useState(false);  for change state true:connecté, false : non
    //const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
            
        </NavigationContainer>
    )
}

export default AppRoute