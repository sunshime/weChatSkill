// pages/delLeft/delLeft.js

import delList from '../../api/delList'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    delList: delList,
    startX: 0,
    startY: 0
  },
  // 开始滑动
  touchStart(e) {
    // console.log(e);
    let delList = this.data.delList;
    delList.forEach((item, index) => {
      item.isTouchMove = false;
    })

    this.setData({
      delList: delList,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },
  // 滑动中
  touchMove(e) {
    let moveX = e.changedTouches[0].clientX
    let moveY = e.changedTouches[0].clientY
    let indexs = e.target.dataset.index
    let delList = this.data.delList

    let angle = this.angle({
      X: this.data.startX,
      Y: this.data.startY
    }, {
      X: moveX,
      Y: moveY
    })

    delList.forEach((item, index) => {
      if (angle > 30) {
        // console.log(11111);
        return
      }

      if (indexs == index) {
        if (moveX > this.data.startX) { // 右滑
          item.isTouchMove = false
        } else { // 左滑
          item.isTouchMove = true
        }
      }
    })

    this.setData({
      delList
    })

  },
  // 计算角度
  angle(start, end) {
    let _X = end.X - start.X,
      _Y = end.Y - start.Y
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
  },
  // 删除
  delItem(e) {
    let index = e.target.dataset.index;
    let delList = this.data.delList;
    delList.splice(index, 1)
    this.setData({
      delList
    })
  }

})