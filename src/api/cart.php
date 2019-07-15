<?php
    // 接收数据
    $username = isset($_POST["username"])?$_POST["username"]:'';
    // 连接数据库
    include('conn.php');
    // 获取id
    $sql1 = "SELECT id from t_user where user_name = '$username'";
    $res1 = $conn->query($sql1);
    $row = $res1->fetch_all()[0][0];

    // 创建SQL语句
    $sql = "SELECT * FROM t_cart where uid = $row ORDER BY add_time DESC";

    // 执行SQL语句
    $res = $conn->query($sql);

    // 以json数据的形式返回结果给前端
    $row1 = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    echo json_encode($row1);

    // 释放结果集并断开数据库连接
    $res->close();
    $conn->close();


?>