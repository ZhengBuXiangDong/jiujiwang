(function () {
    // 选项卡点击切换
    $('.top a').click(function () {
        // 高亮
        $(this).children().addClass('active');
        $(this).siblings().children().removeClass('active');

        // 显示对应文本框
        let index = $(this).index();
        // console.log(index);
        if (index == 0) {
            $('#box1').css('display', 'flex');
            $('#box2').css('display', 'none');
        } else if (index == 2) {
            $('#box2').css('display', 'block');
            $('#box1').css('display', 'none');
        }
    });

    // 转换登录方式
    $('#loginWay').click(function () {
        let str = $(this).attr('class'); //获取当前登录方式
        if (str == 'typeOne') {
            $(this).attr('class', '').addClass('typeTwo'); //换类名
            $(this).html('<i class="iconfont icon-hongbao"></i> 短信验证码登录');
            // 换输入框的字
            $('#tel').attr('placeholder', '用户名/手机号');
            $('#pw').attr('placeholder', '密码');
            $('#getCode').css('display', 'none'); //隐藏获取验证码的框
        } else if (str == 'typeTwo') {
            $(this).attr('class', '').addClass('typeOne'); //换类名
            $(this).html('<i class="iconfont icon-tishi"></i> 账号密码登录');
            // 换输入框的字
            $('#tel').attr('placeholder', '手机号码');
            $('#pw').attr('placeholder', '动态密码');
            $('#getCode').css('display', 'block');
        }
    });

    // 把按钮放出来
    let btnOK = false;

    function showBtn() {
        let tel = $('#tel').val();
        let pw = $('#pw').val();
        // console.log(tel, pw);
        if (tel && pw) {
            // console.log('nijao');
            $('#loginbtn').css('background-color', '#ff2211');
            btnOK = true;
        } else {
            $('#loginbtn').css('background-color', '#dfdfdf');
            btnOK = false;
        }

    }
    showBtn();
    window.onkeyup = function () {
        showBtn();
    }

    // 自定义alert弹出框
    function toast(str) {
        $('#toast').html(str);
        setTimeout(function () {
            $('#toast').css('display', 'block')
        }, 300);
        setTimeout(function () {
            $('#toast').css('display', 'none');
        }, 3000);
    }

    // 点击改变60天免登陆
    let checked = true; //默认选中
    $('#checked').click(function () {
        if (checked) {
            $('#checked').children().animate({
                right: 21
            });
            $('#checked').css('background', '#dcdfe6');
        } else {
            $('#checked').children().animate({
                right: 1
            });
            $('#checked').css('background', '#f21c1c');
        }
        checked = !checked;
    });

    // 登录功能
    let num = $.cookie("comeFrom");
    removeCookie('comeFrom');
    $('#loginbtn').click(function () {
        // console.log(btnOK);
        if (btnOK) {
            // 1.非空验证
            let username = $('#tel').val().trim();
            let pw = $('#pw').val().trim();
            // console.log(str);
            if (tel && pw) {
                let str = $('#loginWay').attr('class'); //获取登录方式
                //2. 账号密码登录
                if (str == 'typeTwo') {
                    $.ajax({
                        type: 'post',
                        url: '../api/login.php',
                        data: {
                            username: username,
                            password: pw
                        },
                        success: function (str) {
                            if (str == 'no') {
                                toast('用户名或密码错误！')
                            } else {
                                username = str;
                                // 页面跳转
                                if (num) {
                                    location.href = num;
                                } else {
                                    location.href = '../index.html';
                                }
                                // 60天免登陆
                                if (checked) {
                                    setCookie('username', username, 60);
                                } else {
                                    setCookie('username', username, 1);
                                }
                            }

                        }
                    });
                }

            } else {
                toast('用户名或密码为空了，请重新输入');
            }
        }
    });



})();