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
    /**
     * The roles field in the UserModel isn't populated, instead the ids of the roles are returned.
     */
    users: (Omit<UserModel, 'roles'> & { roles: string[] })[];
}

export type GetUserData = Omit<LoginData, 'token'>;

export interface UpdateUserData {
    /**
     * The updated user.
     */
    user: UserModel;
}

export interface GiveRolesData {
    /**
     * The roles field in the UserModel isn't populated, instead the ids of the roles are returned.
     */
    users: (Omit<UserModel, 'roles'> & { roles: string[] })[];

    /**
     * A list of the roles that the user didn't have and so were added to the user.
     */
    addedRoles: RoleModel[];
}

export interface RemoveRolesData {
    /**
     * The roles field in the UserModel isn't populated, instead the ids of the roles are returned.
     */
    users: (Omit<UserModel, 'roles'> & { roles: string[] })[];

    /**
     * A list of the roles that the user had and so were removed from the user.
     */
    removedRoles: RoleModel[];
}
