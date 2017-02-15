<?php
require_once '../../autoload.php';

$e = new \App\Controllers\Users();
echo $e->authentication($_POST[login],$_POST[password]);

