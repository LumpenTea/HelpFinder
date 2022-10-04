export interface login{
    username: string,
    password: string
}

export interface userInterface {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    username: string,
    password: string,
    repeatedPassword?: string
}

export interface MetaInfoInterface {
    isLogin: boolean,
    buyerRadio: boolean,
    specialistRadio: boolean,
    link: string,
    message: string,
    messageColor: string,
    users: userInterface[],
    currentUser?: userInterface
}

export interface serviceInterface {
    username: string,
    name: string,
    phoneNumber: string,
    serviceName: string,
    price: number,
    adress: string,
    description: string
}

export interface serviceStateInterface {
    services: serviceInterface[],
    searched: serviceInterface[][],
    isSearching: boolean
}

export interface searchCard {
    serviceName?: string,
    specialistName?: string,
    minPrice?: number | string,
    maxPrice?: number | string,
    city?: string
}