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
    }],
    gameover: false, // 是否结束游戏,
    score:0,
    countDown:30
  },
  countDownInterval:null,
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
        active: false,
        x: x * 200, // left值
        y: y * 200 // top值
      });
    })
    this.setData({
      holes: blocks,
      gameover:false
    });
  },
  start() {
    let holes = this.data.holes
    let index = this.getRandomHole()
    holes[index].active = true
    if(this.data.gameover) return 
    setTimeout(() => {
      holes[index].active = false
      this.start()
    }, 1000)
    this.setData({
      holes: holes,
      gameover:false
    })
    this.startCountDown()
  },
  // 获取地鼠洞得位置
  getRandomHole() {
    let index = Math.floor(Math.random() * this.data.holes.length);
    let hole = this.data.holes[index];
    if (hole.active) {
      return this.getRandomHole();
    }
    return index;
  },
  // 击打操作
  hit(e) {
    let {
      index
    } = e.currentTarget.dataset
    const holes = this.data.holes
    holes[index].active = false
    this.setData({
      holes: holes,
      score:this.data.score+=1
    })
  },
  // 游戏倒计时
  startCountDown() {
    this.countDownInterval = setInterval(() => {
      if (this.data.countDown <= 0) {
        clearInterval(this.countDownInterval);
        this.setData({
          gameover:true,
        })
        // getApp().showToast(`游戏结束，您的得分是${this.data.score}分`)
        // 需要执行的操作
        return;
      }
      this.setData({ countDown: this.data.countDown - 1 });
    }, 1000);
  }
})