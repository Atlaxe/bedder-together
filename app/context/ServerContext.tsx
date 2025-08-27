import { ServerType } from "@/interfaces";
import { loadData, saveData } from "@/storage";
import { createContext, useContext, useEffect, useState } from "react";

type ServerContextType = {
    servers: ServerType[],

    addServer: ( server : Omit<ServerType, "key"> ) => void;
    deleteServer: ( server : ServerType ) => void;
    updateServer: ( server : ServerType ) => void;
}

const ServerContext = createContext<ServerContextType | undefined>(undefined)

export function ServerProvider ( { children } :  { children : React.ReactNode } ) {
    const [servers, setServers] = useState<ServerType[]>([]);

    // Load servers from storage on first mount
    useEffect( () => {
        (async () => {
            const stored = await loadData<ServerType[]>('Stored_Servers')
            if (stored) {
                setServers(stored)
            }
        })()
    }, []);

    // Save servers on every change
    useEffect( () => {
        saveData("Stored_Servers", servers)
        console.log(`Saved Serverss : ${servers}`)
    }, [servers])

    const addServer = async ( server : Omit<ServerType, "key"> ) => {
        console.log(`Added server : ${server.name}`)
        const key = Math.random().toString(36).substring(2,10);

        let newServer : ServerType = {
            ...server,
            key
        }

        const newServerList = [newServer, ...servers];
        setServers(newServerList)
    }

    const deleteServer = async ( server : ServerType) => {
        console.log(`Deleted server : ${server.name}`)
        let newServers : ServerType[] = servers.filter( s => s.key != server.key )
        setServers(newServers);
    }

    const updateServer = async ( server : ServerType) => {
        console.log(`Updating server : ${server.name} key - ${server.key}`)
        let newServers : ServerType[] = servers.map( s => s.key == server.key ? server : s);
        setServers(newServers);
    }

    return (
        <ServerContext.Provider value = { { servers, addServer, deleteServer, updateServer } }>
            { children }
        </ServerContext.Provider>
    )
}


export const useAppServers = () => {
    const context = useContext(ServerContext);
    if ( !context ) throw new Error("useAppServers must be used within ServerProvider")
    return context;
}