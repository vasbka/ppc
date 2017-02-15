<?php

namespace App\Classes;


abstract class DB
{
    static function getConnection()
    {
        $conn = new \PDO('mysql:host=localhost;dbname=ppc', 'root', '');
        return $conn;
    }
}