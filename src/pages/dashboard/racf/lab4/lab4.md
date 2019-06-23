# 实验四：数据集保护RACF实验Ⅰ

## 实验目的

实现对用户数据集和组数据集的保护

## 实验结果

实验后，学生应该掌握：

- 使用RACF命令和数据集进行保护

## 实验介绍

该实验将首先保护用户数据集，然后对生产数据集和测试数据集进行保护，然后进行授权后的验证。

说明：为了简化实验，RESxxPRD和RESxxTST组既是Data Control Group，也是Resource Onwership Group。

![](/img/racf/lab4/intro.png)

## 实验要求

完成实验报告

## 实验步骤

该实验中会涉及到多个数据集PROFILE，请随着实验的进展填写下面的表格

![](/img/racf/lab4/step1.png)

 ## 步骤1：保护以下用户的数据集

保护准则：只有用户本身可以访问自己的数据集，其他人都不能访问。（用户的数据集是指以用户名为HLQ的所有数据集）

| 账号    | 用户                     |
| ------- | ------------------------ |
| TSOxx01 | for user Janet Smith     |
| TSOxx02 | for user Robert Anderson |
| TSOxx03 | for user Leslie Brown    |
| TSOxx04 | for user Arthur Fielding |
| TSOxx05 | for user Susan Johnson   |

以TSOxx01身份登陆TSO然后执行RACF命令

```

```



> HINT ：ADDSD 

 

## 步骤 2：查看步骤1创建的用户数据集PROFILE，回答以下问题

（1） PROFILE的ACCESS LIST是否有内容？

```

```



（2） PROFILE的OWNER是谁？

```

```



> HINT ：LISTDSD 

 

## 步骤3：定义RESxxTST组数据集的 RPOFILE

在前面的实验中，TSOxx03被指定为RESxxPRD和RESxxTST的Create用户，以拥有对这2个组的数据集的保护权限。以TSOxx03登陆TSO。

（1） 对RESxxTST数据集进行以下保护（ADDSD）：

+ Audit all unsuccessful accesses (Hint: AUDIT)
+ Make the owner TSOxx03 (Hint: OWNER)
+ No other users or groups should have access (Hint: UACC)

```

```



> HINT ：ADDSD 

 ## 步骤4：修改上面定义的 RESxxTST.PORFILE的访问列表，给FUNxxTST组赋予ALTER访问权限                                                                             

```

```



> HINT ：PERMIT 

 

## 步骤5：定义RESxxPRD组数据集的RPOFILE

（1） 对RESxxPRD数据集进行以下保护（ADDSD）：

+ Audit all unsuccessful accesses (AUDIT)
+ Audit successful accesses at UPDATE and higher (AUDIT)
+ Make the owner TSOxx03 (OWNER)
+ No other users or groups should have access (UACC)



> HINT ：ADDSD 

 ```

 ```



 

## 步骤6：修改上面定义的RESxxPRD.PORFILE的访问列表，给FUNxxPRD组赋予ALTER访问权限

```

```



> HINT ：PERMIT 

 

## 步骤7：确定组数据集PROFIEL是否创建并按照预定的要求保护成功

```

```



> HINT ：LISTDSD 

 

## 步骤8：以yourid用户登陆TSO，创建RESxxTST和RESxxPRD组数据集

（1） 创建ALIAS：RESxxTST和RESxxPRD

```

```



> HINT ：直接执行命令DEFINE ALIAS(NAME(...) RELATE(...))或者执行下面的作业。
>本系统建议：User Catalog: CATALOG.USER01，该任务需要用户对系统主编目Master Catalog具有更新权限，如果命令执行中遇到权限问题，请咨询系统管理员

 

（2） 测试是否成功

```

```



> HINT : 在OPTION 3.4中DSN Level分别输入RESxxTST、RESxxPRD，回车，看是否显示其Alias 

 

## 步骤9：以TSOxx03登陆TSO，创建组数据集，参考下图

（1） 创建一个顺序数据集RESxxPRD.DATA (RECFM=FB, LRECL=80, VOLUME=USER01)

（2） 创建一个顺序数据集RESxxTST.DATA (RECFM=FB, LRECL=80, VOLUME=USER01)

![](/img/racf/lab4/step9.png)


## 步骤10：验证TSOxx04访问RESxxPRD组数据集：成功访问

以TSOxx04用户登陆，编辑以RESxxPRD为HLQ的数据集(如RESxxPRD.DATA)，看是否成功，为什么？

```

```

 

## 步骤11：验证TSOxx04访问RESxxTST组数据集：拒绝访问

以TSOxx04用户登陆，执行RACF命令‘PROFILE WTPMSG’。然后编辑以RESxxTST为HLQ的数据集(如RESxxTST.DATA)，看是否成功，为什么？

```

```



## 步骤12：验证TSOxx05访问RESxxTST组数据集的保护：成功访问

以TSOxx05用户登陆TSO(从上面的实验中可以看出TSOxx05是FUNxxTST的成员)。对以RESxxTST为HLQ的数据集(如RESxxTST.DATA)进行编辑，测试对数据集的保护是否成功，为什么？

```

```



 ## 步骤13：

以TSOxx01登陆，删除RESxxPRD打头的数据集(如RESxxPRD.DATA)，看是否成功？考虑为什么。

 ```

 ```



## 步骤14：

保留TSOxx01登陆的Session，再打开一个新的Session，以TSOxx03登陆TSO，修改 RESxxPRD.Profile，给TSOxx01赋ALTER权限
> Hint: ACCESS LIST

```

```



> HINT : PERMIT 

 

## 步骤15:

再尝试用TSOxx01用户删除RESxxPRD.DATA，看是否成功？

 ```

 ```



## 步骤16：

TSOxx01重新登陆后再尝试删除RESxxPRD.DATA，看是否成功？ 

 ```

 ```



## 步骤17：总结本次实验体会及建议

```



```