const fs = require('fs')
const path = require('path')
const YAML = require('yaml')
const beautify = require("json-beautify")
const faModule = '@fortawesome/fontawesome-free'
const metaPath = path.dirname(require.resolve(`${faModule}${path.sep}package.json`)) + `${path.sep}metadata`
const groups = fs.readdirSync(metaPath).map(filename => path.basename(filename, path.extname(filename)))
let indexJs = ''
let indexMjs = ''

for (const group of groups) {
    const filename = require.resolve(`${metaPath}${path.sep}${group}.yml`)
    const file = fs.readFileSync(filename, 'utf8')
    const metaData = beautify(YAML.parseDocument(file).toJSON(), null, 2, 80)
    const js = `module.exports = ${metaData}\n`
    fs.writeFileSync(`data${path.sep}${group}.js`, js)
    indexJs += `module.exports.${group} = require('./${group}')\n`
    indexMjs += `export { default as ${group} } from './${group}.js'\n`
}

fs.writeFileSync(`data${path.sep}index.js`, indexJs)
fs.writeFileSync(`data${path.sep}index.mjs`, indexMjs)
