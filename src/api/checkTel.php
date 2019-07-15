<?php
 
    // 接收数据
    $tel = isset($_POST["tel"]) ? $_POST["tel"] : '';
    // 创建连接
    include('conn.php');

    // sql语句
    $sql = "SELECT * from t_user WHERE tel = '$tel';";

    // echo $sql;
    // 执行SQL语句
    $res = $conn->query($sql);

    // var_dump($res);
    if($res->num_rows){
        // 已被注册
        echo 'no';
    }else{
        // 可以注册
        echo 'yes';
    }

    // 关闭连接
    $res->close();
    $conn->close();
?>