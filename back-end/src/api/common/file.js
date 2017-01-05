/**
 * Created by yyj on 29/12/2016.
 */
import path from 'path';
import fs from 'fs';

import utils from '../../utils'
import config from '../../config'

export default function (req, res, next) {
  let success_files = [];// 成功上传的文件
  let fail_files = [];// 上传失败文件

  req.busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    file.on('limit', () => {
      res.json({
        success: false,
        msg: `文件超出大小：${config.upload.file_limit}`
      });
    });
    let newFilename = `${utils.md5(filename,'hex')}_${new Date().getTime()}${path.extname(filename)}`;
    let filePath = path.join( path.join(process.cwd(), 'src', config.upload.url), newFilename);

    file.on('end', function () {
      success_files.push(newFilename);
    });
    file.on('error', () => {
      fail_files.push(newFilename);
    });

    file.pipe(fs.createWriteStream(filePath));
  });

  req.busboy.on('finish', () => {
    res.json({
      success: true,
      data: {
        success: success_files,
        fail: fail_files,
      },
      msg: '上传成功',
    });
  });

  return req.pipe(req.busboy);
}
