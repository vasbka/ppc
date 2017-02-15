<?php

require_once '../../autoload.php';

$sched = new \App\Controllers\schedule();
if($sched->getFullData())
    echo $sched->getFullData();
else
    echo '123';