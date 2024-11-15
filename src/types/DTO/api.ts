export type DTOUser = {
    name: string;
    email: string;
    password: string;
    lastname: string;
    birth: Date;
    gender: string;
    phone: string;
    id_city: number;
};

export type DTOEvent = {
    event: string;
    description: string;
    details: string;
    date: Date;
    time: string;
    image: string;
    capacity: number;
    rating: number;
    id_place: number;
    id_category: number;
    id_user:number;
}

export type DTOlogin = {
    email: string;
    password: string;
}
