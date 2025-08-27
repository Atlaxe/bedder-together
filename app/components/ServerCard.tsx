import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ServerType } from "../../interfaces";
import { useAppModal } from "../context/ModalContext";
import { globalStyles } from "../styles";
import ServerSettingsModal from "./modals/ServerSettingsModal";


type ServerCardProps = {
    server: ServerType
}

export default function ServerCard ({server} : ServerCardProps ) {
    const { openModal} = useAppModal();

    const serverPressed = () => {
        console.log(`Server pressed for Server`)
    }

    const serverConfigModal = () => {
        openModal(<ServerSettingsModal serverData={server}/>)
    }

    return (
        <Pressable
            onPress={serverPressed}
            style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
            ]}
        >
            <Image 
                style={styles.image}
                source={require("@/assets/images/server-icon.png")} 
                contentFit="cover"
            />

            <View style={styles.serverInfo}>
                <View style={[globalStyles.row, {justifyContent: 'space-between'}]}>
                    <Text style = {globalStyles.minecraftText}>{server.name}</Text>
                    <Text style = {globalStyles.minecraftText}>{server.currentPlayerCount ? server.currentPlayerCount : '0'}/{server.totalPlayerCount ? server.totalPlayerCount : '0'}</Text>
                </View>
                <Text style= {[globalStyles.minecraftText, {color: "hsla(0, 0%, 76%, 1.00)", fontSize: 14}]}>Servival   Oneblock    Dungeons</Text>
            </View>
            
            <Pressable 
                onPress={serverConfigModal}
                style={styles.settingDots}
            >
                <Image 
                    style={styles.icon}
                    source={require("@/assets/images/Settings Dots.svg")} 
                    contentFit="cover"
                />
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3E3937',
        borderBottomColor: '#514d4b',
        borderRightColor: '#514d4b',
        borderTopColor: '#66615f',
        borderLeftColor: '#66615f',
        borderWidth: 4,
        boxShadow: '0px 8px 0 0 #252525',
        marginBottom: 16,

        display: 'flex',
        flexDirection: 'row',
        
    },
    cardPressed: {
        backgroundColor: '#4d8354',
        borderBottomColor: '#56925E',
        borderRightColor: '#56925E',
        borderTopColor: '#649F6C',
        borderLeftColor: '#649F6C',
        boxShadow: '0px -6px 0 0 #314F35',
    },

    serverInfo: {
        flex: 1,
        padding: 8,
        gap: 6
    },
    image: {
        flex: 1,
        width: 64,
        height: 64,
        maxWidth: 64,
        backgroundColor: '#0553',
    },

    settingDots : {
        width: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon : {
        height: 26,
        aspectRatio: 4 /22
    
    },

    
})