import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Details from "../pages/Details";

const { Screen, Navigator } = createNativeStackNavigator();

/**
 *  BASICAMENTE o mapeamento de stacks (paginas ou telas como queira chamar :v)
 *
 * @export Um contexto de rotas
 * @return {Navigator} 
 */
export default function StackRoutesLayout() {
    return (
        <Navigator initialRouteName='home' screenOptions={{
            headerStyle: {
                backgroundColor: '#287271',
            },
            headerTintColor: '#fafafa',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Screen name="home" component={Home} options={{ title: 'Exercícios' }} />
            <Screen name="details" component={Details} options={{ title: 'Detalhes' }} />
        </Navigator>
    );
}

