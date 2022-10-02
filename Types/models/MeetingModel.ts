import AttendanceModel from './AttendanceModel';
import UserModel from './UserModel';

export enum MeetingType {
    Meeting = 'meeting',
    Event = 'event',
}

export default interface MeetingModel {
    id: string;
    type: MeetingType;
    creator: UserModel;
    name: string;
    time: Date;
    location: string;
    attendance: AttendanceModel;
    description?: string;
}
