// index.js
Page({
  data: {

  },
  onLoad() {},
  goDetail(e) {
    let type=e.target.dataset.type
    switch (type) {
      case 'huarongdao':
        wx.navigateTo({
          url: `/packages/pintu/pintuDemo`
        })
        break;
      case 'dadishu':
        wx.navigateTo({
          url: `/packages/dadishu/dadishuDemo`
        })
        break;

    }
  },
  onShareAppMessage: function () {
    return {
      title: '一起来玩啊~',
      path: '/pages/index/index',
      imageUrl: '/static/image/logo.jpg'
    }
  },
})