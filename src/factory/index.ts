export enum RoleCategory {
  RoleCategorySuperAdmin,
  RoleCategoryAdmin,
  RoleCategoryUser
}

export enum ClassCluster {
  ClassClusterQQ,
  ClassClusterWX,
  ClassClusterWB
}

export interface UserProps {
  name: string;
  viewPage: string[];
}
