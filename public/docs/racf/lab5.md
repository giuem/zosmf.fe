# 实验五：数据集保护RACF实验Ⅱ

## 实验目的

实现对用户数据集和组数据集的保护

## 实验结果

试验后，学生应该掌握：

- 使用RACF命令对数据集进行保护
- 制定最佳匹配的数据集PROFILE对特定的数据集进行保护

## 实验介绍

该实验将创建数据集，确定创建数据集需要的权限，然后建立Generic PROFILE对数据集进行保护，最后对PROFILE的Warning状态进行理解和配置，并使用LISTDSD命令确定最佳匹配PROFILE和确定Generic PROFILE所保护的数据集范围

![](/img/racf/lab5/intro.png)

## 实验要求

完成实验报告

## 实验步骤

## 步骤1：

以TSOxx04登陆（FUNxxPRD组成员），创建 RESxxPRD.PROD.STUFF 数据集，是否成功？

 ```

 ```



## 步骤2：

以TSOxx03登陆（RESxxPRD组CREATE特权人员，即数据管理人员），为 RESxxPRD.DATA 创建一个全匹配的PROFILE进行保护

```

```



> HINT ：ADDSD

## 步骤3：

以TSOxx03登陆，把数据集PROFILE的Warning状态打开：把 RESxxTST.PROFILE 的Warning状态打开


> HINT ：ALTDSD

 ```

 ```



## 步骤4：

以TSOxx04登陆，浏览‘RESxxTST.DATA’数据集，是否成功，是否收到什么系统信息？

```

```



## 步骤5：

以TSOxx03登陆，把‘RESxxTST.’PROFILE的Warning状态关闭

```

```



> HINT ：ALTDSD 

 

## 步骤6：

以TSOxx04登陆，浏览‘RESxxTST.DATA’数据集，是否成功？

```

```



 

## 步骤7：

以TSOxx03登陆，假设RESxxPRD.NEWAPPL.FINANCE.DATA和RESxxPRD.NEWAPPL.HR.DATA是一个新应用系统的2个数据集，FUNxxTST组需要对这2个数据集有UPDATE权限，而不能对其他应用系统的数据集有操作权限。

注意：FUNxxPRD组仍然需要对所有的RESxxPRD数据集保留原有的操作权限。请输入RACF代码

```

```



> HINT ：ADDSD PERMIT 

 

## 步骤8：

检测哪一个PROFILE在保护‘RESxxPRD.NEWAPPL.FINANCE.DATA’和‘RESxxPRD.NEWAPPL.HR.DATA’

```

```



> HINT ：LISTDSD 

 

## 步骤9：

检测一个Generic PROFILE  RESxxPRD. 保护了那些数据集

```

```



> HINT ：LISTDSD 

 

## 步骤10：

问题：一个组的group-special用户或者Create/Connect/Join用户是否能够直接访问（比如新建/更新）组文件？尝试自己设计一个实验去验证。

```

```



 

## 步骤11：

思考：一个组的group-special用户或者Create用户是对数据集的Profile有操作权限，还是对数据集本身有操作权限？

```

```



 

## 步骤12：总结本次实验体会及建议

```




```




