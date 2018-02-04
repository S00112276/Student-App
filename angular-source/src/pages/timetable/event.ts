import { DateTime } from "ionic-angular/components/datetime/datetime";

export interface IEvent {
    _id: number;
    subject: string;
    lecturer: string;
    location: string;
    day: string;
    time: string;
}