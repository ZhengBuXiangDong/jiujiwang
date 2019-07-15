(function () {
    // 清除，防止登录后跳转回来
    // removeCookie('comeFrom');
    // 选项卡
    $('.regTab span').click(function () {
        // 高亮
        $(this).addClass('active').siblings().removeClass('active');
        // 显示对应内容框
        $('.reg').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });

    // 注册验证
    // let regOK = {}; //注册开关
    // 非空验证
    function notNull(ele, str) {
        if ($(ele).val().trim()) {
            return true;
        } else {
            $(ele).next().html(`${str}不能为空`);
            $(ele).next().css('color', 'red');
            return false;
        }
    }
    // 正则验证信息
    function regVerify(ele, reg, meg) {
        let val = $(ele).val().trim();
        if (reg.test(val)) {
            return true;
        } else {
            $(ele).next().html(meg);
            $(ele).next().css('color', 'red');
            return false;
        }
    }

    // 通过
    function pass(ele) {
        $(ele).next().html('√');
        $(ele).next().css('color', '#58bc58');
    }

    // 确认密码
    function Confirm() {
        let ele = '#pwConfirm';
        let pw = $('#pw').val();
        let pwConfirm = $('#pwConfirm').val();
        if (pw != pwConfirm) {
            $(ele).next().html('两次输入的密码不一致');
            $(ele).next().css('color', 'red');
        } else {
            pass(ele);
        }
    }


    // 用户名验证
    let regOKusername = false;
    $('#userName').blur(function () {
        // 非空验证
        let ele = '#userName';
        if (notNull(ele, '用户名')) {
            // 正则验证
            let meg = `用户名格式错误，请输入4-16位字母、数字或汉字`;
            let reg = /^[\da-zA-Z\u4e00-\u9f5a]{4,16}$/;
            if (regVerify(ele, reg, meg)) {
                // ajax验证用户名是否已存在
                let userName = $(ele).val().trim();
                $.ajax({
                    type: 'post',
                    url: '../api/checkUserName.php',
                    data: {
                        username: userName
                    },
                    success: function (str) {
                        if (str == 'yes') {
                            $(ele).next().html('√');
                            $(ele).next().css('color', '#58bc58');
                            regOKusername = true;
                        } else {
                            $(ele).next().html('该用户名已被注册');
                            $(ele).next().css('color', 'red');
                            regOKusername = false;
                        }
                    }
                });

            } else {
                regOKusername = false;
            }

        }

    });

    // 密码验证
    let regOKpw = false;
    $('#pw').blur(function () {
        let ele = '#pw';
        // 非空验证
        if (notNull(ele, '密码')) {
            // 正则验证
            let meg = `密码格式错误，请输入6个以上的字母或数字`;
            let reg = /^[\da-zA-Z]{6,}$/;
            if (regVerify(ele, reg, meg)) {
                pass(ele);
                regOKpw = true;
            } else {
                regOKpw = false;
            }
        }
        // 确认密码
        Confirm();

    });

    // 确认密码
    let regOKpwConfirm = false;
    $('#pwConfirm').blur(function () {
        if (notNull('#pwConfirm', '该项')) {
            Confirm();
            regOKpwConfirm = true;
        } else {
            regOKpwConfirm = false;
        }
    });

    // 手机号码验证
    let regOKtel = false;

    function checkTelNum(str) {
        // 非空验证
        let ele = str;
        if (notNull(ele, '手机号码')) {
            // 正则验证
            let meg = `请输入正确的手机号码`;
            let reg = /^1[3-9]\d{9}$/;
            if (regVerify(ele, reg, meg)) {
                // ajax验证手机号是否已被注册存在
                let tel = $(ele).val().trim();
                $.ajax({
                    type: 'post',
                    url: '../api/checkTel.php',
                    data: {
                        tel: tel
                    },
                    success: function (str) {
                        if (str == 'yes') {
                            $(ele).next().html('√');
                            $(ele).next().css('color', '#58bc58');
                            regOKtel = true;
                        } else {
                            $(ele).next().html('该手机号码已被注册');
                            $(ele).next().css('color', 'red');
                            regOKtel = false;
                        }
                    }
                });
            } else {
                regOKtel = false;
            }
        }
    }
    $('#userTel2').blur(function () {
        checkTelNum('#userTel2');
    });
    $('#userTel1').blur(function () {
        checkTelNum('#userTel1');
    });

    // 邮箱地址
    let regOKemail = true;
    $('#email').change(function () {
        let ele = '#email';
        if ($('#email').val().trim()) {
            let meg = `邮箱格式有误`;
            let reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (regVerify(ele, reg, meg)) {
                pass(ele);
                regOKemail = true;
            } else {
                regOKemail = false;
            }
        } else {
            $(ele).next().html('请填写邮箱，用于找回密码');
            $(ele).next().css('color', '#999');
            regOKemail = true;
        }
    });
    // 验证码
    $('#getCode2').click(function () {
        let randomCode = randomNum();
        $(this).html(randomCode);
    });

    // 注册
    // 账号注册
    $('#regBtn1').click(function () {
        let checked = $('#mmprovision').prop("checked");
        if (checked) {
            if (regOKtel) {
                // 要验证动态密码
            }
        }
    });
    // 快速注册
    $('#regBtn2').click(function () {
        //用户须知
        let checked = $('#mmprovision1').prop("checked");
        // 验证码
        let num = $('#codeText').val().toLowerCase();
        let randomCode = $('#getCode2').html().toLowerCase();
        if (num == randomCode) {
            if (checked) {
                // 所有验证通过，还要加上动态密码
                if (regOKusername && regOKpw && regOKpwConfirm && regOKtel && regOKemail) {
                    // 获取数据
                    let username = $('#userName').val().trim();
                    let password = $('#pw').val().trim();
                    let tel = $('#userTel2').val().trim();
                    let email = $('#email').val().trim();
                    if (username && password && tel) {
                        $.ajax({
                            type: 'post',
                            url: '../api/register.php',
                            data: {
                                username: username,
                                password: password,
                                tel: tel,
                                email: email
                            },
                            success: function (str) {
                                if (str == 'ok') {
                                    alert('注册成功');
                                    // 清除所有数据
                                    $('#userName').val('');
                                    $('#pw').val('');
                                    $('#pwConfirm').val('');
                                    $('#userTel2').val('');
                                    $('#email').val('');
                                }
                            }
                        });
                    }

                } else {
                    alert('请完善注册信息');
                }
            } else {
                alert('必须同意九机服务条款才能运行注册')
            }
        } else {
            alert('验证码错误！');
            // 刷新验证码
            $('#getCode2').html(randomNum());

        }




    })

})();