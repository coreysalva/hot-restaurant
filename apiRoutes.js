// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var waitingArray = require("./waitinglistData");
var tableArray = require("./tableData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------



    app.get("/api/waitlist", function (req, res) {
        return res.json(waitingArray);
    });

    app.get("/api/reservations", function (req, res) {
        return res.json(tableArray);
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./index.html"));
    });


    //HTML POST Requests

    app.post("/api/reservations", function (req, res) {
        var newRes = req.body;
        if (tableArray.length === 5) {
            waitingArray.push(newRes);
            newRes.hasReservation = false;
        }
        else {
            tableArray.push(newRes);
            newRes.hasReservation = true;
        }

        res.json(newRes);

    });
};


