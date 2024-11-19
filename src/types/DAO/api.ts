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

export type DAOTicketTier = {
    id: number;
    price: string; // Precio viene como string desde el API
    remaining: number;
    tier: {
        tier: string; // Nombre del tipo de ticket
        description: string;
    };
};

export type Ticket = {
    id: number;
    type: string;
    price: number;
    description: string;
    remaining: number;
};

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