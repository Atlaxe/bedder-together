export interface ServerType {
    name : string,
    ipaddress : string,
    port : string,
    key : string

    totalPlayerCount?: number,
    currentPlayerCount?: number,
    serverMOTD?: string,
    serverStatus?: number
}

export interface AddServerProps {
    addServerFunc : Function
}