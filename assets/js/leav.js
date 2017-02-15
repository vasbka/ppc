function leav()
{
    $.ajax({
        type: "POST",
        url: "/assets/functions/leav.php",
        success: function(result){
            window.location.replace("http://ppc:81");
        }
    });
}