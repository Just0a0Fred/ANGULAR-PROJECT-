export class QueueForm {
    public queue: Object;
    public name: string;
    public adress: string;

    constructor(data: IQueueForm){
        this.name = data.name;
        this.adress = data.adress;
        this.queue = data.queue;
    }
}

export interface IQueueForm {
    queue: Object;
    name: string;
    adress: string;
}