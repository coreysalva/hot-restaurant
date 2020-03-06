// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var waitingArray = require("./waitingArray");
var tableArray = require("./tableArray");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/api/reservations", function (req, res) {
        return res.json(tableArray);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(waitingArray);
    });

    app.get("/reservations", function (req, res) {
        res.sendFile(path.join(__dirname, "./reservations.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./index.html"));
    });
};
