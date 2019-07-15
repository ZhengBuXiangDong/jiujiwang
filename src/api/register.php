<?php
    // 接收数据
    $usernamer=isset($_POST['username']) ? $_POST['username'] : '';
    $pw=isset($_POST['password']) ? $_POST['password'] : '';
    $tel=isset($_POST['tel']) ? $_POST['tel'] : '';
    $email=isset($_POST['email']) ? $_POST['email'] : '';

    // echo $usernamer;
    // echo $pw;

    // 创建连接
    include('conn.php');

    // sql语句
    $sql = "INSERT INTO t_user(user_name,password,tel,email) VALUES('$usernamer','$pw','$tel','$email')";

    // 执行SQL语句
    $res = $conn->query($sql);

    if( $res > 0 ){
        echo 'ok';
    }
?>