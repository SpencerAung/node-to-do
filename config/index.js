var config = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${ config.uname }:${ config.pwd }@localhost:27017/nodetodo`;
    }
}