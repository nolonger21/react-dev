<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
     
    $conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);
    $conn->query('set names utf8');
    if(!$conn){
        die("can't connect".mysql_error());//如果链接失败输出错误
    }

