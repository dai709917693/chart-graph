const fs = require('fs');
const path = require('path');
const url = require('url');
const requestItem = require('./requestItem.js');
const requestName = 'request';
module.exports = (data, folderAdd) => {
  let reqContent = `import ${requestName} from '@/modules/${requestName}';\n`;
  data.forEach((value) => {
    let ajaxName;
    if (value.name) {
      ajaxName = value.name
    } else {
      let urlPath = url.parse(value.url).pathname;
      ajaxName = path.parse(urlPath).name.toLocaleUpperCase();
    };
    !value.method && (value.method = 'get');
    reqContent += requestItem(ajaxName, value)
  });
  let reqAdd = path.resolve(folderAdd, 'request.js');
  !fs.existsSync(reqAdd) && fs.writeFileSync(reqAdd, reqContent);
}
