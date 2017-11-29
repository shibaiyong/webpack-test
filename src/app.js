require('./assets/js/jquery-1.9.1.min.js')
require('./assets/js/scripts.js')

require("./assets/css/style.css")
require("./libs/btn.css")
require('./index.html')

require.ensure(['./js/splitting_code'], function(require){

var list = require('./js/splitting_code');

},'split');


import summ from './js/jstwo.js'
 
console.log(summ(5))

