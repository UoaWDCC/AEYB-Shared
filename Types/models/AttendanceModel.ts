import UserModel from './UserModel';

export interface InvitedModel {
    /**
     * The ids of the specific users invited. This is primarily for when you
     * want a meeting with an individual user and not everyone with a particular
     * role.
     */
    userIds: string[];

    /**
     * The ids of the roles invited.
     */
    roleIds: string[];
}

export default interface AttendanceModel {
    /**
     * A list of the users who attended the meeting.
     */
    attendedUsers: UserModel[];

    /**
     * A mapping of the absent user's ids to the reason for their absence.
     */
    absentUsers: Map<string, string>;

    /**
     * The roles and users invited to attend.
     */
    invited: InvitedModel;
}
