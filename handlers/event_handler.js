const fs = require('../');

module.exports = (client) =>{

    const event_files = fs.readdirSync(`../events`).filter(file => file.endsWith('.js'));

    for(const file of event_files){
      const events = require(`../events/${file}`);
      const event_name = file.split('.')[0];
      client.on(event_name, events.bind(null, client));
    }
}