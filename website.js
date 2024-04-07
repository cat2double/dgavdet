const express = require("express");
const { Global } = require("./global.js");
class WebSite {
    constructor() {
    }
    static Start() {
        const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Glitch Dgavdet!</title>
  </head>
  <body>
    <section>
      Hello from Glitch Dgavdet!!
    </section>
  </body>
</html>`
        const app = express();
        global.port = process.env.PORT || 3001;

        app.get("/", (req, res) => res.type('html').send(html));

        const server = app.listen(global.port, () => console.log(`Dgavdet listening on port ${global.port}!`));

        server.keepAliveTimeout = 120 * 1000;
        server.headersTimeout = 120 * 1000;

        
    }
}

module.exports = {
    WebSite
}
