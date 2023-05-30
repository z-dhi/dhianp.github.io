const fs = require(`fs`)

fs.writeFileSync("test1.txt", 'Hello... saya belajar nodejs')
fs.appendFileSync("test1.txt", '  Ini adalah append file')