import AttendanceDTO from './AttendanceDTO';
import UserDTO from './UserDTO';

export enum MeetingType {
    Meeting = 'meeting',
    Event = 'event',
}

export default interface MeetingDTO {
    id: string;
    type: MeetingType;
    creator: UserDTO;
    name: string;
    time: Date;
    location: string;
    attendance: AttendanceDTO;
    description?: string;
}
