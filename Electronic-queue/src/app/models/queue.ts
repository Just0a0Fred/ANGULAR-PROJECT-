export class Queue {
    public queue: Object[];
    public name: string;
    public adress: string;
    public organisation: string;
    public creator: string;
    public startDate: string;
    public cabinet: string;
    public maxClients: number;

    constructor(data: IQueue){
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
    queue: Object[];
    name: string;
    adress: string;
    organisation: string;
    creator: string;
    startDate: string;
    cabinet: string;
    maxClients: number;
}