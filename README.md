# 官网构建工具-组件库

> Date：2019/03/14
>
> Author：Hsuna

### 一、目录结构

```
./
│  XXXXX                # 组件目录
│  ├─ app.3kar          # 组件代码包
│  └─ config.json       # 组件配置信息
├─ config.json          # 组件总配置文件，用于api使用
├─ create.js            # 组件配置文件构建
└─ update.sh            # 自动构建
```



### 二、提交流程

#### 1. 生成组件包

通过 [官网构建组件开发工具](http://git.3k.com/web/Tech/gw-component-builder) 打包生成组件包，并复制到该仓库主目录。

#### 2. 使用`update.sh`自动构建提交

双击`update.sh`文件，自动编译配置文件，并提交代码到线上。

> 注：由于自动构建使用了shell和nodejs，所以请保证其运行环境。



### 三、关于api的使用

* config.json：https://raw.githubusercontent.com/3kwan/gw-component-library/master/config.json
* XXX/app.3kar：https://raw.githubusercontent.com/3kwan/gw-component-library/master/XXX/app.3kar
* XXX/config.json：https://raw.githubusercontent.com/3kwan/gw-component-library/master/XXX/config.json



