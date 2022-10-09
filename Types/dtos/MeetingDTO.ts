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

    /** The time value in ms when this meeting is scheduled for. */
    time: number;
    location: string;
    attendance: AttendanceDTO;

    /** The description for this meeting or null if there isn't one. */
    description: string | null;
}
