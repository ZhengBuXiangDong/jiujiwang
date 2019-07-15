(function () {
    // 共享js
    // 1.获取用户
    function init() {
        let username = getCookie('username');
        // console.log(username);
        let html = '';
        if (username) {
            html = `
                <span>Hi,<a href="###" title="进入个人中心">${username}</a></span>
                <a href="###"><i class="userlevel" title="用户等级"></i></a>
                <a href="###"><i class="userpoint" title="我的积分"></i>0</a>
                <a href="###"><i class="massage" title="消息"></i></a>
                <a href="###" id="signOut">退出</a>
                `;
        } else {
            html = `
                <span>HI，欢迎来九机！</span>
                <a href="login.html" data-id='1' id="loginA">登录</a>
                <a href="register.html">免费注册</a>
                `;
        }
        $('#loginText').html(html);
    }
    init();


    // 2.右侧导航栏回到顶部
    window.onscroll = function () {
        // 回到顶部
        if (window.scrollY >= 100) {
            $('.go-top').css('display', 'block');
            $('.go-top').click(function () {
                // 缓慢回到顶部
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        } else {
            $('.go-top').css('display', 'none');
        }

    }

    // 3.跳转登录页之前记录地址
    $('#loginText').on('click', '#loginA', function () {
        console.log(666);
        let comeFrom = location.href;
        setCookie('comeFrom', comeFrom, 1);
    });

    // 4.退出功能
    $('#loginText').on('click', '#signOut', function () {
        removeCookie('username');
        setTimeout(function () {
            init();
        }, 500);
    });

    // 5.跳转搜索页
    $('#searchBtn').click(function () {
        // 获取搜索框的内容
        let keyWord = $('#serch-tex').val();
        if (!keyWord) {
            keyWord = $('#serch-tex').attr('placeholder');
        }
        // 跳转
        // console.log(keyWord);
        location.href = 'list.html?keyWord=' + keyWord;
    });






})();