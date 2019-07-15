<?php
    // 接收数据
    $num = isset($_GET["num"])?$_GET["num"]:'10';

    // 连接数据库
    include('conn.php');

    // 准备sql数据 
    $sql = "SELECT * FROM goodlist order by id LIMIT 0,$num;";  //一页的条数


    // 执行SQL语句
    $res = $conn->query($sql);

    // 把结果用json数据的方式输送到前台
    $data = $res->fetch_all(MYSQLI_ASSOC);  //数据

    // 以字符串的格式
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    

    // 释放结果集
    $res->close();
    // 断开数据库连接
    $conn->close();

?>