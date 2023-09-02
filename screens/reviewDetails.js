import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

// With the button for back to home
// export default function ReviewDetails({ navigation }){
//     const pressHandler = () => {
//         navigation.goBack();
//     }
//     return (
//         <View style={globalStyles.container}>
//             <Text>reviewDetails screen</Text>
//             <Button title='back to home' onPress={pressHandler}/>
//         </View>
//     )
// }

export default function ReviewDetails({ navigation, route }){

    return (
        <View style={globalStyles.container}>
            <Text>{ route.params.title }</Text>
            <Text>{ route.params.body }</Text>
            <Text>{ route.params.rating }</Text>
        </View>
    )
}