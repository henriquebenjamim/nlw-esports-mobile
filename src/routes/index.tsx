// here we decide how navigation gonna work

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes(){
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}