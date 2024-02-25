Component({
  data: {
    images: [],
    holder: ''
  },
  methods: {
    chooseImage() {
      // this.triggerEvent('chooseImage')
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: (res) => {
          let path = res.tempFiles[0].tempFilePath;
          this.setData({ images: [path] })
        }
      })
    }
  }
})