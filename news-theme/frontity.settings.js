const fs  = require('fs');
const path = require('path');

let global_data = [];
let filenames = fs.readdirSync('./register-users/');

filenames.forEach(file => {
    if(path.extname(file) == '.json'){
        global_data.push(JSON.parse(fs.readFileSync('./register-users/' + file)));           
    }    
});
export default global_data;