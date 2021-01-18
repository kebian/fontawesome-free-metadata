const fs = require('fs')
const path = require('path')
const YAML = require('yaml')
const faModule = '@fortawesome/fontawesome-free'
const metaPath = path.dirname(require.resolve(`${faModule}${path.sep}package.json`)) + `${path.sep}metadata`
const groups = fs.readdirSync(metaPath).map(filename => path.basename(filename, path.extname(filename)))
let indexJs = ''
let indexMjs = ''

for (const group of groups) {
    const filename = require.resolve(`${metaPath}${path.sep}${group}.yml`)
    const file = fs.readFileSync(filename, 'utf8')
    const metaData = JSON.stringify(YAML.parseDocument(file).toJSON())
    const js = `const data = ${metaData}\nmodule.exports = data\n`
    fs.writeFileSync(`data${path.sep}${group}.js`, js)
    indexJs += `const ${group} = require('./${group}')\nmodule.exports.${group} = ${group}\n\n`
    indexMjs += `export { default as ${group}} from './${group}.js'\n`
}

fs.writeFileSync(`data${path.sep}index.js`, indexJs)
fs.writeFileSync(`data${path.sep}index.mjs`, indexMjs)
