export class SignedUsers {
    public userInfo: string;
    public talon: string;
    
    constructor(data: ISignedUsers){
        this.userInfo = data.userInfo;
        this.talon = data.talon;
    }
}
    
export interface ISignedUsers {
    userInfo: string;
    talon: string;
}