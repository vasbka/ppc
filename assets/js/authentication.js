function authentication()
{
    log = $('#login').val();
    pas = $('#password').val();
    $.ajax({
        type: "POST",
        url: "/assets/functions/authentication.php",
        data: {login:log,password:pas},
        success: function(result){
            if(!result)
                window.location.replace("http://ppc:81");
            else {
                if(document.getElementsByTagName('h1')[0])
                    document.getElementsByClassName('modal-header')[0].removeChild(document.getElementsByTagName('h1')[0])
                mes = document.createElement('h1');
                mes.textContent = result;
                document.getElementsByClassName('modal-header')[0].appendChild(mes);
            }
        }
    });
}
function getModal(){
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        authentication();
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


