const fs = require('fs')
const path = require('path')
const dataPath = path.join(path.dirname(module.filename), '../data')

for (const filename of fs.readdirSync(dataPath)) {
    if (filename.endsWith('.js') || filename.endsWith('mjs'))  {
        fs.unlinkSync(path.join(dataPath, filename))
    }
}

console.log(dataPath)