import Permission from '../utils/Permission';

export default interface RoleModel {
    _id: string;
    name: string;
    color: string;
    permissions: Permission[];
}
