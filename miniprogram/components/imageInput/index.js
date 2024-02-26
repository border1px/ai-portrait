Component({
  data: {
    images: [],
    holder: ''
  },
  methods: {
    chooseImage() {
      const that = this;
      // this.triggerEvent('chooseImage')
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: (res) => {
          let path = res.tempFiles[0].tempFilePath;
          

          wx.cropImage({
            src: path, // 图片路径
            cropScale: '3:4', // 裁剪比例
            complete(res) {
              if (res) {
                wx.getImageInfo({
                  src: res.tempFilePath,
                  complete(res) {
                    console.log(res.path)
                    that.setData({ images: [res.path] })
                  }
                });
              }
            }
          })
        }
      })
    }
  }
})