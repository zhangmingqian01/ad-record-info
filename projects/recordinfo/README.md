# Recordinfo

record根据xml数据，格式化成可修改的表单

## 1.2.120
    修复了没有业务场景时的校验问题

## 1.2.118
    添加了文件的创建日期，修改日期，依赖于moment.js
    添加了文件的seq,format属性

## 1.2.117 

    电子文件内结构变化,电子文件file上固定属性md5=“xxx”,调整为：checksumType="md5" checksum="b3d6d9c8517e88055bd8b1736eade1c2" 

## 1.2.116  

    修复了空值无法保存的问题

    修复了空文件著录没有文件对象的问题

    不管有无业务场景都进行校验

    getMulModifeProPertyValues: (allowedValuesCode: string) => Promise<any> #获取下拉值选项的http请求方法 

    getDefaultValue: (defaultValue: DefaultValue) => string #获取默认值的方法，非http请求，一般在recordInfo.service中，但需要用到缓存里的信息，所以每个应用都不相同

    _DepartmentManageServiceGetList: () => Promise<any> #获取部门列表的http请求方法

    _chooseUsersAccessServiceGetRoleList: () => Promise<any> #获取角色列表的请求方法

    _chooseUsersAccessServiceGetUserByDept: (groupName: string) => Promise<any> #根据部门id获取用户列表

    _chooseUsersAccessServiceGetUserByRole: (groupName: string) => Promise<any> #根据角色名获取用户列表

    _dwClassManageServiceGetMetadataCategoryInfo: (metadataSchemeId: string) => Promise<any> #根据元数据id获取类目信息

    environmentBaseUrl : string #点击文件预览时需要的应用根路由，一般就传enviroment文件里的baseUrl

    ApiUrl : enum #api接口枚举类，用于上传组件
 
    baseUrl #上传接口用到的，后台根地址

    AuthenticationService #用户信息的服务，一般在core文件夹中的同名service文件
    
    objectPath : record上的s_object_path,用于预览文件

    修改了选择服务器附件上传的功能无法使用的情况
## TODO

将所有input属性改为一个大对象，并增加类型说明文件