# 实验三：分散式RACF安全管理实验

## 实验目的

实现RACF中的管理权限下放（Delegation）

## 实验结果

实验后，学生应该掌握：

- 将用户以Group Special身份关联到组

## 实验介绍

该实验将新建几个管理员用户，其中一个管理员负责用户安全的管理，一个管理员负责将用户连接到功能组，另外一个管理员管控制对数据集资源的访问，如下：

| 账号    | 用户                      | 权限                                    |
| ------- | ------------------------ | --------------------------------------- |
| TSOxx01 | for user Janet Smith     |group special for DIVxxADM               |
| TSOxx02 | for user Robert Anderson |connect authority for FUNxxPRD & FUNxxTST|
| TSOxx03 | for user Leslie Brown    |create authority for RESxxPRD & RESxxTST |


![](/img/racf/lab3/intro.png)

## 实验要求

完成实验报告

## 实验步骤

## 步骤1：确定前面实验中所建立的TSOxxyy用户的OWNER是DIVxxADM

以下是其中几个用户身份的定位：

（1） TSOxx01(Janet Smith)：该管理员将对DIVxxADM组用户的安全进行管理，包括为用户重置密码，挂起和启用用户，实现的RACF命令是

    ```

    ```



> HINT ：CONNECT 

（2） 使用‘LU’RACF命令或者RACF控制面板查看TSOxx01的属性，请回答以下问题

+ 该用户关联到哪些组？

    ```
    
    ```

    

+ 该用户有哪些用户特权？

    ```
    
    ```

    

+ 该用户是否有类权限（class authorization）？

    ```
    
    ```

    

+ 该用户关联到组DIVxxADM上时是否有什么特权（connect attributes）？

    ```
    
    ```

    

（3） TSOxx02(Robert Anderson)：该管理员可以将用户关联到DIVxxFUN组下的子功能组中，以实现用户对特定数据的访问权限，实现的RACF命令是

​    

> HINT ：CONNECT 

 

（4） 使用`LU`RACF命令或者RACF控制面板查看TSOxx02的属性，请回答以下问题

+ 该用户关联到哪些组？

    ```
        
    ```

+ 该用户有哪些用户特权？

    ```
        
    ```

+ 该用户是否有类权限（class authorization）？

    ```
        
    ```

+ 该用户关联到组FUNxxPRD和FUNxxTST上时是否有什么特权（connect attributes）？

    ```
        
    ```

 

（5） TSOxx03(Leslie Brown)：该管理员可以为RESxxPRD和RESxxTST组数据集创建数据集PROFILE，以控制用户对组数据集的访问，实现的RACF命令是

​    

> HINT ：CONNECT TO GROUPs WITH CREATE AUTHORITY

 

（6） 使用`LU`RACF命令或者RACF控制面板查看TSOxx03的属性，请回答以下问题

+ 该用户关联到哪些组？

    ```
        
    ```

+ 该用户有哪些用户特权（user attributes）？

    ```
        
    ```

+ 该用户是否有类权限（class authorization）？

    ```
        
    ```

+ 该用户关联到组RESxxPRD和RESxxTST上时是否有什么特权（connect attributes）？

    ```
        
    ```


## 步骤2：测试步骤1的功能是否实现

（1） 以TSOxx01身份登陆TSO，尝试修改用户密码等


> HINT ：ALU

 

（2） 以TSOxx02身份登陆TSO，将TSOxx01用户关联到FUNxxPRD和FUNxxTST

​    

> CONNECT TSOxx01 GROUP(FUNxxPRD) 
> CONNECT TSOxx01 GROUP(FUNxxTST)

 

（3） 以TSOxx02身份登陆TSO，将TSOxx01从FUNxxPRD和FUNxxTST组中移走


​     


> HINT ：REMOVE
> REMOVE TSOxx01 GROUP(FUNxxPRD) 
> REMOVE TSOxx01 GROUP(FUNxxTST)

 

（4） 以TSOxx03身份登陆TSO，对RESxxPRD和RESxxTST组文件进行保护：通用权限使用NONE，授权FUNxxPRD组对RESxxPRD.数据集有ALTER的权限，FUNxxTST组对RESxxTST. 数据集有ALTER的权限。（仅思考，无需做，详细见后面的实验）

​    

> HINT：命令1：ADDSD …；命令2：PE…

（5） 分别以TSOxx04和TSOxx05身份登陆TSO，对数据集保护进行验证。（仅思考，无需做，详细见后面的实验）

TSOxx04新建数据集FUNxxPRD.DATA并编辑内容，是否成功？ <u>            </u>

TSOxx05新建数据集FUNxxTST.DATA并编辑内容，是否成功？<u>            </u>

TSOxx04浏览数据集FUNxxTST.DATA内容，是否成功？<u>            </u>

TSOxx05浏览数据集FUNxxPRD.DATA内容，是否成功？<u>            </u>

## 步骤3：总结本次实验体会及建议


​        

​    