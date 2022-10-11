import { UserIdParam } from './params';
import { GiveRolesRequest, LoginRequest, RemoveRolesRequest, UpdateUserRequest } from './requests/UserRequests';
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
    'GET /api/users/@me': Endpoint<undefined, GetSelfData>;
    'GET /api/users/': Endpoint<undefined, GetAllUsersData>;
    'GET /api/users/:userId': Endpoint<undefined, GetUserData, UserIdParam>;
    'POST /api/users/login': Endpoint<LoginRequest, LoginData>;
    'POST /api/users/:userId/roles/': Endpoint<GiveRolesRequest, GiveRolesData, UserIdParam>;
    'PATCH /api/users/:userId': Endpoint<UpdateUserRequest, UpdateUserData, UserIdParam>;
    'DELETE /api/users/:userId/roles': Endpoint<RemoveRolesRequest, RemoveRolesData, UserIdParam>;
}
