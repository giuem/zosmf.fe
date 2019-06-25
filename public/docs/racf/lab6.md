# 实验六：保护TSO资源

## 实验目的

授权用户登陆TSO

## 实验结果

实验后，学生应该掌握：

- RACF如何控制用户对TSO的访问

- 如何利用RACF通用资源PROFILE保护TSO的登陆过程(TSOPROC)和用户帐号(ACCTNUM)

- 如何定义用户PROFILE的TSO段

## 实验介绍

该实验将首先为AP(application programmer)和SP(system programmer)用户建立组结构，然后为TSO的登陆过程(TSOPROC)和用户帐号(ACCTNUM)建立一些通用资源PROFILE进行保护，接着新增AP/SP用户PROFILE，对TSO段进行赋值，并对他们授权访问TSO

## 实验要求

完成实验报告

## 实验步骤

实验中的组结构如下图

![](/img/racf/lab6/intro_1.png)

 

需要用到的一些通用资源RPOFILE结构如下图，请逐渐补充完整：

![](/img/racf/lab6/intro_2.png)

 

## 步骤 1：
以 yourid 登陆TSO，该用户是 RACFLAB 的 Group Special 用户，应该已经赋予了充分的权限新建和管理该组的用户，请使用‘LU’命令查询yourid的权限回答以下问题：

（1） What give you the capability to define the new user profiles to RACF?

```

```



（2） You have been given UPDATE access in a profile name USER.TSO.* in the Field general resource class. Will this be sufficient to allow you to define TSO segments when you define new users?

```

```



（3） What give you the capability to define profiles to control access to TSO logon procedures?

```

```



（4） What give you the capability to define profiles to control access to account numbers?

```

```



 

## 步骤 2：创建组结构

（1） 在DIVxxFUN下创建子组FUNxxAP

```

```



> HINT ：ADDGROUP

 

（2） 在DIVxxFUN下创建子组FUNxxSP

```

```



> HINT ：ADDGROUP

 

（3） 在DIVxxRES下创建子组RESxxTSO，用以管理TSO资源授权。

```

```



> HINT ：ADDGROUP

 

## 步骤 3：新增AP和SP用户，这些用户需要访问TSO

1. 新增SP用户TSOxx06，要求如下：
    + OWNER和默认组应该是DIVxxADM
    + 可以登陆TSO
        + 账户使用ACCT#Sxx
        + 登陆过程使用PROC#Sxx
        + Region大小为4096

```

```



> HINT: ADDUSER 

 

2. 新增AP用户TSOxx07，要求如下：
    + OWNER和默认组应该是DIVxxADM
    + 可以登陆TSO
        + 账户使用ACCT#Axx
        + 登陆过程使用PROC#Axx
        + Region大小为4096



## 步骤 4：

为TSO用户创建一个新的登陆过程PROC#Sxx和PROC#Axx（下图中的IKJ#ST是已建好的登陆过程的模版），该登陆过程必须存放在VENDOR.PROCLIB库中

![](/img/racf/lab6/step4.png)

 ```

 ```



## 步骤 5：
测试TSOxx06和TSOxx07登陆TSO，成功吗？出现什么信息？

```

```



 

## 步骤 6：
保护PROC#Sxx登陆过程（TSOPROC类）：创建一个通用资源RPOFILE

（1） 创建通用资源TSOPROC的RPOFILE，保护AP和SP的TSO登陆过程

**授权规则**：

+ PROC#Sxx只有SP用户组才能使用(READ权限)，其他人不可以使用；
+ PROC#Axx只有AP用户组才能使用(READ权限)，其他人不可以使用；

思考：资源Profile的Owner如何指定？

```

```



> HINT: RDEFINE...   ；PE...

 

（2） 浏览PROC#Sxx和PROC#Axx PROFILE，它们用于保护不同的TSO登陆服务

```

```



> HINT: RLIST 

 

## 步骤 7：
刷新TSOPROC类在内存中的Profile

```

```



> HINT: SETROPTS RACLIST() REFRESH 

 

## 步骤 8：保护ACCTNUM

创建两个TSO账户(ACCTNUM)，并创建一个通用资源RPOFILE保护该ACCTNUM

（1） 创建RPOFILE：ACCT#Sxx 该ACCTNUM为SP用户组提供TSO登陆服务

**授权规则**：

+ ACCT#Sxx只有SP用户组才能使用(READ权限)，其他人不可以使用；

思考：资源Profile的Owner如何指定？

 ```

 ```



> HINT: RDEFINE..  ；PE...

 

（2） 创建PROFILE：ACCT#Axx     该ACCTNUM为AP用户组提供TSO登陆服务

**授权规则**：

+ ACCT#Axx只有AP才能使用(READ权限)，其他人不可以使用

思考：资源Profile的Owner如何指定？

```

```



> HINT: RDEFINE   PE 

 

（3） 浏览PROFILE：ACCT#Sxx和ACCT#Axx

```

```



> HINT: RLIST 

 

## 步骤 9：保护TSOAUTH

TSOAUTH通用资源类提供保护TSO权限的功能，TSO权限主要包括：ACCT，JCL，MOUNT，OPER，RECOVER等。系统已经定义了一个JCL PROFILE用于保护TSO的JCL权限，该权限是允许通过TSO向JES提交JCL批量作业

（1） 查看SP和AP用户是否拥有提交JCL作业的权利。

```

```



> HINT: RLIST TSOAUTH JCL 

 

 

## 步骤 10：保护用户数据集

（1） 保护TSOxx06的用户数据集

```

```



 

（2） 保护TSOxx07的用户数据集

```

```



> HINT: ADDSD 

 

## 步骤 11：
为TSOxx06和TSOxx07创建ALIAS（普通用户不能修改Master Catalog，所以为了让用户可以创建自己的编目数据集，必须为用户创建ALIAS，ALIAS指向User Catalog）

（1） 为TSOxx06创建别名

```

```



> HINT: DEFINE ALIAS.... 建议User Catalog: CATALOG.USER01

 

（2） 测试是否成功

```

```



> HINT:在OPTION3.4中DSN Level输入TSOxx06，回车，看是否显示TSOxx06的Alias 

 

（3） 为TSOxx07创建别名

```

```



（4） 测试是否成功

```

```



 

## 步骤 12：检测TSO用户的设置是否有效

（1） 以TSOxx06和TSOxx07登陆TSO，测试是否成功

```

```



 

（2） 在登陆过程中，可以尝试做下面的测试

+ 删除TSOPROC和ACCTNUM，看系统怎么反应？

    ```
    
    ```

    

+ 键入不存在的TSOPROC和ACCTNUM，看系统怎么反应？

    ```
    
    ```

    

+ 输入Region大小值大于4096，或者小于4096，看系统怎么反应？

    ```
    
    ```

 

（3） 以yourid登陆TSO，删除TSOxx06用户RPOFILE的TSO段，然后再尝试以TSOxx06登陆，看系统怎么反应？

```

```



> HINT:请查阅《Security Server RACF Command Language Reference》(SA22-7687-09)参考书的123页

 

（4） 为TSOxx06重新赋值TSO段

```

```



 

（5） 以yourid登陆TSO，取消TSOxx07用户RPOFILE的TSOPROC赋值或者ACCTNUM赋值，然后再尝试以TSOxx07登陆，看系统怎么反应？

```

```



> HINT:请查阅《Security Server RACF Command Language Reference》(SA22-7687-09)参考书的123页

 

## 步骤 13：
思考：如果想为TSO资源的保护指定一个管理员，如何操作比较简单高效？

```

```



 

## 步骤 14：总结本次实验体会及建议

```




```





