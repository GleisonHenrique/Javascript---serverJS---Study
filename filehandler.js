/*
     Módulo que será utilizado pelo server.js e é responsável por manipular os arquivos solicitados pelo usuário;
*/

var fs = require('fs');

module.exports = function(filename, successFn, errorFn) {
   fs.readFile(filename, function(err, data) {
       if(err) {
            errorFn(err);
       } else {
            successFn(data);
       }
   });
};