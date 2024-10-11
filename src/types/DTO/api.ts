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

export type DTOlogin = {
    email: string;
    password: string;
}
