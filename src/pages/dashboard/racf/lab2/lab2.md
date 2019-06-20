# 实验二 创建组 RACF 实验

## 步骤1 设计和制定组的结构

一般情况下，需要设计以下几类组，如图示
* Administrator Group 管理组:用于管理全部用户的组，命名为 DIVxxADM
* Function Group功能组:用于实现资源访问控制的组，可以通过这些组给组员访问某种资源(如 数据集)的权限
* Data Control Group 数据控制组(又称资源组):这些组的名字需要和数据集的 HLQ 相同，这些 数据集成为组的数据集
* 另外一些组用于将权限下放(Delegation)

![](/img/racf/lab1/step1.png)

## 步骤2 以RACFLAB组管理员身份登陆TSO

* 以 yourid 用户身份登陆 TSO/ISPF，初始密码为 TJ2016，第一次登陆需要修改密码
* 如果执行 RACF 命令，请选择‘6’OPTION
* 如果使用 RACF 控制面板，请选择‘R’OPTION
* 使用 `LU` RACF 命令或者 RACF 控制面板查看 yourid 的属性

## 步骤3 在RACFLAB之下定义子组

* 请首先参考步骤 1 的组结构
* 然后利用 RACF 命令或者 RACF 面板定义以下子组，请思考应该指定谁为子组的 OWNER。

> 提示：ADDGROUP

## 步骤4

...