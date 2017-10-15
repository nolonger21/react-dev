<?php 
$link = mysqli_connect('localhost', 'root', '', 'root');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}else {
    if (isset($_POST['submit'])){
        if ($_POST['pw'] == $_POST['repw']){
    $query = "insert into user (name,pw) values('{$_POST['name']}','{$_POST['pw']}')";
    $result=mysqli_query($link, $query);
    header("Location:login.php");
        }else {
            echo "<script>alert('两次输入密码不一致！')</script>";
        }
    }
}
?>