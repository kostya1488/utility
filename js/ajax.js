$(document).ready(function() {
    $("#ajax_form").submit(
        function() {
            sendAjaxForm('ajax_form', 'php/formhandler.php');
            return false;
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
            alert("Well done");
        },
        error: function(response) {
            alert("error");

        }
    });

}