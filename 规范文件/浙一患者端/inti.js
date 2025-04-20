//本地储存
wx.setStorageSync('key', 'value')
//拿取
var value = wx.getStorageSync('key')
const app = getApp();
// imageServerAddress: app.globalData.imageServerAddress


//需求记录
// 1.选择就诊人-监护人字段判断是否有监护人

//页面级 
// <!-- 添加就诊人 -->
// 改动1.添加监护人代码 2.credentialList 监护人替换guardianCredentialList
// 3.选择身份证号 生日处理逻辑
// <!-- 监护人信息 -->