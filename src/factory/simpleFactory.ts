import { RoleCategory, UserProps } from "./index";

class SimpleFactory {
  name: string = "";
  viewPage: string[] = [];
  constructor(opt: UserProps) {
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }
  static getInstance(role: RoleCategory) {
    switch (role) {
      case RoleCategory.RoleCategorySuperAdmin:
        return new SimpleFactory({
          name: "超级管理员",
          viewPage: ["首页", "帮助页", "应用数据", "权限管理"]
        });
      case RoleCategory.RoleCategoryAdmin:
        return new SimpleFactory({
          name: "管理员",
          viewPage: ["首页", "帮助页", "应用数据"]
        });
      case RoleCategory.RoleCategoryUser:
        return new SimpleFactory({
          name: "普通用户",
          viewPage: ["首页", "帮助页"]
        });
      default:
        throw new Error("参数错误");
    }
  }
}

// 调用
// let superAdmin = SimpleFactory.getInstance(RoleCategory.RoleCategorySuperAdmin);
// let admin = SimpleFactory.getInstance(RoleCategory.RoleCategoryAdmin);
// let normalUser = SimpleFactory.getInstance(RoleCategory.RoleCategoryUser);
// let errorUser = SimpleFactory.getInstance(4);
