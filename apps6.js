const val = require(`validator`);

console.log(val.isEmail(`dhianpravio12@gmail.com`))
console.log(val.isDate(`2003-12-02`))
console.log(val.isMACAddress(`84-C5-A6-4F-F9-C6`))
console.log(val.isBoolean(`456564564`))