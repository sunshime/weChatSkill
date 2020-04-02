//index.js
// 左右联动效果


Page({
  data: {

  },
  // 左右菜单联动
  linkage() {
    wx.navigateTo({
      url: '/pages/linkage/linkage'
    })
  },
  // 上下菜单联动
  upDownLinkage() {
    wx.navigateTo({
      url: '/pages/uplink/uplink',
    })
  },
  // 左滑
  leftSlide() {
    wx.navigateTo({
      url: '/pages/delLeft/delLeft',
    })
  }
})