export class User {
    public type: string;
    public surname: string;
    public name: string;
    public secondname: string;
    public phoneNumber: string;
    public password: string;
    public organisationName: string;
    public userTalon: string;

    constructor(data: IUser){
        this.type = data.type;
        this.surname = data.surname;
        this.name = data.name;
        this.secondname = data.secondname;
        this.phoneNumber = data.phoneNumber;
        this.password = data.password;
        this.organisationName = data.organisationName;
        this.userTalon = data.userTalon;
    }
}

export interface IUser {
    type: string;
    surname: string;
    name: string;
    secondname: string;
    phoneNumber: string;
    password: string;
    organisationName: string;
    userTalon: string;
}