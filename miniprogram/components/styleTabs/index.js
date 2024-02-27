// components/style-tabs/index.js
Component({
  properties: {
    tabs: Array
  },
  data: {
    tabIndex: 0,
    itemIndex: 0,
    itemDesc: '',
  },
  methods: {
    onItemChange(e) {
      const { tindex, index } = e.currentTarget.dataset;
      const desc = this.data.tabs[tindex].items[index].title;
      this.setData({ 
        itemIndex: index,
        itemDesc: desc
      })
    },
    onTabChange(e) {
      let { index } = e.currentTarget.dataset
      this.setData({ tabIndex: index })
      this.triggerEvent('change', this.data.tabIndex)
    }
  }
})