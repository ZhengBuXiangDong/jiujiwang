<?php
    $id = isset($_POST["id"]) ? $_POST["id"] : '';
    $option = isset($_POST["option"]) ? $_POST["option"] : '';

    // 连接数据库
    include('conn.php');
    if($option == 'plus'){
        // 加操作
        $sql = "UPDATE t_cart SET nums=nums+1 WHERE id = $id";
    }else if($option == 'reduce'){
        $sql = "UPDATE t_cart SET nums=nums-1 WHERE id = $id";
    }else if($option == 'del'){
        $sql = "DELETE FROM t_cart WHERE id = $id";
    }
    // echo $sql;
    // 执行SQL语句
    $res =$conn->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
    
    // $res->close();
    $conn->close();



?>