<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/assets/css/AdminSchedule.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/table/component.css" />

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>PPC</title>


<!--    script for dropdown menu-->
    <link href="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.min.css"
          rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <link href="http://cdn.rawgit.com/davidstutz/bootstrap-multiselect/master/dist/css/bootstrap-multiselect.css"
          rel="stylesheet" type="text/css" />
    <script src="http://cdn.rawgit.com/davidstutz/bootstrap-multiselect/master/dist/js/bootstrap-multiselect.js"
            type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $('#lstFruits').multiselect({
                includeSelectAllOption: true
            });
        });
    </script>
<!--    end script for dropdown menu-->

</head>
<body>
    <div class="menu">
        <ul>
            <li><a class="active" href="/Changes">Зміни</a></li>
            <li><a href="/plans" onclick="javascript:getDay('monday')">Розклад</a></li>
            <li><a href="javascript:leav()">Exit</a></li>
        </ul>
    </div>
    <div class="menuInSchedule">
        <ul>
            <select id="lstFruits" multiple="multiple">
                <option value="1">Понеділок</option>
                <option value="2">Вівторок</option>
                <option value="3">Середа</option>
                <option value="4">Четвер</option>
                <option value="5">П’ятниця</option>
                <option value="6">Субота</option>
            </select>
            <input type="text" placeholder="Введіть групи">
        </ul>
    </div>

    <div class="container">
        <div class="component">
            <table class="overflow-y">
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
    </div><!-- /container -->
</body>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js"></script>

<script src="/assets/js/getDataDay.js"></script>
<script src="/assets/js/leav.js"></script>
<script src="/assets/js/jquery.stickyheader.js"></script>

</html>