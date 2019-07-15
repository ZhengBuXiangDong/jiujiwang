<?php
    // 接收数据
    $num = isset($_POST["num"])?$_POST["num"]:'';
    $nowPage = isset($_POST["nowPage"])?$_POST["nowPage"]:'';
    $paixu = isset($_POST["paixu"])?$_POST["paixu"]:'';
    $condition = isset($_POST["condition"])?$_POST["condition"]:'';

    // 连接数据库
    include('conn.php');

    // 准备sql数据 
    $startNum = ($nowPage - 1) * $num;
    
    $sql1 = "SELECT * FROM t_book $condition ORDER BY $paixu LIMIT $startNum,$num;";  //一页的条数
    $sql2 = "select * from t_book $condition";  //获取符合要求的总项数

    // 执行SQL语句
    $res = $conn->query($sql1);
    $allNum = $conn->query($sql2);

    // 把结果用json数据的方式输送到前台
    $data = $res->fetch_all(MYSQLI_ASSOC);  //数据
    $rows = $allNum->num_rows;  //总条数

    $return = array(
        'data' => $data,//想要的一页数据
        'pages' => $rows,//总条数
    );

    // 以字符串的格式
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
    

    // 释放结果集
    $res->close();
    // 断开数据库连接
    $conn->close();

?>