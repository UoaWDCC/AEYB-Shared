import RoleModel from './RoleModel';

export default interface UserModel {
    id: string;
    name: string;
    profileUrl?: string;

    /**
     * The ids of the roles this user has.
     */
    roles: string[];
}

/**
 * The roles field in the UserModel has been populated with the specific roles this user has.
 */
export type PopulatedUser = Omit<UserModel, 'roles'> & { roles: RoleModel[] };
