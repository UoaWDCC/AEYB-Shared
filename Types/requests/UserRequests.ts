import UserModel from '../models/UserModel';

export interface LoginRequest {
    credential: string;
}

export interface UpdateUserRequest extends Partial<Omit<UserModel, '_id'>> {}

export interface GiveRolesRequest {
    roleIds: string[];
}

export interface RemoveRolesRequest {
    roleIds: string[];
}
