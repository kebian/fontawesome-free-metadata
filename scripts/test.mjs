import { icons } from '../index.mjs'

const iconNames = Object.keys(icons)
for (const name of iconNames) {
    console.log(`${name}: ${icons[name].label}`)
}