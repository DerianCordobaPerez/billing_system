import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function StackNavigator ({ children }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {children}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const StackScreen = ({ name, component }) => {
  return (
    <Stack.Screen name={name} component={component} />
  )
}
