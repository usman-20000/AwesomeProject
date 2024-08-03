import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

export default function Home({navigation}) {

    const screen = [
        {
            id: 0,
            name: 'ApiIntegration',
        },{
            id: 1,
            name: 'Redux1',
        },{
            id: 2,
            name: 'Permission',
        },{
            id: 3,
            name: 'TabScreen',
        },{
            id: 3,
            name: 'ChatScreen',
        }
    ]


    return (
        <View style={{width:"100%", alignItems:'center', justifyContent:'center'}}>
            <FlatList
                style={{width:"100%"}}
                contentContainerStyle={{justifyContent:'center', alignItems:'center', marginTop:"50%"}}
                data={screen}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate(item.name)} style={{padding:'5%', borderWidth:1, marginBottom:"5%", width:200, alignItems:'center', borderRadius:8, backgroundColor: colors.black}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:colors.white}}>{item.name}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}