// pages/progress1/progress1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent1: 30,
    percent2: 40,
    percent3: 50,
    percent4: 60,
    percent5: 70,

    curvalue1: 30,
    curvalue2: 50,
    curvalue3: 60,
    curvalue4: 20,

    step: 0
  },
  // 完成一次拖动后触发的事件
  progressChange(e) {
    console.log('完成一次拖动后触发的事件e--->', e);
  },
  // 拖动过程中触发的事件
  changing(e) {
    console.log('拖动过程中触发的事件e--->', e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.drawBg()
  },

  // 圆形进度条
  drawBg() {
    let that = this;
    // 画背景圆
    const ctx = wx.createCanvasContext('canvasCircle')
    ctx.setLineWidth(3);
    ctx.setStrokeStyle('#eaeaea');
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(70, 80, 36, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.draw();

    // 加载动画效果
    let steps = 1,
      startAngle = 1.5 * Math.PI,
      endAngle = 0,
      speed = 100, // 加载长度
      sec = 600; //加载速度


    // 画加载的圆
    function drawing(s, e) {
      let ctt = wx.createCanvasContext('canvasRing');
      ctt.setLineWidth(3);
      ctt.setStrokeStyle('#11be0f');
      ctt.setLineCap('round');
      ctt.beginPath();
      ctt.arc(70, 80, 36, s, e, false);  // 设置圆形进度大小大小
      ctt.stroke();
      ctt.draw();
    }

    function drawLoading() {
      if (steps < 101) {
        //这里用me,同步数据,渲染页面
        that.setData({
          step: steps
        })
        endAngle = steps * 2 * Math.PI / speed + startAngle;
        drawing(startAngle, endAngle);
        steps++;
        console.log(steps);
      } else {
        clearInterval(that.interval);
      }
    }
    that.interval = setInterval(drawLoading, sec);
  }
})