import { ClassCluster } from "./index";
class User {
  type: ClassCluster;
  name: string = "";
  viewPage: string[] = ["首页", "帮助页"];
  constructor(type: ClassCluster) {
    if (new.target === User) {
      throw new Error("抽象类不能实例化!");
    }
    this.type = type;
  }
}

class UserOfWechat extends User {
  constructor(name: string) {
    super(ClassCluster.ClassClusterWX);
    this.name = name;
  }
}

class UserOfQq extends User {
  constructor(name: string) {
    super(ClassCluster.ClassClusterQQ);
    this.name = name;
  }
}

class UserOfWeibo extends User {
  constructor(name: string) {
    super(ClassCluster.ClassClusterWB);
    this.name = name;
  }
}

function getAbstractUserFactory(type: ClassCluster) {
  switch (type) {
    case ClassCluster.ClassClusterWX:
      return UserOfWechat;
    case ClassCluster.ClassClusterQQ:
      return UserOfQq;
    case ClassCluster.ClassClusterWB:
      return UserOfWeibo;
    default:
      throw new Error("参数错误");
  }
}

let WechatUserClass = getAbstractUserFactory(ClassCluster.ClassClusterWX);
let QqUserClass = getAbstractUserFactory(ClassCluster.ClassClusterQQ);
let WeiboUserClass = getAbstractUserFactory(ClassCluster.ClassClusterWB);

let wechatUser = new WechatUserClass("微信用户");
let qqUser = new QqUserClass("QQ用户");
let weiboUser = new WeiboUserClass("微博用户");

console.log(wechatUser);
console.log(qqUser);
console.log(weiboUser);
