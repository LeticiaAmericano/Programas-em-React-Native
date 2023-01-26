import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Itens({ titulo, lista }) {
    return (
        <>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            <FlatList data={lista} rederItem={}></FlatList>
            {lista.map(({ nome, imagem }) => {
                return (
                    <View key={nome} style={estilos.item}>
                        <Image source={imagem} style={estilos.imagem} />
                        <Texto style={estilos.nome}>{nome}</Texto>
                    </View>
                );
            })}
        </>
    );
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#F6FBFE',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F6FBFE',
        paddingVertical: 16,
        alignItems: 'center',
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#F6FBFE',
    },
});
