import RoleModel from './RoleModel';

export default interface UserModel {
    id: string;
    name: string;
    profileUrl?: string;

    /**
     * The roles this user has
     */
    roles: RoleModel[];
}

/**
 * The roles field in the UserModel only contains the ids of the roles the user has.
 */
export type UnpopulatedUser = Omit<UserModel, 'roles'> & { roles: string[] };
