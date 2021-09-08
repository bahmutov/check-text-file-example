// @ts-check
const micro = require('micro')
const path = require('path')
const fs = require('fs')

const filename = path.join(__dirname, 'plain.txt')
const text = fs.readFileSync(filename, 'utf8')

module.exports = async function (req, res) {
  try {
    micro.send(res, 200, text)
  } catch (e) {
    console.error(e)
    micro.send(res, 500, { message: e.message })
  }
}
