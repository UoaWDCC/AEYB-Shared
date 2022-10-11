import { LoginRequest } from "./requests/UserRequests"
import { LoginData, GetSelfData, GetAllUsersData, GetUserData } from "./responses/UserResponsesData"


export interface Endpoint<Req, Res, Params extends Record<string, string> = undefined> {
    req: Req,
    res: Res,
    params: Params,
}

export default interface API {
    'POST /api/users/login': Endpoint<LoginRequest, LoginData>;
    'GET /api/users/@me': Endpoint<undefined, GetSelfData>;
    'GET /api/users/': Endpoint<undefined, GetAllUsersData>;
    'GET /api/users/:userId': Endpoint<undefined, GetUserData, { userId: string }>;
}