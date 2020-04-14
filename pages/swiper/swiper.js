
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      'http://img3.imgtn.bdimg.com/it/u=3316485073,630900464&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=2314820178,3452136489&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=2991531978,3933259188&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=1742886454,2307269776&fm=26&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=2259614868,961155351&fm=26&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=1174877039,3996857209&fm=26&gp=0.jpg' 
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动播放
    interval: 3000, //停留时间间隔
    duration: 1000, //播放时长
    previousMargin: '50px', //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: '50px', //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    circular: false, //是否采用衔接滑动
    currentSwiperIndex: 0, //swiper当前索引
  },
 
  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current
    })
  },
})