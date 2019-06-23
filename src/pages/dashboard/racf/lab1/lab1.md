# 实验一 创建组 RACF 实验

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

* 使用 `LU` RACF 命令或者 RACF 控制面板查看 yourid 的属性，请在右侧回答以下问题
  （1）What groups are you connected to?

  （2）Do you have any user attributes?

  （3）Do you have some class authorization?

  （4）Do you have any connect attributes to RACFLAB?


## 步骤3 在RACFLAB之下定义子组

* 请首先参考步骤 1 的组结构
* 然后利用 RACF 命令或者 RACF 面板定义以下子组，请思考应该指定谁为子组的 OWNER。

（1）定义DIVxxADM 用户管理组（相当于公司人事部门），RACF命令：

```

```

（2）定义DIVxxFUN 功能组（相当于公司各职能部门），后继实验将在该组下定义各个子功能组，RACF命令：

```

```

（3）定义DIVxxRES 资源组（为有机组织和保护系统资源—包括数据集/CICS交易/系统和用户程序等资源—而设立的组），后继实验将在该组下定义各个子资源组，RACF命令：

```

```

> HINT：ADDGROUP

* 利用RACF命令查看新建的组进行验证，并据此补充步骤1的组结构
> HINT: LG

## 步骤4 在DIVxxFUN下定义子组（功能组）
* 利用RACF命令或者RACF面板定义以下子组，请思考应该指定谁为子组的OWNER。

（1）定义FUNxxPRD 功能组，该组将用于对生产系统数据集(Production Data Sets)的访问进行集中授权（即如果该组对生产系统数据集有访问权限，该组的成员将自动继承这一权限）。
  RACF命令：

```

```

（2）定义FUNxxTST 功能组，该组将用于对测试系统数据集(Test Data Sets)的访问进行集中授权（即如果该组对测试系统数据集有访问权限，该组的成员将自动继承这一权限）。
```

```
> HINT ：ADDGROUP

## 步骤5 在DIVxxRES下定义子组（资源组）
* 利用RACF命令或者RACF面板定义以下子组，请思考应该指定谁为子组的OWNER。（RACF中数据集Profile的HLQ必须是RACF系统中的一个用户或者组，这里我们为即将要保护的数据集RESxxPRD.*和RESxxTST定义2个子组）

（1）定义RESxxPRD 资源组，该组将用于保护生产系统的数据集。RACF命令：

  ```
  
  ```

  

（2）定义RESxxTST 资源组，该组将用于保护测试系统的数据集。RACF命令：

  ```
  
  ```

  

> HINT ：ADDGROUP

## 步骤6 利用RACF命令(Search)或者RACF面板查找组Profile
RACF命令：

> HINT ：SEARCH  CLASS(GROUP)  MASK(DIVxx)

## 步骤7 总结本次实验体会及建议

```




```

