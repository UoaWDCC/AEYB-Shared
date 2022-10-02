import RoleModel from './RoleModel';

export default interface UserModel {
    id: string;
    name: string;
    profileUrl?: string;
    roles: RoleModel[];
}

/**
 * The roles field in the UserModel isn't populated, instead the ids of the roles are returned.
 */
export type UnpopulatedUser = Omit<UserModel, 'roles'> & { roles: string[] };
