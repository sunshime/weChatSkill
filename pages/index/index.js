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
    wx.showToast({
      title: '敬请期待！',
      icon: 'none',
      duration: 3000
    })
  },
  // 左滑
  leftSlide() {
    wx.showToast({
      title: '敬请期待！',
      icon: 'none',
      duration: 3000
    })
  }
})