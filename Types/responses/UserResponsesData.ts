import RoleModel from '../models/RoleModel';
import UserModel, { UnpopulatedUser } from '../models/UserModel';
import Permission from '../utils/Permission';

export interface LoginData extends GetUserData {
    /**
     * The JWT token that can be used to authenticate future requests.
     */
    token: string;
}

export type GetSelfData = {
    /**
     * The currently logged in user.
     */
    self: UserModel;

    /**
     * A list of the unique permissions the logged in user has.
     */
    permissions: Permission[];
};

export interface GetAllUsersData {
    /**
     * The number of users returned.
     */
    results: number;
    users: UnpopulatedUser[];
}

export interface GetUserData {
    /**
     * A list of the unique permissions the logged in user has.
     */
    permissions: Permission[];
    user: UserModel;
}

export interface UpdateUserData {
    /**
     * The updated user.
     */
    user: UserModel;
}

export interface GiveRolesData {
    /**
     * The updated user.
     */
    user: UnpopulatedUser;

    /**
     * A list of the roles that the user didn't have and so were added to the user.
     */
    addedRoles: RoleModel[];
}

export interface RemoveRolesData {
    /**
     * The updated user.
     */
    user: UnpopulatedUser;

    /**
     * A list of the roles that the user had and so were removed from the user.
     */
    removedRoles: RoleModel[];
}
