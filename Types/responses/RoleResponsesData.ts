import RoleModel from '../models/RoleModel';

export interface GetAllRolesData {
    /**
     * The number of roles returned.
     */
    results: number;
    roles: RoleModel[];
}

export interface GetRoleData {
    /**
     * The number of users with the role.
     */
    userCount: number;
    role: RoleModel;
}

export interface AddRoleData {
    /**
     * The newly created role.
     */
    role: RoleModel;
}

export interface DeleteRoleData {
    /**
     * The number of users who had the role removed from them.
     */
    modifiedUserCount: number;
}

export interface UpdateRoleData {
    /**
     * The updated role.
     */
    role: RoleModel;
}
