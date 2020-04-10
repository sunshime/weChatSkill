// pages/preImg/preImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
  },
  // 选择图片
  chooseImg() {
    console.log('11111');
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        let imgList = this.data.imgs;
        res.tempFilePaths.forEach((item) => {
          imgList.push(item)
        })
        console.log('imgList--->', imgList);

        this.setData({
          imgs: imgList
        })
      },
      fail: (err) => {
        console.log('err--->', err);

      }
    })
  },
  // 图片预览
  previewImage() {
    wx.previewImage({
      urls: this.data.imgs,
      success: (res) => {
        console.log('res-->', res);

      },
      fail: (err) => {
        console.log(err);

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})