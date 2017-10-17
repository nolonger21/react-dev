<meta charset=utf-8>
<?php

    if (isset($_POST['submit'])){
        include('connect.php'); //链接数据库
        $tel = $_POST['tel'];
        $pw = hash('md5',$_POST['pw']);
        if($tel == ''|| $pw == ''){
            echo '错误！用户名密码不能为空!';
        }
        $sql = "SELECT * FROM user WHERE tel = '$tel' AND pw='$pw'";
        $result = $conn->query($sql)->rowCount();
            
        if($result){
            echo '登录成功！';
        }else{
            echo '登录失败！';
        }
        $conn = null;
    }