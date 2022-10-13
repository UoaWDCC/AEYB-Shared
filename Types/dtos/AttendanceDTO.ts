import UserDTO from './UserDTO';

export interface InvitedDTO {
    /**
     * The ids of the specific users invited. This is primarily for when you
     * want a meeting with an individual user and not everyone with a particular
     * role.
     */
    userIds: string[];

    /** The ids of the roles invited. */
    roleIds: string[];
}

export default interface AttendanceDTO {
    canAttend: boolean;
    didAttend?:boolean;
    rating?: number;
    feedback?:string;
    reason?:string;
}
