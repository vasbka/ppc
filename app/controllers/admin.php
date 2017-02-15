<?php

namespace App\Controllers;

use App\Classes\DB;

class Admin
    extends \App\Controllers\BaseController
{
    public function leav()
    {
        session_start();
        session_unset();
        session_destroy();
    }
    public function plans($day)
    {
        if(!$day)
            $day = 'monday';
        if($this->CONNECT->query("SELECT * FROM {$day}")) {
            $data = $this->CONNECT->query("SELECT * FROM {$day}")->fetchAll(\PDO::FETCH_ASSOC);
            $this->view->display('AdminSchedule', $data);
        }else
            $this->view->display('menu');
    }
    public function changes()
    {
        $this->CONNECT = DB::getConnection();
        //$data = $CONNECT->query("SELECT * FROM monday")->fetchAll(\PDO::FETCH_ASSOC);
        $this->view->display('AdminMenu');
    }

}