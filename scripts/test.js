const { icons } = require('../index.js')

const iconNames = Object.keys(icons)
for (const name of iconNames) {
    console.log(`${name}: ${icons[name].label}`)
}
