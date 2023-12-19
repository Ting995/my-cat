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
  onLoad() {
    this.initHoles()
  },
  initHoles() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    let blocks = []
    arr.forEach((i, idx) => {
      let x = idx % 3;
      let y = Math.floor(idx / 3);
      blocks.push({
        x: x * 200, // left值
        y: y * 200 // top值
      });
    })
    this.setData({
      holes: blocks
    });
  },
  start() {
    this.setData({
      'holes[5].active': true
    })
  },
  hit(){
    getApp().showToast('老登，别打我这个小可爱')
  }

})