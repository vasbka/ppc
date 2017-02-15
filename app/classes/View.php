<?php

namespace App\Classes;

class View
{
    private $data;
    public function display($page,$data =[])
    {
        extract($data,EXTR_OVERWRITE);
        require_once(__DIR__.'/../../Assets/Views/'.$page.'.php');
    }
}