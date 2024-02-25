async function getBoundingClientRect(selector, context) {
  return new Promise((resolve) => {
    context
      .createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        }
      });
  });
}

function pageScrollTo(scrollTop) {
  return wx.pageScrollTo({ scrollTop });
}

module.exports = {
  getBoundingClientRect,
  pageScrollTo
};
