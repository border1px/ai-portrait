const utils = require('../../utils/utils');

Page({
  data: {
    currentTab: 0,
    currentItem: 0,
    itemDesc: '',
    tabs: [
      { 
        id:1,
        title: `推荐`, 
        subTitle: "Recommend",
        items: [
          {
            id: 100,
            code: 'A100',
            image_url: '../../images/iids/iid-1.jpg',
            title: '推荐综合模型-写鸭MTVG8-01',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          },
          {
            id: 101,
            code: 'A101',
            image_url: '../../images/iids/iid-2.jpg',
            title: '推荐综合模型-写鸭MTVG8-02',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          },
          {
            id: 102,
            code: 'A102',
            image_url: '../../images/iids/iid-3.jpg',
            title: '推荐综合模型-写鸭MTVG8-03',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          }
        ]
      },
      { 
        id:2,
        title: `时尚`, 
        subTitle: "Fashion",
        items: [
          {
            id: 100,
            code: 'A100',
            image_url: '../../images/iids/iid-4.jpg',
            title: '时尚综合模型-写鸭MTVG8-01',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          },
          {
            id: 101,
            code: 'A101',
            image_url: '../../images/iids/iid-5.jpg',
            title: '时尚综合模型-写鸭MTVG8-02',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          },
          {
            id: 102,
            code: 'A102',
            image_url: '../../images/iids/iid-6.jpg',
            title: '时尚综合模型-写鸭MTVG8-03',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          }
        ]
      },
      { id:3, title: `民族`, subTitle: "Fashion",
        items: [
          {
            id: 102,
            code: 'A102',
            image_url: '../../images/iids/iid-6.jpg',
            title: '时尚综合模型-写鸭MTVG8-03',
            desc: '',
            sort: 0,
            is_new: true,
            active: false
          }
        ]
      },
      { id:4, title: `自定义`, subTitle: "Custom" }
    ],
  },
  onItemChange(e) {
    const { tindex, index } = e.currentTarget.dataset;
    const desc = this.data.tabs[tindex].items[index].title;
    this.setData({ 
      currentItem: index,
      itemDesc: desc
      // `tabs[${tindex}].items[$index]`: true
    })
  },
  onSwipeChange(e) {
    this.setData({ currentTab: e.detail.current })
  },
  onStyleTabChange(e) {
    this.setData({ currentTab: e.detail });
  },
  async onTabChange(currentTab) {
    this.setData({ currentTab: currentTab.detail });
    utils.pageScrollTo(Math.min(this.tabsTop, this.pageScrollTop));
  },
  onPageScroll(e) {
    this.pageScrollTop = e.scrollTop;
  },
  async onReady() {
    this.tabsTop = (await utils.getBoundingClientRect('.tabs', this)).top;
  },
  onLoad() {
    console.log('onLoad')
  },
});
