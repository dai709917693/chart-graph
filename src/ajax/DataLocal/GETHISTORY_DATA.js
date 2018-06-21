export default {
  data: [{
    "id": 0,
    "name": "林则徐",
    "symbolSize": [60, 60],
    "category": 0
  }, {
    "id": 1,
    "name": "1839",
    "symbolSize": 40,
    "category": 1
  }, {
    "id": 2,
    "name": "《四洲志》",
    "category": 2
  },
  {
    "id": 3,
    "name": "太平天国",
    "category": 3
  },
  {
    "id": 4,
    "name": "1851",
    "category": 1
  },
  {
    "id": 5,
    "name": "洋务运动",
    "category": 3
  },{
    "id": 6,
    "name": "最早指导思想",
    "category": 2
  },{
    "id": 7,
    "name": "冯桂芬",
    "category": 0
  },{
    "id": 8,
    "name": "洋务派",
    "category": 2
  },{
    "id": 9,
    "name": "《劝学篇》",
    "category": 2
  },
  {
    "id": 10,
    "name": "张之洞",
    "category": 0
  },{
    "id": 11,
    "name": "1898",
    "category": 1
  }],
  links: [
    { source: 0, target: 2 },
    { source: 2, target: 1},
    { source: 3, target: 4},
    { source: 5, target: 6},
    { source: 6, target: 7},
    { source: 5, target: 8},
    { source: 8, target: 10},
    { source: 10, target: 9},
    { source: 9, target: 11}
  ]
}
