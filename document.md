## codePush使用

#### 各种命令

1. 增加应用

```shell
code-push app add MyApp-Android
code-push app add MyApp-iOS
```

2. 列出你已经在CodePush服务器注册的所有应用程序

```shell
code-push app ls
```

3. 查看部署一个特定的应用程序

```shell
code-push deployment ls EatMore -k
```

4. 查看历史版本

```shell
# deploymentName是发布的版本,默认有两个:Staging和Production
code-push deployment history <appName> <deploymentName>
```

显示如下:

```shell
MacxdeMBP-82:EatMore Macx$ code-push deployment history EatMore Staging
┌───────┬────────────────┬─────────────┬───────────┬─────────────┬──────────────────────┐
│ Label │ Release Time   │ App Version │ Mandatory │ Description │ Install Metrics      │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v1    │ a day ago      │ 1.0         │ No        │             │ No installs recorded │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v2    │ a day ago      │ 0.0.1       │ Yes       │ 修复bug       │ No installs recorded │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v3    │ a day ago      │ 1.0         │ Yes       │ 修复bug       │ Active: 17% (1 of 6) │
│       │                │             │           │             │ Total: 1             │
│       │                │             │           │             │ Rollbacks: 2         │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v4    │ a day ago      │ 1.0.1       │ Yes       │ 更换启动图       │ Active: 17% (1 of 6) │
│       │                │             │           │             │ Total: 2             │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v5    │ a day ago      │ 1.0.1       │ Yes       │ 修复头部显示      │ Active: 0% (0 of 6)  │
│       │                │             │           │             │ Total: 1             │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v6    │ 21 hours ago   │ 1.0.1       │ Yes       │ 修改了提示       │ Active: 0% (0 of 6)  │
│       │                │             │           │             │ Total: 1             │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v7    │ 21 hours ago   │ 1.0.1       │ Yes       │ 标头          │ Active: 33% (2 of 6) │
│       │                │             │           │             │ Total: 2             │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v8    │ 39 minutes ago │ 1.0.1       │ Yes       │ 标头          │ No installs recorded │
├───────┼────────────────┼─────────────┼───────────┼─────────────┼──────────────────────┤
│ v9    │ 8 minutes ago  │ 1.0.1       │ No        │             │ No installs recorded │
└───────┴────────────────┴─────────────┴───────────┴─────────────┴──────────────────────┘
```

5. 回滚更新

```shell
# deploymentName是发布的版本,默认有两个:Staging和Production
code-push rollback <appName> <deploymentName>
code-push rollback MyApp Production
```

**这个操作将会新建一个更新版本,这个新版本的内容是上一个版本的,比如当前为v4版本,那么回滚后的版本是v5,v5的内容是v3的**


更多信息可以[点击这里查看](http://microsoft.github.io/code-push/docs/cli.html)

## 热更新步骤

1. 首先编译:

`react-native bundle --platform 平台 --entry-file 启动文件 --bundle-output 打包js输出文件 --assets-dest 资源输出目录 --dev 是否调试`

```shell
# 这里是真实的命令
react-native bundle --platform android --entry-file index.android.js --bundle-output ./bundles/index.android.bundle --assets-dest ./bundles --dev false
```

2. 再发布:

`code-push release <应用名称> <Bundles所在目录> <对应的应用版本> --deploymentName： 更新环境 --description： 更新描述  --mandatory： 是否强制更新`

```shell
# 这里是真实的命令
code-push release EatMore ./bundles/index.android.bundle 1.0.1 --description "修复bug" --mandatory true
```

**这里发布的只是`./bundles/index.android.bundle`这个文件,并没有发布相应的assest文件,所以会造成更新后app无法显示本地的文件问题,为了解决这个问题我们必须也把assest文件一起打包:**

```shell
code-push release EatMore ./bundles 1.0.1 --description "修复bug" --mandatory true
```

## 安装包更新

安卓:在项目目录下执行以下命令->

`./android/gradlew assembleRelease`

结束后打包好的文件在:android/app/build/outputs/apk/app-release.apk,每次打包之前必须将这个目录下的apk文件删除掉.

## react-native记录

defaultProps just needs to be a static property on the component class. How you want to do this is up to you.

Static property:

```javascript
class C1 extends React.Component {
  static defaultProps = {
    prop: 'hello',
  };
}
```

Static getter:

```javascript
class C2 extends React.Component {
  static get defaultProps() {
    return {
      prop: 'hello',
    };
  }
}
```
Assign a property:

```javascript
class C3 extends React.Component {
}
C3.defaultProps = {
  prop: 'hello',
};
```