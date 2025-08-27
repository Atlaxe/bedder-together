import { useAppServers } from "@/app/context/ServerContext";
import { ServerType } from "@/interfaces";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { isFQDN, isIP, isPort } from "validator";
import { useAppModal } from "../../context/ModalContext";
import { globalStyles } from "../../styles";
import ButtonComponent from "../ButtonComponent";

export default function AddServerModal () {
    const { addServer} = useAppServers();

    const [server, setServer] = useState<ServerType>({
        name: "Minecraft Server",
        ipaddress: "",
        port: "19132",
        key: ""
    });

    // For error logging
    const [ validPort, setValidPort ] = useState(true);
    const [ validIP, setValidIP] = useState(true);

    const { closeModal } = useAppModal();
    
    const handleChange = <K extends keyof typeof server>(
        key: K,
        value: typeof server[K]
    ) => {
        setServer((prev) => ({
        ...prev,
        [key]: value,
        }));
    };

    const handleAdd = () => {
        // Validate port
        const port = isPort(server.port);
        setValidPort(port);

        const ip = isIP(server.ipaddress);
        const web = isFQDN(server.ipaddress);
        if (!ip && !web) {
            setValidIP(false)
        } else {
            setValidIP(true)
        }

        if (
            port &&
            ( ip || web)
        ) {
            addServer({
                ...server,
                name: server.name ? server.name : "Server"
            });
            closeModal();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[globalStyles.minecraftText, globalStyles.header]}>Add Server</Text>
           
            <TextInput 
                style={styles.textInput}
                value = {server.name}
                onChangeText={(text) => handleChange("name", text)}
                placeholder="Server Name"
                placeholderTextColor={'#ffffff80'}
            />
            <View style={globalStyles.row}>
                <TextInput 
                    style={[
                        styles.textInput, 
                        styles.ip,
                        !validIP && styles.warningBorders
                    ]}
                    value = {server.ipaddress}
                    onChangeText={(text) => handleChange("ipaddress", text)}
                    placeholder="IP Address"
                    placeholderTextColor={'#ffffff80'}
                />
                <TextInput 
                    style={[[
                        styles.textInput, 
                        { flex: 1 / 4 },
                        !validPort && styles.warningBorders
                    ]]}
                    value = {server.port}
                    onChangeText={(text) => handleChange("port", text)}
                    keyboardType="numeric"
                    placeholder="Port"
                    placeholderTextColor={'#ffffff80'}
                />
            </View>

            {/* Error message here */}
             { (!validPort || !validIP) && (
                <Text style={[globalStyles.minecraftText]}>
                    Please&nbsp;
                    { !validIP && 'input a valid IP address'}
                    { ( !validIP && !validPort) && ' and '}
                    { !validPort && 'input a valid port number'}
                    .
                </Text>
            ) }
            
            <ButtonComponent text="Add" pressFunction={handleAdd}
                style= { { marginTop: 16 } }
            />
            <ButtonComponent text="Cancel" pressFunction={closeModal} 
                style= { { 
                    marginTop: 16,
                    backgroundColor: '#963a3a',
                    borderBottomColor: '#a84040',
                    borderRightColor: '#a84040',
                    borderTopColor: '#b44f4f',
                    borderLeftColor: '#b44f4f',
                    boxShadow: '0px 6px 0 0 #5a2626',
                } }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    warningBorders : {
        borderTopColor: '#d4b760',
        borderLeftColor: '#d4b760',
        borderBottomColor: '#c5aa5a',
        borderRightColor: '#c5aa5a'
    },
    textInput: {
        padding: 10,

        backgroundColor: 'rgba(40,40,40,.75)',

        fontFamily: "Minecraft",
        color: '#FFF',

        borderWidth: 4,
        borderColor: '#9C9C9C',
        boxShadow: '0px 8px 0 0 #252525',

        marginBottom: 16
    },
    ip : {
        flex: 1,
        marginRight: 16
    }
})