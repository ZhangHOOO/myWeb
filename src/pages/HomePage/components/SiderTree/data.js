const data = [
  {
    title: "前端框架",
    children: [
      {
        title: "vue",
        url: "https://cn.vuejs.org/v2/guide/index.html",
      },
      {
        title: "react",
        url: "https://zh-hans.reactjs.org/",
      },
      // {
      //   title: "B站",
      //   url: "https://www.bilibili.com/",
      // },
    ],
  },
  {
    title: "UI组件库",
    children: [
      {
        title: "antd",
        url: "https://ant.design/components/overview-cn/",
      },
      {
        title: "element",
        url: "https://element.eleme.cn/#/zh-CN/component/installation",
      },
    ],
  },
  {
    title: "数据持久化",
    children: [
      {
        title: "mobx",
        url: "https://cn.mobx.js.org/",
      },
      {
        title: "vue-router",
        url: "https://router.vuejs.org/zh/installation.html",
      },
    ],
  },
  {
    title: "打包工具",
    children: [
      {
        title: "webpack",
        url: "https://webpack.docschina.org/concepts/",
      },
    ],
  },
  {
    title: "node",
    url: "https://nodejs.org/zh-cn/docs/guides/",
  },
  {
    title: "node框架",
    children: [
      {
        title: "express",
        url: "https://expressjs.com/zh-cn/starter/installing.html",
      },
    ],
  },
];

const loop = (data) => {
  data.map((item) => {
    item.key = item.title;
    if (item.children) {
      return {
        title: item.title,
        key: item.key,
        children: loop(item.children),
        url: item.url,
      };
    }
    return {
      title: item.title,
      key: item.key,
      url: item.url,
    };
  });

  if (data) {
  }
};

const finalData = loop(data);

export default data;
