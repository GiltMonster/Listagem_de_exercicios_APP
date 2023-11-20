import { Text, View, StyleSheet } from "react-native";

export default function ExercisesList({ item }) {

    return (
        <View style={styles.item}>
            <Text style={styles.nome}>Exercício: {item.name}</Text>

            <View style={styles.infoContent}>

                <Text style={styles.text}>Instruções do exercício: {item.instructions}</Text>

                <View style={styles.groupText}>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Equipamentos: {item.equipment}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Dificuldade: {item.difficulty}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Músculos: {item.muscle}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Tipo: {item.type}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: '#fbfbfb',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#28A3CC',
        borderRadius: 5
    },
    infoContent: {
        flex: 1,
        backgroundColor: '#93b6c2',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 1,
        borderWidth: 1,
        borderColor: '#28A3CC',
        borderRadius: 5
    },
    groupText: {
        flex: 1,
        marginVertical: 20
    },
    textContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#28A3CC',
        backgroundColor: '#78c5de',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 17,
        paddingVertical: 10,
    },
    nome: {
        fontSize: 20,
        marginVertical: 10
    },
});