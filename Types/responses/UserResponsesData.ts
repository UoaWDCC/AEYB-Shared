import RoleModel from '../models/RoleModel';
import UserModel from '../models/UserModel';
import Permission from '../utils/Permission';

export interface LoginData {
    /**
     * The JWT token that can be used to authenticate future requests.
     */
    token: string;

    /**
     * The user that was logged in.
     */
    user: UserModel;

    /**
     * A list of the unique permissions the logged in user has.
     */
    permissions: Permission[];
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
    users: UserModel[];
}

export type GetUserData = Omit<LoginData, 'token'>;

export interface UpdateUserData {
    /**
     * The updated user.
     */
    user: UserModel;
}

export interface GiveRolesData extends UpdateUserData {
    /**
     * A list of the roles that were added to the user.
     */
    addedRoles: RoleModel[];
}

export interface RemoveRolesData extends UpdateUserData {
    /**
     * A list of the roles that were removed from the user.
     */
    removedRoles: RoleModel[];
}
