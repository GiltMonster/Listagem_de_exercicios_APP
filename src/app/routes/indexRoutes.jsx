import { NavigationContainer } from "@react-navigation/native";
import StackRoutesLayout from "./stack.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutesLayout />
        </NavigationContainer>
    )
}