import RoleModel from './RoleModel';

export default interface UserModel {
    _id: string;
    name: string;
    profileUrl?: string;
    roles: RoleModel[];
}
