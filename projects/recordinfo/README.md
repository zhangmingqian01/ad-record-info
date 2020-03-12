# Recordinfo

record根据xml数据，格式化成可修改的表单

## 1.1.2 正式版 

新增了预览文件路径的值

修复了formUpload没有样式的问题,上传按钮的样式

添加了对ant-design的依赖。

解决了图片根据名字显示的功能。

解决了下拉值需要获取后台返回的值来显示的功能。

解决了table数据格式化指令缺失的问题。

解决了对所有著录组件的依赖

需要对http服务进行绑定
    @Input() getMulModifeProPertyValues: (allowedValuesCode: string) => Promise<any>
    @Input() getDefaultValue: (defaultValue: DefaultValue) => string

    @Input() _DepartmentManageServiceGetList: () => Promise<any>
    @Input() _chooseUsersAccessServiceGetRoleList: () => Promise<any>
    @Input() _chooseUsersAccessServiceGetUserByDept: (groupName: string) => Promise<any>
    @Input() _chooseUsersAccessServiceGetUserByRole: (groupName: string) => Promise<any>
    @Input() _dwClassManageServiceGetMetadataCategoryInfo: (metadataSchemeId: string) => Promise<any>

## TODO

目前没有要加的新功能