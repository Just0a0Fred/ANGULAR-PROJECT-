import { ISignedUsers } from './signedUsers';

export class Queue {
    public id: number;
    public queue: ISignedUsers[];
    public name: string;
    public adress: string;
    public organisation: string;
    public creator: string;
    public startDate: string;
    public cabinet: string;
    public maxClients: number;

    constructor(data: IQueue){
        this.id = data.id;
        this.name = data.name;
        this.adress = data.adress;
        this.queue = data.queue;
        this.organisation = data.organisation;
        this.creator = data.creator;
        this.startDate = data.startDate;
        this.cabinet = data.cabinet;
        this.maxClients = data.maxClients;
    }
}

export interface IQueue {
    id: number;
    queue: ISignedUsers[];
    name: string;
    adress: string;
    organisation: string;
    creator: string;
    startDate: string;
    cabinet: string;
    maxClients: number;
}