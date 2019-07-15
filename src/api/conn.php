<?php
    // 连接数据库
    $serverName = 'localhost';   //服务名
    $userName = 'root';  //用户名
    $passWord = '';  //密码
    $dbName = 't_jiuji';  //数据库名

    // 创建连接
    $conn = new mysqli($serverName,$userName,$passWord,$dbName);

    // 测试连接
    if($conn->connect_error) {
        die('连接错误：'.$conn->connect_error);
    }
?>