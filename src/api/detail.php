<?php
    // 获取id值
    $id = isset($_GET["id"])?$_GET["id"]:'';
    // echo $id;

    // 连接数据库
    include('conn.php');

    // 创建SQL语句
    $sql = "SELECT * FROM product WHERE id=$id";

    // 执行SQL语句
    $res = $conn->query($sql);

    // 以json数据的形式返回结果给前端
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    echo json_encode($row);

    // 释放结果集并断开数据库连接
    $res->close();
    $conn->close();


?>