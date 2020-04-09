// pages/poster1/poster1.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '../../images/posterbg.jpg',
    hidden: false,
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    const ctx = wx.createCanvasContext('mycanvas')
    ctx.drawImage(_this.data.url, 0, 0, 400, 700);
    let text = "床前明月光，疑是地上霜。举头望明月，低头思故乡。"
    ctx.fillStyle = "#fff"
    ctx.setFontSize(20)
    ctx.fillText('静夜思', 135, 200)
    ctx.setFontSize(14)
    ctx.fillText('李白', 150, 225)
    ctx.setFontSize(18)
    _this.textPrewrap(ctx, text, 60, 260, 32, 200, 4)
    ctx.draw();

    wx.showToast({
      title: '图片生成中...',
      icon: "none",
      duration: 1000
    })
    setTimeout(() => {
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success(res) {
          console.log('res-->', res);
          _this.setData({
            url: res.tempFilePath,
            hidden: true
          })
        },
        fail(err) {
          console.log('err-->', err);

        },
        complete(res) {
          wx.hideToast()
        }
      })
    }, 500);


  },

  // 长按显示弹框
  longTap() {
    this.setData({
      isShow: true
    })
  },

  yes() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.url,
      success(res) {
        wx.showToast({
          title: '图片保存成功，去分享吧',
          icon: "none"
        })
      },
      fail(err) {
        wx.showToast({
          title: '图片保存失败啦！',
          icon: "none"
        })
      }
    })
    this.setData({
      isShow: false
    })
  },
  no() {
    this.setData({
      isShow: false
    })
  },

  /**
   * 设置文本换行
   * @param {*} ctx 画布的上下文环境
   * @param {*} content 需要绘制的文本内容
   * @param {*} drawX 绘制文本的x坐标
   * @param {*} drawY 绘制文本的y坐标
   * @param {*} lineHeight 文本之间的行高
   * @param {*} lineMaxWidth 每行文本的最大宽度
   * @param {*} lineNum 最多绘制的行数
   */
  textPrewrap(ctx, content, drawX, drawY, lineHeight, lineMaxWidth, lineNum) {
    var drawTxt = ''; // 当前绘制的内容
    var drawLine = 1; // 第几行开始绘制
    var drawIndex = 0; // 当前绘制内容的索引

    // 判断内容是否可以一行绘制完毕
    if (ctx.measureText(content).width <= lineMaxWidth) {
      ctx.fillText(content.substring(drawIndex, i), drawX, drawY);
    } else {
      for (var i = 0; i < content.length; i++) {
        drawTxt += content[i];
        if (ctx.measureText(drawTxt).width >= lineMaxWidth) {
          if (drawLine >= lineNum) {
            ctx.fillText(content.substring(drawIndex, i) + '..', drawX, drawY);
            break;
          } else {
            ctx.fillText(content.substring(drawIndex, i + 1), drawX, drawY);
            drawIndex = i + 1;
            drawLine += 1;
            drawY += lineHeight;
            drawTxt = '';
          }
        } else {
          // 内容绘制完毕，但是剩下的内容宽度不到lineMaxWidth
          if (i === content.length - 1) {
            ctx.fillText(content.substring(drawIndex), drawX, drawY);
          }
        }
      }
    }
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