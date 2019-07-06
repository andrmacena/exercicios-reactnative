import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Joao', nota: 7 },
    { id: 2, nome: 'Joana', nota: 8 },
    { id: 3, nome: 'Joaquim', nota: 5 },
    { id: 4, nome: 'André', nota: 10 },
    { id: 5, nome: 'José', nota: 7.8 },
    { id: 6, nome: 'Bia', nota: 4 },
    { id: 7, nome: 'Ryuzaki', nota: 6.5 },
    { id: 8, nome: 'Josefa', nota: 7.75 },
    { id: 9, nome: 'Josefina', nota: 8 },
    { id: 10, nome: 'Joao', nota: 7 },
    { id: 11, nome: 'Joana', nota: 8 },
    { id: 12, nome: 'Joaquim', nota: 5 },
    { id: 13, nome: 'André', nota: 10 },
    { id: 14, nome: 'José', nota: 7.8 },
    { id: 15, nome: 'Bia', nota: 4 },
    { id: 16, nome: 'Ryuzaki', nota: 6.5 },
    { id: 17, nome: 'Josefa', nota: 7.75 },
    { id: 18, nome: 'Josefina', nota: 8 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </ScrollView>
    )
}