import RoleModel from '../models/RoleModel';

export type AddRoleRequest = Omit<RoleModel, 'id'>;

export type UpdateRoleRequest = Partial<Omit<RoleModel, 'id'>>;
