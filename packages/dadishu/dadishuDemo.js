Page({
  data: {
    holes: [],
    gameover: false, // 是否结束游戏,
    score: 0, // 得分
    countDown: 10, // 倒计时（s）
    timer: null,
    catNo: 0,  // 地鼠猫编号
    catNoList:[]  // 加分时查重（点击一个地鼠猫只能加一分）
  },
  onLoad() {
    this.initHoles()
  },
  initHoles() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    let holes = []
    arr.forEach((i, idx) => {
      let x = idx % 3;
      let y = Math.floor(idx / 3);
      holes.push({
        active: false,
        x: x * 200, // left值
        y: y * 200 // top值
      });
    })
    this.setData({
      holes: holes,
      gameover: false
    });
  },
  start() {
    if (this.data.gameover) return
    let holes = this.data.holes
    let index = this.getRandomHole()
    holes[index].active = true
    setTimeout(() => {
      holes[index].active = false
      this.start()
    }, 2000)
    this.setData({
      holes: holes,
      gameover: false
    })
    this.startCountDown()
  },
  // 获取随机位置
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
    // let catNo=this.data.catNo
    // let catNoList=this.data.catNoList
    holes[index].active = false
    // catNo++
    // catNoList.push(catNo)
    this.setData({
      holes: holes,
      // catNo: catNo,
      // catNoList:catNoList
    }) 
    if (!this.data.gameover) {
      this.setData({
        score: this.data.score += 1
      })
    }

  },
  // 游戏倒计时
  startCountDown() {
    // 启动倒计时
    this.setData({
      timer: setTimeout(() => {
        let countDown = this.data.countDown;
        if (countDown > 0) {
          countDown--;
          this.setData({
            countDown: countDown
          });
        } else {
          this.setData({
            gameover: true
          })
          clearInterval(this.data.timer);
          getApp().showToast(`游戏结束,您得了${this.data.score}分`)
        }
      }, 1000)
    });
  },
  onUnload: function () {
    // 页面卸载时清除定时器
    clearInterval(this.data.timer);
  },
  onShareAppMessage: function () {
    return {
      title: '一起来玩打地鼠~',
      path: '/packages/dadishu/dadishuDemo',
      imageUrl: '/static/image/logo.jpg'
    }
  },
})