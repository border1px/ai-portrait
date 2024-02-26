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
      console.log(e.currentTarget.dataset)
      let { index } = e.currentTarget.dataset
    }
  }
})