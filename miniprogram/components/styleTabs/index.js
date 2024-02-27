// components/style-tabs/index.js
Component({
  properties: {
    tabs: Array
  },
  data: {
    tabIndex: 0
  },
  methods: {
    onTabChange(e) {
      let { index } = e.currentTarget.dataset
      this.setData({ tabIndex: index })
      this.triggerEvent('change', this.data.tabIndex)
    }
  }
})