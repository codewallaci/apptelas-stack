import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

export default function Tela01({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/coroninha.png')}/>
            <Text>Tela 01</Text>
            <TouchableOpacity style={{borderRadius:20 ,marginTop: 50, backgroundColor: '#000', width:100, height: 40, alignItems: 'center', justifyContent: 'center'}} onPress={() => {navigation.navigate('Tela Login 02')}}>
                <Text style={{color: '#FFF'}}>Ir para 02</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 250,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    img:{
        width: 100,
        height: 100
    }

})