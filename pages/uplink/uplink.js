// pages/uplink/uplink.js
import linkageList from '../../api/linkage'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: linkageList,
    curIndex: 0,
    scrollLefts: 0
  },
  // 导航栏滑动
  tabNav(e) {
    let index = e.target.dataset.index;
    this.setData({
      curIndex: index,
      scrollLefts: (index - 2) * 65
    })
  },
  // 内容滑动
  changeScroll(e) {
    let index = e.detail.current;
    this.setData({
      curIndex: index,
      scrollLefts: (index - 2) * 65
    })
  }
})