import { Text, View, StyleSheet } from "react-native";
import { translateDifficulty, translateFilters, translateMuscle, translateEquipment, translateInstructions } from "../../util/translate";

export default function ExercisesList({ item }) {

    return (
        <View style={styles.item}>
            <Text style={styles.nome}>{item.name}</Text>

            <View style={styles.infoContent}>

                <View style={styles.instructionsContainer}>
                    <Text style={styles.textTitle}>Instruções</Text>
                    <Text style={styles.text}>{translateInstructions(item.instructions)}</Text>
                </View>

                <View style={styles.groupText}>

                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Equipamentos: </Text>
                        <Text style={styles.text}>{translateEquipment(item.equipment)}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Dificuldade:</Text>
                        <Text style={styles.text}>{translateDifficulty(item.difficulty)}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Músculos:</Text>
                        <Text style={styles.text}>{translateMuscle(item.muscle)}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Tipo:</Text>
                        <Text style={styles.text}>{translateFilters(item.type)}</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#28A3CC',
        backgroundColor: '#78c5de',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    text: {
        fontSize: 17,
        textAlign: 'justify',
        paddingVertical: 10,
        paddingHorizontal: 13
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    instructionsContainer: {
        alignItems: 'center'
    }
});