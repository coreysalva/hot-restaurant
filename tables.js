function runTable() {

    var currentURL = window.location.origin;


    $.ajax({ url: currentURL + "/api/", method: "GET" })
        .done(function (tableData) {

            console.log("URL: " + currentURL + " ");

            console.log(tableData);

            for (var i = 0; i < tableData.length; i++) {

                var tableSection = $("<div>");
                tableSection.addClass('well');
                tableSection.attr('id', 'tableWell-' + i + 1)
                $('#tableSection').append(tableSection);

                var tableNumber = i + 1;

                $("#tableWell-" + i + 1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
            }
        });
}

function runWaitList() {

    $.ajax({ url: currentURL + "/api/waitlist", method: "GET" })
        .done(function (waitlistData) {

            console.log(waitlistData);

            for (var i = 0; i < waitlistData.length; i++) {

                var waitlistSection = $("<div>");
                waitlistSection.addClass('well');
                waitlistSection.attr('id', 'waitlistWell-' + i + 1)
                $('#waitlistSection').append(waitlistSection);

                var tableNumber = i + 1;

                $("#waitlistWell-" + i + 1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
            }
        });
}

function clearTable() {

    var currentURL = window.location.origin;
    $.ajax({ url: currentURL + "/api/clear", method: "POST" })

}

$("#clear").on('click', function () {
    alert("Clearing...");
    clearTable();

    location.reload();
})

runTable();
runWaitList();
