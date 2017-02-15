<?php

namespace App\Controllers;

class BaseController
{
    protected $view,$CONNECT;
    public function __construct()
    {
        $this->view = new \App\Classes\View;
        $this->CONNECT = \App\Classes\DB::getConnection();
    }
}