# 实验二：用户管理RACF实验

## 实验目的

利用RACF命令新建和管理用户

## 实验结果

实验后，学生应该掌握：

- 新建用户
- 用户的安全管理
- 利用RACF命令增加，更改，显示和查找用户Profile

## 实验介绍

该实验将新建几个用户，然后对用户进行一些安全管理，包括修改用户密码，Revoke和Resume一个用户

![](/img/racf/lab2/intro.png)

## 实验要求

完成实验报告

## 步骤1：新建用户

1.1 在不太了解用户需要什么权限的情况下，一般只给出最低权限，利用RACF命令或面板完成以下设置

（1） 指定用户的默认组为DIVxxADM

（2） 为用户指定初始密码

（3） 考虑为用户指定OWNER

（4） 新增以下用户：

| 账号    | 用户                     |
| ------- | ------------------------ |
| TSOxx01 | for user Janet Smith     |
| TSOxx02 | for user Robert Anderson |
| TSOxx03 | for user Leslie Brown    |
| TSOxx04 | for user Arthur Fielding |
| TSOxx05 | for user Susan Johnson   |



> HINT ：AU

 

1.2 查看用户是否建立成功

​                                                                             

> HINT ：LU

 

1.2 查看用户的TSO段是否有内容？

​                                                                             

> HINT ：LU …TSO

 

1.3 如果用户Profile没有指定TSO段的内容，用户将无法顺利登陆TSO系统（可以先登陆测试一下），需要为用户指定TSO段信息。（指定之后再测试一下登陆）

​                                                                             

> HINT ：ALU …TSO(PROC() ACCTNUM() SIZE())
>
> 本系统建议：PROC: SPFPROCE，ACCTNUM: ABC，SIZE: 4096

 

1.4 用户登陆TSO之后，如果要进入ISPF面板系统，首次进入ISPF系统时系统会自动为用户建立几个编目的数据集，通常普通用户的文件无法在主机系统主目录（Master Catalog）中进行编目，所以，要实现为新用户创建好用户目录（User Catalog）和别名（Alias）。

​                                                                             

> HINT：DEFINE ALIAS(NAME(‘…’) RELATE(‘…’))
>
> 本系统建议：Alias: TSOxxyy, User Catalog: CATALOG.USER01

测试是否成功

​                                                                             

HINT : 在OPTION3.4中DSN Level输入 `TSOxx01` 回车，看是否显示其ALIAS，如果出现类似下面的结果则表明ALIAS创建成功（此例中‘xx’为‘00’,‘yy’为‘01’）。**

![](/img/racf/lab2/step1.png)


1.5 验证新建用户是否可以顺利登陆TSO系统。

​                                                                             

 ## 步骤2：为用户重置密码

当用户忘记密码的时候需要管理员yourid为该用户重新制定一个初始密码

场景：Janet Smith(TSOxx01)遗忘了密码，需要用什么RACF命令为他指定一个新的临时密码呢？

​                                                                             

> HINT ：ALU

## 步骤3：Revoke用户

当用户账号暂时不用的时候，安全起见应该将该账号Revoke挂起。

场景：人力资源部门通知：Arthur Fielding(TSOxx04)将会出差一段时间，请在这段时间将该用户的帐号挂起，RACF命令是什么？

​                                                                             

> HINT ：ALU…REVOKE 

## 步骤4：Resume用户

当挂起的用户帐号需要重新启用的时候，应该及时地将帐号Resume。

场景：Arthur Fielding(TSOxx04)出差回来，希望能够继续使用以前的帐号，RACF命令是什么？

​                                                                             

> HINT ：ALU…RESUME

## 步骤5：**步骤 1** 挂起和启用用户帐号的时候，可以指定挂起和启用的具体日期。

请设置挂起日期为实验的第二天，启用日期为1个月后。                                                 

> HINT ：ALU



## 步骤6：查看是否生效，考虑如何撤销？

> HINT ：LU…/ALU…



## 步骤7：使用Search命令查找以上新建的用户Profile

> HINT ：SEARCH CLASS(USER) MAKS(TSOxx)



## 步骤8：RACF中有些Options是和用户相关的，请使用‘SETROPTS LIST’命令显示RACF OPTIONs设置

回答以下问题(可以到RACF面板中选择System OptionàDisplay也能看到RACF OPTIONs内容)：

（1） 系统规定密码多长时间更换一次？

​                                                                             

（2） 系统记录过去的密码吗？如果记录，记录多少个？

​                                                                             

（3） 在密码过期之前系统会发送警告信息给用户吗？

​                                                                             

（4） 系统有规定密码设置规则吗？



## 步骤9： 将用户连接到组。

**步骤 1** RACF中给用户访问资源权限的最佳方法是将用户关联到可以访问这些资源的组中，这些组称为功能组(Functional Group)

（1） 将用户Arthur Fielding(TSOxx04)连接到组FUNxxPRD，实现其对生产数据集的访问

```

```



（2） 将用户Susan Johnson (TSOxx05)连接到组FUNxxTST，实现其对测试数据集的访问

```

```



>  HINT ：CONNECT

## 步骤10：使用什么RACF命令可以验证用户是否关联到组？

> HINT ：LU or LG

## 步骤11： 总结本次实验体会及建议



