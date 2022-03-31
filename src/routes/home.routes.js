import HomeScreen from 'views/home'
import StackNavigator, { StackScreen } from 'components/navigator/stackNavigator'

export default function HomeRoute () {
  return (
    <StackNavigator>
      <StackScreen name='Home' component={HomeScreen} />
    </StackNavigator>
  )
}
