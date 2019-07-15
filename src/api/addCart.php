<?php
// 接收数据
$username = isset($_POST["username"]) ? $_POST["username"] : '';
$goodid = isset($_POST["goodid"]) ? $_POST["goodid"] : '';
// echo $username,$goodid;
// 连接数据库
include('conn.php');

$str = "WHERE gid = $goodid and uid = (SELECT id from t_user where user_name = '$username')";

// 查询购物车中是否存在该表
$sql = "SELECT * from t_cart $str";

// 执行SQL语句
$res = $conn->query($sql);

if($res->num_rows){
    // 存在，改变nums的值
    $update = "UPDATE t_cart SET nums=nums+1 $str";
    $updateRes = $conn->query($update);
    if($updateRes ){
        // 增加成功
        echo 'ok';
    }else{
        echo 'error';
    }   
}else{
    // 不存在，插入数据
    // 获取uid
    $sql1 = "SELECT id from t_user where user_name = '$username'";
    $res1 = $conn->query($sql1);
    $row = $res1->fetch_all()[0][0];
    // echo $row;
    $insert = "INSERT INTO t_cart(uid,gid,nums) VALUES($row,$goodid,1)";
    $insertRes = $conn->query($insert);
    if($insertRes ){
        // 增加成功
        echo 'ok';
    }else{
        echo 'error';
    }
}

// 释放结果集并断开数据库连接
$res->close();
$conn->close();


?>