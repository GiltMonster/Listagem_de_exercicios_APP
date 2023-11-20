import { SafeAreaView, FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import ExercisesList from "../components/ExercismList";
import { getExercise } from "../services/API_Call";

export default function Details({ route, navigation }) {

    const [exercise, setExercise] = useState({});
    const [loading, setLoading] = useState(true);

    const name = route.params;

    useEffect(() => {
        getExercise(name)
            .then(data => {
                setExercise(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao obter dados:', error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {
                loading ?

                    <View>
                        <ActivityIndicator size={"large"} color="#28A3CC" />
                    </View>
                    :
                    <FlatList
                        data={exercise}
                        renderItem={({ item }) => <ExercisesList item={item} />}
                        keyExtractor={item => item.name}
                    />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});