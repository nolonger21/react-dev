<meta charset=utf-8>
<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";



    if (isset($_POST['submit'])){
        
			$link = new PDO("mysql:host=$servername;dbname=test", $username, $password);

			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$sql = "insert into user (name,pw) values('{$_POST['name']}','{$_POST['pw']}')";

			$conn->exec($sql);
            echo "注册成功";

    }

$conn = null;
?> 