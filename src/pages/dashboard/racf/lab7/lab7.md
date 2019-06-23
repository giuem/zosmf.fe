# 实验七：提交实验：使用JCL执行RACF命令

## 实验目的

检查学生是否完成前面的实验

## 实验结果

试验后，学生应该掌握：

- 通过JCL作业运行RACF命令
- 打印JCL作业的运行结果
- 通过FTP下载主机数据集

## 实验介绍

编写JCL作业，执行RACF命令，生成之前实验相关 的报告

## 实验要求

完成实验报告

## 实验步骤

## 步骤 1：

编写运行JCL作业，提交作业运行结果。JCL作业模板如下。注意作业名指定为youridR1。


![](/img/racf/lab5/step1.png)

本系统中【DSNAME】为 IBMUSER.JCL.RACF(IKJEFT01)

 

1.1 编写JCL作业，验证之前的实验结果。

作业中需要完成以下任务（其中xx为账号后两位数字）：

（1） 搜索yourid用户建立的所有组和用户

```

```



> 提示：
>
> SEARCH CLASS(GROUP) MASK(DIVxx)
>
> SEARCH CLASS(GROUP) MASK(FUNxx)
>
> SEARCH CLASS(GROUP) MASK(RESxx)

（2） 搜索yourid用户建立的所有用户

```

```



> 提示：
>
> SEARCH CLASS(USER) MASK(TSOxx)

（3） 查看组内成员及其管理权限（for 分散安全管理：TSOxx02在FUNxx组里面是connect权限；TSOxx03在RESxx组里面是connect权限）

```

```



> 提示：
> 
> LG FUNxxPRD   
> 
> LG FUNxxTST   
> 
> LG RESxxPRD    
> 
> LG RESxxTST   

（4） 搜索实验中所建立的保护数据集的Profile

```

```



> 提示：
> 
> SEARCH CLASS(DATASET) MASK(TSOxx)     
> 
> SEARCH CLASS(DATASET) MASK(RESxx)     

（5） 查看某个数据集的保护策略（用户数据集及组数据集）

```

```



> 提示：
> 
> 用户数据集：LISTDSD DA(TSO1001.) AU     
> 
> 组数据集：LISTDSD DA(RESxxPRD.) AU

（6） 查看实验中所创建的通用资源TSO登陆过程(Class: TSOPROC)

```

```



> 提示：
> 
> SEARCH CLASS(TSOPROC) FILTER(PROC#%xx)    
> 
> RLIST TSOPROC PROC#Sxx AU    
> 
> RLIST TSOPROC PROC#Axx AU    

（7） 查看实验中所创建的通用资源TSO账号(Class: ACCTNUM)的保护策略

```

```



> 提示：
> 
> SEARCH CLASS(ACCTNUM) FILTER(ACCT#%xx)
> 
> RLIST ACCTNUM ACCT#Sxx AU                
> 
> RLIST ACCTNUM ACCT#Axx AU                

 

1.2 Submit上述JCL作业，确保作业的返回码不大于4。



 

1.3 在SD.ST面板中找到作业，在作业左侧使用 XDC命令把作业内容输出到数据集（yourid.RACF.REPORT）中。



1.4 最后通过FTP工具（比如FileZilla）把数据集（yourid.RACF.REPORT）下载到本地提交。



步骤 2 总结本次实验体会及建议

```

```







 

