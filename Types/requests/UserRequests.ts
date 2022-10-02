import UserModel from '../models/UserModel';

export interface LoginRequest {
    /**
     * The id token you receive when you login with google.
     */
    credential: string;
}

export interface UpdateUserRequest extends Partial<Omit<UserModel, '_id'>> {}

export interface GiveRolesRequest {
    /**
     * The ids of the roles to give the user. There are several constraints that apply to this request:
     * 1. There must be at least 1 role id
     * 2. The role ids must be valid
     *
     * If any of these requirements aren't met, you'll receive an {@link UnsuccessfulResponse}.
     */
    roleIds: string[];
}

export interface RemoveRolesRequest {
    /**
     * The ids of the roles to remove from the user. There are several constraints that apply to this request:
     * 1. There must be at least 1 role id
     * 2. The role ids must be valid
     *
     * If any of these requirements aren't met, you'll receive an {@link UnsuccessfulResponse}.
     */
    roleIds: string[];
}
