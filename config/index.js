const path = require('path')

exports.dataDir = {
  // The source data
  source: path.join(__dirname, '../data/source'),
  // Generated data
  generated: path.join(__dirname, '../data/generated'),
}

exports.rootDir = path.join(__dirname, '../')