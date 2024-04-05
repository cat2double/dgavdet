const express = require("express");

class WebSite {
    constructor() {

    }
    static Start() {
        const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render Dgavdet!</title>
  </head>
  <body>
    <section>
      Hello from Render Dgavdet!!
    </section>
  </body>
</html>`
      
        const app = express();
        const port = process.env.PORT || 3001;

        app.get("/", (req, res) => res.type('html').send(html));

        const server = app.listen(port, () => console.log(`Dgavdet listening on port ${port}!`));

        server.keepAliveTimeout = 120 * 1000;
        server.headersTimeout = 120 * 1000;

        
    }
}

module.exports = {
    WebSite
}
