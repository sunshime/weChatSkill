//index.js
var app = getApp();
//获取应用实例

Page({
  data: {
    userInfo: {},
    startX: 0, //开始移动时距离左
    endX: 0, //结束移动时距离左
    nowPage: 0, //当前是第几个个页面
    xinList: [{
        id: 5,
        from: '一路向南1',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来s，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '一路向南2',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来s，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '一路向南3',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '一路向南4',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '一路向南5',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '一路向南6',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '一路向南7',
        to: '记得要微笑',
        msg: '这么多年咨询信看下来，让我逐渐明白一件事。 很多时候，咨询的人心里已经有了答案，来咨询只是想确认自己的决定是对的。 所以有些人读过回信后，会再次写信过来， 大概就是因为回答的内容和他的想法不一样。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
    ]
  },
  //事件处理函数

  onLoad: function (e) {

    this.checkPage(this.data.nowPage);
  },
  onReady: function () {

  },
  onShareAppMessage: function () {
    return {
      title: '解忧小酒馆，专治不开心~'
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });

    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;

    //向左移动
    if (moveX > 20) {

      if (that.data.nowPage >= (that.data.xinList.length - 1)) {
        wx.showToast({
          title: '最后一封信了喔,明天再来吧',
          icon: 'none'
        })
        return false;
      }
      that.setData({
        nowPage: that.data.nowPage + 1
      });
      this.checkPage(this.data.nowPage);
    }
    if (moveX < -20) {
      if (that.data.nowPage <= 0) {
        wx.showToast({
          title: '这是第一封信了喔',
          icon: 'none'
        })
        return false;
      }
      that.setData({
        nowPage: that.data.nowPage - 1
      });
      this.checkPage(this.data.nowPage);

      // wx.showToast({
      //  title: '不可以回退噢',
      //  icon:'none'
      // })
    }


  },
  // 页面判断逻辑,传入参数为当前是第几页 
  checkPage: function (index) {
    //信列表数据
    var data = this.data.xinList;
    var that = this;
    var m = 1;
    for (var i = 0; i < data.length; i++) {
      //先将所有的页面隐藏
      var disp = 'xinList[' + i + '].display';
      var sca = 'xinList[' + i + '].scale';
      var slateX = 'xinList[' + i + '].slateX';
      var zIndex = 'xinList[' + i + '].zIndex';
      var style = 'xinList[' + i + '].style';
      that.setData({
        [disp]: 0,
        [style]: "display:block",
      });
      //向左移动上一个页面
      if (i == (index - 1)) {
        that.setData({
          [slateX]: '-120%',
          [disp]: 1,
          [zIndex]: 2,

        });
      }
      //向右移动的最右边要display:none的页面
      if (i == (index + 3)) {
        that.setData({
          [style]: 'display:none',
          [slateX]: '0',
          [zIndex]: -10,
        });
      }
      if (i == index || (i > index && (i < index + 3))) {
        //显示最近的三封
        that.setData({
          [disp]: 1
        });
        //第一封信
        if (m == 1) {
          this.setData({
            [sca]: 1,
            [slateX]: 0,
            [zIndex]: 1,
          });
        }
        //第一封信
        else if (m == 2) {
          this.setData({
            [sca]: 0.8,
            [slateX]: '20px',
            [zIndex]: -1,
          });
        }
        //第三封信
        else if (m == 3) {
          this.setData({
            [sca]: 0.6,
            [slateX]: '40px',
            [zIndex]: -2,
          });
        }
        m++;
      }

    }
  }
})