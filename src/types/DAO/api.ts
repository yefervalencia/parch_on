export type DAOCities = {
    id: number;
    city: string;
}

export type DAOEventCard = {
    id: string;
    event: string;
    description: string;
    date: string;
    time: string;
    image: string;
    place: string;
    address: string;
}

export type DAOPlace = {
    id: string;
    place: string;
    address: string;
    id_city: string;
    id_event: string;
}

export type DAOCategory = {
    id: string;
    category: string;
}