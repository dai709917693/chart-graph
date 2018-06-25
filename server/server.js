const express = require('express')
const fs = require('fs')
const path = require('path')
module.exports = function(app) {
  //app.use(express.bodyParser());
  app.use(express.json());
  app.use(express.urlencoded());
  //app.use(express.multipart());
  app.get('/getHistory.dox', (req, res) => {
    let data = fs.readFileSync(path.resolve(__dirname, 'data/GETHISTORY_DATA.json'), { encoding: 'utf8' })
    res.json(JSON.parse(data))
  })
  app.get('/getHistoryTree.dox', (req, res) => {
    let data = fs.readFileSync(path.resolve(__dirname, 'data/GETHISTORYTREE_DATA.json'), { encoding: 'utf8' })
    res.json(JSON.parse(data))
  })
  app.post('/editHistory.dox', (req, res) => {
    let source = JSON.parse(req.body.source);
    let target = JSON.parse(req.body.target);
    let historyPath = path.resolve(__dirname, 'data/GETHISTORY_DATA.json');
    let data = JSON.parse(fs.readFileSync(historyPath, { encoding: 'utf8' }))
    source.name && (data.data[source.name] = { name: source.name, category: source.category })
    target.forEach((v) => {
      if (v.name) {
        data.data[v.name] = { name: v.name, category: v.category }
        source.name && (data.links[`${source.name}&${v.name}`] = { source: source.name, target: v.name, close: source.category == 4 || v.category == 4 })
      }
    })
    fs.writeFileSync(historyPath, JSON.stringify(data))
    res.json({
      result_code: true
    })
  })
  app.post('/editHistoryTree.dox', (req, res) => {
    let source = JSON.parse(req.body.source);
    let target = JSON.parse(req.body.target);
    let historyPath = path.resolve(__dirname, 'data/GETHISTORYTREE_DATA.json');
    let data = JSON.parse(fs.readFileSync(historyPath, { encoding: 'utf8' }))
    let dataTem = data.data;
    source.forEach((v, i) => {
      if (i == 0) {
        dataTem = dataTem[v]
      } else {
        dataTem = dataTem.children[v]
      }
    });
    typeof dataTem == 'object' && !dataTem.children && (dataTem.children = []);
    target.forEach((v) => {
      let dI = dataTem.children.length
      dataTem.children.push({ name: v, label: v, value: dI })
    })
    fs.writeFileSync(historyPath, JSON.stringify(data))
    res.json({
      result_code: true
    })
  })
}
