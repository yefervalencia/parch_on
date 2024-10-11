export type user = {
  name: String;
  lastname: String;
  email: String;
  password: String;
  born_date: Date;
  cellphone: String;
  city_id: number;
}

export type DtoUser = {
  user: string
  password: string
}
