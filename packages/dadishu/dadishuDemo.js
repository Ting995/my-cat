Page({
  data: {
    score: 0,
    holes: [{
      active: false
    }, {
      active: false
    }, {
      active: false
    }, {
      active: false
    }, {
      active: false
    }, {
      active: false
    }, {
      active: false
    }, {
      active: false
    }, {
      active: false
    } ]
  },
  onLoad(options) {
    this.initHoles()
  },
  initHoles() {
    // let arr = [1, 2, 3, 4, 5, 6, 7, 0,8]
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort(() => Math.random() - 0.5)
    let blocks = []
    arr.forEach((i, idx) => {
      let x = idx % 3;
      let y = Math.floor(idx / 3);
      blocks.push({
        blockNum: arr[idx],
        isEmpty: arr[idx] == 0 ? true : false,
        value: arr[idx] === 0 ? '' : arr[idx], // 0 不显示
        x: x * 200, // left值
        y: y * 200 // top值
      });
    })
    this.setData({
      holes: blocks,
      
    });
  },
  start() {
    this.setData({
      'holes[5].active': true
    })
  },
  hit(){
    wx.showToast({
      title: '老登，别打我这个小可爱',
      icon:'none'
    })
  }

})