import { SafeAreaView, View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

import RNPickerSelect from 'react-native-picker-select';
import Item from "../components/ItemList";
import { listExercises } from "../services/API_Call";
// para ter acesso as bibliotecas de ícones, entrar no link: https://icons.expo.fyi/Index

export default function Home({ navigation }) {
    //dados da api:
    const [exercises, setExercises] = useState();
    const [filteredExercises, setFilteredExercises] = useState(); // Estado para armazenar os exercícios filtrados
    //filtros:
    const [filterOptions, setFilterOptions] = useState([]);
    const [filter, setFilter] = useState([]);
    //estado de carregamento
    const [loading, setLoading] = useState(true);


    const placeholder = {
        label: 'Selecione uma opção...',
        value: null,
    };

    useEffect(() => {
        listExercises()
            .then(data => {
                setExercises(data);
                getFilter(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao obter dados:', error);
            });
    }, [])


    const getFilter = (dataFilter) => {
        let newArray = [];
        // cria um novo array so com os atributos 'type' do objeto original.
        dataFilter.map((data) => {
            newArray = [...newArray, data.type];
        });

        // Removendo elementos duplicados
        newArray = newArray.filter((item, i, array_sem_duplicatas) => {
            return array_sem_duplicatas.indexOf(item) === i;
        });
        //gera esse objeto com com, "chave e valor" do selection
        setFilterOptions(newArray.map((data) => {
            return { label: data, value: data }
        }))
    };

    function filtrarPorTipo(nameExercise) {
        console.log(nameExercise);
        if (nameExercise !== null) {
            setFilteredExercises(exercises.filter((exercise) => exercise.type === nameExercise));
        }else{
            setFilteredExercises(exercises);
        }
        
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                loading ?
                    <View>
                        <ActivityIndicator size={'large'} color="#28A3CC" />
                    </View>
                    :
                    <View style={styles.container}>
                        <RNPickerSelect
                            placeholder={placeholder}
                            items={filterOptions}
                            onValueChange={value => { 
                                setFilter(value);
                                filtrarPorTipo(value);
                            }}
                            value={filter}
                        />
                        <FlatList
                            data={ filteredExercises == null ? exercises : filteredExercises }
                            renderItem={({ item }) => <Item navigation={navigation} title={item.name} />}
                            keyExtractor={item => item.name}
                        />
                    </View>
            }
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});