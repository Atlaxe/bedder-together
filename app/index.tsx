import { FlatList, StyleSheet, View } from "react-native"
import AddServerModal from "./components/modals/AddServerModal"
import ServerCard from "./components/ServerCard"
import { useAppModal } from "./context/ModalContext"

import ButtonComponent from "./components/ButtonComponent"
import { useAppServers } from "./context/ServerContext"

export default function HomeScreen() {

    // Setting up servers
    const { servers } = useAppServers();
    // For uusing modals like adding server and server config
    const { openModal} = useAppModal();

    return (
        <View style= {styles.container}>
            <ButtonComponent text="Add Server" pressFunction={() => {openModal(<AddServerModal />)}}/>
            <FlatList
                style={styles.flatList}
                data={servers}
                renderItem={({item}) => <ServerCard server={item}/>}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle={{ paddingBottom: servers.length * 8 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding: 16,
        display: 'flex',
        gap: 32
    },
    flatList: {
    }
})
