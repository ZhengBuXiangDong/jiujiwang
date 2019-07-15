(function () {
    // 渲染数据
    let username = $.cookie('username');
    // 判断是否是登录状态
    if (username) {
        // 登录状态，从数据表中拿数据
        $.ajax({
            type: 'post',
            url: '../api/cart.php',
            data: {
                'username': username
            },
            success: function (str) {
                // console.log(str);
                let objCart = JSON.parse(str);
                $('.order_content').html('');
                // console.log(objCart);
                let j = 0;
                objCart.forEach(function (item) {
                    j = j + (item.nums - 1);
                    $.ajax({
                        'type': 'get',
                        'url': '../api/detail.php',
                        'data': {
                            id: item.gid
                        },
                        success: function (str) {
                            // console.log(str);
                            let obj = JSON.parse(str)[0];
                            // console.log(obj);
                            let html = `<ul class="order_lists" data-id="${item.id}" data-num="${obj.inventory}">
                                <li class="list_chk">
                                    <input type="checkbox"  class="son_check">
                                    <label></label>
                                </li>
                                <li class="list_con">
                                    <div class="list_img"><a href="javascript:;"><img src="../img/${obj.titlePic}.jpg"
                                                alt=""></a></div>
                                    <div class="list_text"><a href="javascript:;">${obj.all_name}</a>
                                        <p><i class="fuwu"></i>选服务</p>
                                    </div>
                                    <br>
                                </li>
                                <li class="list_price">
                                    <p class="price">${obj.price}</p>
                                </li>
                                <li class="list_youhui">
                                    <p class="youhui">0.00</p>
                                </li>
                                <li class="list_amount">
                                    <div class="amount_box">
                                        <a href="javascript:;" class="reduce reSty">-</a>
                                        <input type="text" value="${item.nums}" class="sum">
                                        <a href="javascript:;" class="plus">+</a>
                                    </div>
                                </li>
                                <li class="list_sum">
                                    <p class="sum_price">${obj.price*item.nums}.00</p>
                                </li>
                                <li class="list_op">
                                    <p class="del">
                                        <a href="javascript:;" class="shoucang">移入收藏夹</a>
                                        <a href="javascript:;" class="delBtn">删除</a>
                                    </p>
                                </li>
                            </ul>`;
                            $('.order_content').html($('.order_content').html() + html);
                        }
                    });
                    j++;
                });
                $('#allpro').html(j);

            }
        });

    } else {
        //游客状态，从cookie中读取
        let gids = $.cookie('gid').split('&'); //["5", "5", "4", "2", "1", "1", "1"]
        // 转成数组
        let newObj = {}; //{1: 3, 2: 1, 4: 1, 5: 2}
        gids.forEach(function (item) {
            if (newObj[item]) {
                newObj[item]++;
            } else {
                newObj[item] = 1;
            }
        });
        $('.order_content').html('');
        // console.log(newObj);
        let i = 0;
        for (let key in newObj) {
            i = i + newObj[key];
            $.ajax({
                'type': 'get',
                'url': '../api/detail.php',
                'data': {
                    id: key
                },
                success: function (str) {
                    // console.log(str);
                    let obj = JSON.parse(str)[0];
                    let html = `<ul class="order_lists" data-id="${key}" data-num="${obj.inventory}">
                                <li class="list_chk">
                                    <input type="checkbox" id='' class="son_check">
                                    <label></label>
                                </li>
                                <li class="list_con">
                                    <div class="list_img"><a href="javascript:;"><img src="../img/${obj.titlePic}.jpg"
                                                alt=""></a></div>
                                    <div class="list_text"><a href="javascript:;">${obj.all_name}</a>
                                        <p><i class="fuwu"></i>选服务</p>
                                    </div>
                                    <br>
                                </li>
                                <li class="list_price">
                                    <p class="price">${obj.price}</p>
                                </li>
                                <li class="list_youhui">
                                    <p class="youhui">0.00</p>
                                </li>
                                <li class="list_amount">
                                    <div class="amount_box">
                                        <a href="javascript:;" class="reduce reSty">-</a>
                                        <input type="text" value="${newObj[key]}" class="sum">
                                        <a href="javascript:;" class="plus">+</a>
                                    </div>
                                </li>
                                <li class="list_sum">
                                    <p class="sum_price">${obj.price*newObj[key]}.00</p>
                                </li>
                                <li class="list_op">
                                    <p class="del">
                                        <a href="javascript:;" class="shoucang">移入收藏夹</a>
                                        <a href="javascript:;" class="delBtn">删除</a>
                                    </p>
                                </li>
                            </ul>`;
                    $('.order_content').html($('.order_content').html() + html);
                }
            });
        }
        $('#allpro').html(i);
    }
    // ===========================全选功能===========================
    $('.whole_check').on('click', function () {
        //全选按钮的状态：是否被勾选
        let now = $(this).prop('checked'); //全选
        $('input[type="checkbox"]').prop('checked', now);
        numAndToal();
    });
    // ==========================反控制全选======================
    $('.cartBox').on('click', '.order_lists input', function () {
        isChecked();
        numAndToal();
    })

    function isChecked() {
        let checkedAll = $('.order_content input:checked').size();
        let num = $('.order_content input[type="checkbox"]').size();
        if (checkedAll == num) {
            //全部打钩：全选
            $('.whole_check').prop('checked', true);
        } else {
            $('.whole_check').prop('checked', false);
        }
    }

    // =======================商品数量=============================
    // 增加
    $('.order_content').on('click', '.plus', function () {
        // 获取购物表的记录id
        let id = $(this).parent().parent().parent().attr('data-id');
        let kucun = $(this).parent().parent().parent().attr('data-num');
        let num = $(this).prev().val();
        num++; //自增
        if (num >= kucun) {
            num = kucun;
        }
        $(this).prev().val(num);
        if (username) {
            // 登录状态，修改数据表
            $.ajax({
                type: 'post',
                url: '../api/changeNumCart.php',
                data: {
                    id: id,
                    option: 'plus'
                },
                success: function (str) {
                    if (str == 'no') {
                        alert('操作失败');
                    }
                }
            });
        } else {
            // 游客状态，改变cookie值；
            let gids = $.cookie('gid'); //拿cookie的值
            gids = gids + '&' + id; //把最新添加的数据拼接上去
            $.cookie('gid', gids);
        }

        // 改变小计价格
        goodTotal($(this));
        numAndToal(); //改变总价
        allROws(); //改变总数量
    });

    // 减少
    $('.order_content').on('click', '.reduce', function () {
        let id = $(this).parent().parent().parent().attr('data-id');
        let num = $(this).next().val();
        num--; //自增
        if (num <= 1) {
            num = 1;
        }
        $(this).next().val(num);
        if (username) {
            // 登录状态
            $.ajax({
                type: 'post',
                url: '../api/changeNumCart.php',
                data: {
                    id: id,
                    option: 'reduce'
                },
                success: function (str) {
                    if (str == 'no') {
                        alert('操作失败');
                    }
                }
            });
        } else {
            // 删除cookie中对应的数据
            let gids = $.cookie('gid').split('&');
            let idindex = gids.lastIndexOf(id);
            gids.splice(idindex, 1);
            let newgids = gids.join('&');
            $.cookie('gid', newgids);
        }
        goodTotal($(this));
        numAndToal(); //改变总价
        allROws(); //改变总数量
    });

    // 输入数量sum
    $('.order_content').on('blur', '.sum', function () {
        let num = $(this).parent().parent().parent().attr('data-num'); //kucun
        let nownum = $(this).val();
        if (nownum < 1) {
            // 下限
            nownum = 1;
        } else if (nownum >= num) {
            // 上限
            nownum = num;
        }
        $(this).val(nownum);
        goodTotal($(this)); //改变小计价格
        numAndToal(); //改变总价
        allROws(); //改变总数量
    });

    //2.小计=单价*数量
    function goodTotal(now) {
        //单价
        let price = $(now).parent().parent().prev().prev().children().html();
        //数量
        let num = $(now).parent().find('input').val();
        let total = (price * num).toFixed(2); //保留两位小数
        $(now).parent().parent().next().children().html(total);
    }
    //======================================总计==========================================

    //总数量和总价格的变化
    function checkedRows() {
        let arr = []; //存被勾选的下标
        $('.order_content input[type="checkbox"]').each(function (i, item) {
            if ($(item).prop('checked')) {
                //被勾选的复选框把他的下标存起来
                arr.unshift(i);
            }
        });
        return arr;
    }

    // 全部商品的变化
    function allROws() {
        let allnum = 0;
        $('.order_content .sum').each(function (item) {
            allnum += $('.sum').eq(item).val() * 1;
        });
        $('#allpro').html(allnum);
    }


    function numAndToal() {
        //判断哪一行是被勾选的
        let arr = checkedRows();

        //计算总数量和总价格
        let sum = 0; //总数量
        let priceAll = 0; //总价格
        arr.forEach(function (item) {
            sum += $('.sum').eq(item).val() * 1;
            priceAll += $('.sum_price').eq(item).text() * 1;
        });
        // 把结算按钮放出来
        let calBtn = $('.calBtn a');
        if (priceAll != 0) {
            if (!calBtn.hasClass('btn_sty')) {
                calBtn.addClass('btn_sty');
            }
        } else {
            if (calBtn.hasClass('btn_sty')) {
                calBtn.removeClass('btn_sty');
            }
        }

        $('.piece_num').html(sum);
        $('.total_text').html('￥' + priceAll.toFixed(2));

    }
    // ==========================删除当行================================
    var $order_lists = null;
    var $order_content = '';
    let delid = ''; //存记录id
    $('.order_content').on('click', '.delBtn', function () {
        delid = $(this).parent().parent().parent().attr('data-id');
        $order_lists = $(this).parents('.order_lists');
        $order_content = $order_lists.parents('.order_content');
        $('.model_bg').fadeIn(300);
        $('.my_model').fadeIn(300);
    });

    //关闭模态框
    $('.closeModel').click(function () {
        closeM();
    });
    $('.dialog-close').click(function () {
        closeM();
    });

    function closeM() {
        $('.model_bg').fadeOut(300);
        $('.my_model').fadeOut(300);
    }
    //确定按钮，移除商品
    $('.dialog-sure').click(function () {
        $order_lists.remove();
        if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
            $order_content.parents('.cartBox').remove();
        }
        closeM();
        $sonCheckBox = $('.son_check');
        numAndToal();
        allROws();
        if (username) {
            // 登录状态,删除表中数据
            $.ajax({
                type: 'post',
                url: '../api/changeNumCart.php',
                data: {
                    id: delid,
                    option: 'del'
                },
                success: function (str) {
                    console.log(str);
                }
            });
        } else {
            // 游客状态，删除对应的cookie数据
            let gids = $.cookie('gid').split('&'); //获取gids
            let newarr = [];
            gids.forEach(function (item) {
                if (item != delid) {
                    newarr.push(item);
                }
            });
            let gidsArr = newarr.join('&');
            $.cookie('gid', gidsArr);
        }
    })

    // ==================================删除全部=================================
    $('#delAll').click(function () {
        let arr = checkedRows(); //判断哪些复选框是被勾选的
        let res = confirm('确定删除选定商品吗？');
        if (res) {
            arr.forEach(function (item) {
                // 移除节点
                let id = $('.cartBox .order_lists').eq(item).attr('data-id');
                $('.cartBox .order_lists').eq(item).remove();
                numAndToal();
                allROws();
                if (username) {
                    // 登录状态
                    $.ajax({
                        type: 'post',
                        url: '../api/changeNumCart.php',
                        data: {
                            id: id,
                            option: 'del'
                        },
                        success: function (str) {
                            console.log(str);
                        }
                    });
                } else {
                    // 游客状态，又是处理cookie值
                    let gids = $.cookie('gid').split('&'); //获取gids
                    let newarr = [];
                    gids.forEach(function (item) {
                        if (item != id) {
                            newarr.push(item);
                        }
                    });
                    let gidsArr = newarr.join('&');
                    $.cookie('gid', gidsArr);
                }
            });

        }

    });

    // 点击跳转详情页
    $('.cartBox').on('click', '.list_text a', function () {
        let id = $(this).parent().parent().parent().attr('data-id');
        location.href = 'detail.html?id=' + id;
    });





})();