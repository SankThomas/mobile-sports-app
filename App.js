import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Leagues from "./screens/Leagues";
import League from "./screens/League";
import Team from "./screens/Team";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Leagues" component={Leagues} />
        <Stack.Screen name="League" component={League} />
        <Stack.Screen name="Team" component={Team} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
