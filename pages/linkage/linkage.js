// pages/linkage/linkage.js

import linkageList from '../../api/linkage'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: linkageList,
    scrollTops: 0, // 滑动的高度
    curIndex: 0, // 当前项
    rtCurIndex: 0
  },

  tabNav(e) {
    let index = e.target.dataset.index
    this.setData({
      curIndex: index,
      rtCurIndex: index,
      scrollTops: (index - 4) * 50
    })
  },
  scrollContent(e) {
    let list = this.data.list;
    let height = 0;

    for (let i = 0; i < list.length; i++) {
      let els = wx.createSelectorQuery().select("#scroll-" + i);
      els.fields({
        size: true
      }, function (res) {
        // console.log(res);
        list[i].top = height;
        height += res.height;
        list[i].bottom = height
      }).exec()
    }

    this.setData({
      list
    })

    console.log(e);

    let scrollTop = e.detail.scrollTop;

    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        this.setData({
          curIndex: i,
          scrollTops: (i - 4) * 50
        })
        return false
      }
    }

  }

})