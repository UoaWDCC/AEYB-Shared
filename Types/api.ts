import { RoleIdParam, UserIdParam } from './params';
import { AddRoleRequest, UpdateRoleRequest } from './requests/RoleRequests';
import { GiveRolesRequest, LoginRequest, RemoveRolesRequest, UpdateUserRequest } from './requests/UserRequests';
import { GetAllPermissionsData } from './responses/PermissionResponsesData';
import { AddRoleData, DeleteRoleData, GetAllRolesData, GetRoleData } from './responses/RoleResponsesData';
import {
    LoginData,
    GetSelfData,
    GetAllUsersData,
    GetUserData,
    UpdateUserData,
    GiveRolesData,
    RemoveRolesData,
} from './responses/UserResponsesData';

export interface Endpoint<Req, Res, Params = undefined> {
    req: Req;
    res: Res;
    params: Params;
}

export default interface API {
    /** User endpoints */
    'GET /api/users/@me': Endpoint<undefined, GetSelfData>;
    'GET /api/users': Endpoint<undefined, GetAllUsersData>;
    'GET /api/users/:userId': Endpoint<undefined, GetUserData, UserIdParam>;
    'POST /api/users/login': Endpoint<LoginRequest, LoginData>;
    'POST /api/users/:userId/roles': Endpoint<GiveRolesRequest, GiveRolesData, UserIdParam>;
    'PATCH /api/users/:userId': Endpoint<UpdateUserRequest, UpdateUserData, UserIdParam>;
    'DELETE /api/users/:userId/roles': Endpoint<RemoveRolesRequest, RemoveRolesData, UserIdParam>;

    /** Role endpoints */
    'GET /api/roles': Endpoint<undefined, GetAllRolesData>;
    'GET /api/roles/:roleId': Endpoint<undefined, GetRoleData, RoleIdParam>;
    'POST /api/roles': Endpoint<AddRoleRequest, AddRoleData>;
    'PATCH /api/roles/:roleId': Endpoint<UpdateRoleRequest, UpdateUserData, RoleIdParam>;
    'DELETE /api/roles/:roleId': Endpoint<undefined, DeleteRoleData, RoleIdParam>;

    /** Permission endpoints */
    'GET /api/permissions': Endpoint<undefined, GetAllPermissionsData>;
}
