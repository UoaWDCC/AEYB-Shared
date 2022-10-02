import Permission from '../utils/Permission';

export default interface RoleModel {
    id: string;
    name: string;
    color: string;
    permissions: Permission[];
}
