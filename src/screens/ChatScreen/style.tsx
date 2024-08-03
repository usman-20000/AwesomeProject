import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        width:'100%'
    },
    messageContainer: {
        paddingVertical: 10,
        marginHorizontal: '2%',
    },
    message: {
        maxWidth: '70%',
        alignSelf: 'flex-start',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
    sentMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'blue'
    },
    receivedMessage: {
        backgroundColor: 'darkblue',
    },
    messageText: {
        fontSize: 16,
        color: 'white'
    },
    messageSender: {
        fontSize: 12,
        color: 'white',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: '5%'
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
        color: 'black'
    },
    sendButton: {
        backgroundColor: '#007AFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkTitle:{
        fontSize:12,
        fontWeight:'bold',
        color:'white',
        width:150,
        paddingRight:'5%'
    },
    linkDescription:{
        fontSize:12,
        color:'white',
        width:150
    },
    linkImage:{
        height:50,
        width:50,
        borderRadius:5,
        marginLeft:'5%',

    },
    linkContainer:{
        flexDirection:'row',
        paddingRight:'10%',
        alignItems:'center',
        backgroundColor: 'darkblue',
    },
    descContainer:{
        flexDirection:'column',
        padding:'5%',
    }
});

export default styles;