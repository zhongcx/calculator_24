#### 24点计算器 
![最终效果图](https://upload-images.jianshu.io/upload_images/11217637-fa63620388050cd7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 准备工作
名称|内容|功能描述
---|---|---
邮箱|保密|用于注册
开发者工具下载|[https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/developer-instrument/developer-instrument-update-and-download](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/developer-instrument/developer-instrument-update-and-download)|用于开发小程序
获取appid|[https://microapp.bytedance.com/app/applist](https://microapp.bytedance.com/app/applist)|创建个人/企业
小程序名称|24点计算器|必填 不能重复
手机号|保密|用于收短信验证码
个人认证|姓名、身份证、手机号|个人主体不支持流量主与支付
小程序简介|解24点问题|基本信息完善
小程序头像|![](https://upload-images.jianshu.io/upload_images/11217637-4d7d4880d53be04f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)|在这个网站是自动生成的logo  [http://www.uugai.com/](http://www.uugai.com/)
个人主体开放服务类目|工具类-计算器|[https://microapp.bytedance.com/docs/zh-CN/mini-app/operation/mini-app-operation-rules/open-service-catalog/individual-service-category](https://microapp.bytedance.com/docs/zh-CN/mini-app/operation/mini-app-operation-rules/open-service-catalog/individual-service-category)
算法参考|[https://www.cnblogs.com/qiaoge0923/p/9794386.html](https://www.cnblogs.com/qiaoge0923/p/9794386.html)|原型图都省了
小程序二维码|![](https://upload-images.jianshu.io/upload_images/11217637-f0328f061c79a77d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)|上线后可配置，需要在代码里加分享功能，然后分享出来。后台给的二维码上线后虽然能显示，但是不支持下载，只能手动截图。

#### 开发工作
github源码：
[https://github.com/zhongcx/calculator_24/tree/master](https://github.com/zhongcx/calculator_24/tree/master)

第三方文档（官方文档不全，如tt:for都搜不出来，建议去第三方文档，或者参考微信小程序文档）：
[https://www.w3cschool.cn/microapp/microapp-b7dv33kn.html](https://www.w3cschool.cn/microapp/microapp-b7dv33kn.html)

抖音小程序调研报告
https://7072-production-54a8q-1302064826.tcb.qcloud.la/1597737573452.xls

#### 注意事项
1、需要小程序名称和主体信息认证才能提审核<br/>2、我是早上9点开始提交各种审核的，除了小程序名称，其它的都当天过审。<br/>3、他这个开发工具没有微信好用。如果同时修改了多个文件，如果按Ctrl+S保存，只能保存其中一个，另一个不会保存。会影响预览<br/>4、相比微信小程序有个好处，生成的测试二维码可直接发给陌生用户测试，不需要像微信那样在后台添加审核人员。<br/>5、主体申请后不能像微信小程序那样迁移，只能改名、下架。再重新建个号<br/>6、小程序挂链很难，参考官方挂载公示[https://bytedance.feishu.cn/sheets/shtcn7MpwxirVtgky23metYPP8b?sheet=RgmDuz](https://bytedance.feishu.cn/sheets/shtcn7MpwxirVtgky23metYPP8b?sheet=RgmDuz)<br/>7、小程序上线了但是只能在 我的-->菜单-->小程序 里搜到，并且后台有bug设置不了别名，我都已经上架了还提示“上架后才能设置”。我看社区里有很多人都有这个问题，但是没无解决。
