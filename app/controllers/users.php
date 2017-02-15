<?php

namespace App\Controllers;

class Users
    extends \App\Controllers\BaseController
{
    public function authentication($login,$password)
    {
        $query = $this->CONNECT->query("SELECT * FROM users WHERE login = '$login' AND password = '$password'")->Fetch(\PDO::FETCH_ASSOC);
        if(!empty($query))
        {
            session_set_cookie_params(0);
            session_start();
            foreach($query as $key => $value)
                $_SESSION[$key] = $value;
        }
        else
            echo 'Дані введено не вірно!';
    }
    public function getGuestPage()
    {
        $this->view->display('main');
    }
    public function leav()
    {
        session_start();
        session_unset();
        session_destroy();
    }
    public function getDataDay($param)
    {
        $rez = array();
        $rez[0] = ($this->CONNECT->query("SELECT * FROM monday"));//->fetchAll(\PDO::FETCH_ASSOC));
        $rez[1] = ($this->CONNECT->query("SELECT * FROM tuesday"));//->fetchAll(\PDO::FETCH_ASSOC));
        return $rez;
        //rez;
        //$this->CONNECT->query("SELECT * FROM monday")->fetchAll(\PDO::FETCH_ASSOC);
        //return $this->CONNECT->query('SELECT * FROM monday,tuesday')->fetchAll(\PDO::FETCH_ASSOC);
    }
    
}