<?php

namespace App\Router;

use App\Controllers\Users;

class Router
{

    private $uri=array();

    public function __construct()
    {
        $this->uri=explode('/',$_SERVER['REQUEST_URI']);
    }
    private function URLisCorrect()
    {
//        if(empty($controller))
//            throw new \Exception('Controller is empty');
//
//        if(!class_exists($this->controlFull,false))
//            throw new \Exception('Controller not found');
//
//        $this->actions='action'.$action;
//        if(!method_exists($this->controlFull,$this->actions)){
//            throw new \Exception('Method not found');
//        }
    }
    public function redirect()
    {
        session_start();
        if(!isset($_SESSION['id']))
        {
            (new \App\Classes\View)->display('main');
        }else if($_SESSION['id']==1)
        {
            $adm = new \App\Controllers\Admin();
            if($this->uri[1])
            {
                if(method_exists($adm,$this->uri[1]))
                {
                    $action = $this->uri[1];
                    $adm->$action('');
                }
            }
            else
                (new \App\Classes\View)->display('AdminMenu');
        }else
            (new \App\Classes\View)->display('menu');


    }
}