<meta charset=utf-8>
<?php

    if (isset($_POST['submit'])){
			include('connect.php'); //链接数据库
			$name = $_POST['name'];
			$tel = $_POST['tel'];
			$pw = hash('md5',$_POST['pw']);

			$sql = "INSERT INTO user VALUES (id,'$name','$tel','$pw')";

			$conn->exec($sql);  
			if (!$conn){
				die('Error: ' . mysql_error());//如果sql执行失败输出错误
			}else{
				echo "注册成功";//成功输出注册成功
			}
			$conn = null;
    }