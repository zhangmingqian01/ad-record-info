# Recordinfo

record根据xml数据，格式化成可修改的表单

## 1.1.5 正式版 

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
    

## TODO

将所有input属性改为一个大对象，并增加类型说明文件