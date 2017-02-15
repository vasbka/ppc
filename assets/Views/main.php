<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/assets/css/main.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>PPC</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="assets/js/authentication.js"></script>
</head>
<body>
    <div id="content">
        <div class="form-style-5">
            <fieldset>
                <legend>Заповніть поля</legend>
                <input type="text" id="login" placeholder="Логін *">
                <input type="password" id="password" placeholder="Пароль *">
                <input type="submit" onclick="getModal()" value="Ввійти" id="myBtn">
                <input type="submit" onclick="" value="Відновити пароль" >

                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close">&times;</span>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</body>
</html>