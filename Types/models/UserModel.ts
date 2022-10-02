import RoleModel from './RoleModel';

export default interface UserModel {
    id: string;
    name: string;
    profileUrl?: string;
    roles: RoleModel[];
}
