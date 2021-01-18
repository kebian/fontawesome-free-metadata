# Metadata for Font Awesome Free
Upon install, this packages parses the YAML metadata from the @fortawesome/fontawesome-free package and creates JSON exports.

Example CommonJS usage:
```javascript
const { categories, icons, shims, sponsors } = require('@kebian/fontawesome-free-metadata')

const iconNames = Object.keys(icons)
for (const name of iconNames) {
    console.log(`${name}: ${icons[name].label}`)
}
```

Example ES6 usage:
```javascript
import { categories, icons, shims, sponsors } from '@kebian/fontawesome-free-metadata'

const iconNames = Object.keys(icons)
for (const name of iconNames) {
    console.log(`${name}: ${icons[name].label}`)
}
```
