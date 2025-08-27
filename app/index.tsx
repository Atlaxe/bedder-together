import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { ServerType } from "../interfaces"
import AddServerModal from "./components/modals/AddServerModal"
import ServerCard from "./components/ServerCard"
import { useAppModal } from "./context/ModalContext"

import { loadData, saveData } from "@/storage"
import ButtonComponent from "./components/ButtonComponent"

export default function HomeScreen() {

    // Setting up servers
    const [servers, setServers] = useState<ServerType[]>([])

    // Load on app start
    useEffect( () => {
        const fetchServers = async () => {
            const stored = await loadData<ServerType[]>('Stored_Servers');
            if ( stored ) setServers(stored)
        }
        fetchServers();
    }, [])

    // Save on data change
    useEffect( () => {
        saveData('Stored_Servers', servers)
    }, [servers])

    const addServer = ( server : Omit<ServerType, "key"> ) => {
        const key = Math.random().toString(36).substring(2,10)

        let newServer : ServerType = {  
            ...server,
            key
        }

        const newServerList = [newServer, ...servers];
        setServers(newServerList);
        console.log(newServerList)
    }

    // For uusing modals like adding server and server config
    const { openModal} = useAppModal();

    return (
        <View style= {styles.container}>

            <ButtonComponent text="Add Server" pressFunction={() => {openModal(<AddServerModal addServerFunc={addServer} />)}}/>
            
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
