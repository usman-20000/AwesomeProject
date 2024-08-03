import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:'white',
    },
    subContainer:{
        width:'100%',
        alignItems:'center',
        marginTop:'5%'
    },
    image:{
        height:200,
        width:200
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.black,
        width:250,
        padding:"2%",
    },
    description:{
        fontSize:12,
        fontWeight:'400',
        color:colors.black,
        width:250,
        padding:"2%",
    }
})

export default styles;