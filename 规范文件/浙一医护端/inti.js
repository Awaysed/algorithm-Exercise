//本地储存
wx.setStorageSync('key', 'value')
//拿取
var value = wx.getStorageSync('key')
const app = getApp();
// imageServerAddress: app.globalData.imageServerAddress