import { RoleCategory, UserProps } from "./index";

class User {
  name: string = "";
  viewPage: string[] = [];
  constructor(opt: UserProps = { name: "", viewPage: [] }) {
    if (new.target === User) {
      throw new Error("抽象类不能实例化!");
    }
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }
}

class FactoryMethod extends User {
  constructor(opt?: UserProps) {
    super(opt);
  }
  create(role: RoleCategory) {
    switch (role) {
      case RoleCategory.RoleCategorySuperAdmin:
        return new FactoryMethod({
          name: "超级管理员",
          viewPage: ["首页", "帮助页", "应用数据", "权限管理"]
        });
      case RoleCategory.RoleCategoryAdmin:
        return new FactoryMethod({
          name: "管理员",
          viewPage: ["首页", "帮助页", "应用数据"]
        });
      case RoleCategory.RoleCategoryUser:
        return new FactoryMethod({
          name: "普通用户",
          viewPage: ["首页", "帮助页"]
        });
      default:
        throw new Error("参数错误");
    }
  }
}

// let userFactory = new FactoryMethod();
// let superAdmin = userFactory.create(RoleCategory.RoleCategorySuperAdmin);
// let admin = userFactory.create(RoleCategory.RoleCategoryAdmin);
// let user = userFactory.create(RoleCategory.RoleCategoryUser);

// console.log(user);
// console.log(admin);
// console.log(superAdmin);
// console.log(userFactory);
