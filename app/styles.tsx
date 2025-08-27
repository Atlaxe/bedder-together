import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },


    minecraftText: {  
        color: '#fff',
        fontFamily: 'Minecraft',
        fontSize: 16,
    },
    header: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 16
    },

    button: {
        backgroundColor: '#4d8354',

        borderBottomColor: '#56925E',
        borderRightColor: '#56925E',
        borderTopColor: '#649F6C',
        borderLeftColor: '#649F6C',
        borderWidth: 4,
        boxShadow: '0px 6px 0 0 #314F35',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

        paddingVertical: 12
    },
    buttonPressed: {
        boxShadow: '',
    },
})