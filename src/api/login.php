<?php

    // 接收数据
    $username = isset($_POST["username"]) ? $_POST["username"] : '';
    $password = isset($_POST["password"]) ? $_POST["password"] : '';
    // echo $username;
    // echo $password;
    // 创建连接
    include('conn.php');
    // sql语句
    $sql = "SELECT * FROM t_user WHERE user_name = '$username' AND password = '$password'";
    $sql2 = "SELECT user_name FROM t_user WHERE tel = '$username' AND password = '$password'";
    // 执行SQL语句
    // echo $sql;
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    // var_dump($res);
    if($res->num_rows){
        echo $username;
    }else{
        if($res2->num_rows){
            $user = $res2->fetch_all()[0][0];
            echo $user;
        }else{
            echo 'no';
        }
    }

    // 释放
    $res->close();
    $conn->close();
?>