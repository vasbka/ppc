<?php


namespace App\Controllers;


class Schedule
    extends \App\Controllers\BaseController
{
    public function getFullData()
    {
        $arr = array();
        $dataM = ($this->CONNECT->query("SELECT * FROM monday order by `group`")->fetchAll(\PDO::FETCH_ASSOC));
        $dataT = ($this->CONNECT->query("SELECT * FROM tuesday order by `group`")->fetchAll(\PDO::FETCH_ASSOC));
        $arr = array(
            0 => $dataM,
            1 => $dataT
        );
        return json_encode($arr);
    }
}