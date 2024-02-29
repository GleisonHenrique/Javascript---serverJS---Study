/*
- Arquivo principal da aplicação, um container que agrupará todos os módulos do sistema.
*/

process.title = 'MyWebServer';
var args = process.argv,
  port = args[2] || 7070,
  webServer = require('./server');

webServer.listen(port, function() {
    console.log('Server started at port ' + port);
});