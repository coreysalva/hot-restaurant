$(".submit").on("click", function () {
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNumber: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_email').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };

    console.log(newReservation);

    $.post(currentURL + "/api/tables", newReservation,
        function (data) {

            if (data == true) {
                alert("Get ready to eat, you're booked!")
            }

            if (data == false) {
                alert("Unfortunately, we're all booked up so you will now automatically join our wait list.")
            }

            $('#reserve_name').val("");
            $('#reserve_phone').val("");
            $('#reserve_email').val("");
            $('#reserve_uniqueID').val("");

        });

    return false;

});
