(function () {
    // 广告关闭功能
    $('#adClose').click(function () {
        $(this).parent().css('display', 'none');
    });

    // 定位功能
    $('.weizhi').mouseenter(function () {
        // 显示定位框
        $('.weizhi_show').css('display', 'block');
    });

    // 鼠标移除隐藏，点击关闭隐藏
    $('#close').click(function () {
        $('.weizhi_show').css('display', 'none');
    });
    $('.weizhi_show').mouseleave(function () {
        $('.weizhi_show').css('display', 'none');
    });

    // 定位选项卡
    // 准备一些假数据
    let diqu = [
        ['北京市', '上海市', '重庆市', '广东省', '江西省', '江苏省', '浙江省', '安徽省', '山西省', '吉林省'],
        ['广东市', '韶关市', '深圳市', '珠海市', '江门市', '茂名市', '佛山市', '珠海市', '东莞市', '中山市'],
        ['广州市区', '荔湾区', '海珠区', '白云区', '天河区', '黄浦区', '南海区', '从化区', '番禺区', '萝岗区', '花都区']
    ]
    $('.tab').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        let html = diqu[index].map(item => {
            return `<li><a href="###">${item}</a></li>`;
        }).join('');
        $('#city-name').html(html);
    });

    $('#city-name').on('click', 'li', function () {
        $('.city-tab .active').html($(this).children().html());
    });

    // banner显示二级导航
    $('#nav-list').children().mouseenter(function () {
        $('.nav-box').css('display', 'block');
        let index = $(this).index();
        // let html = `<img src="img/banner_erji2.png">`;
        // console.log(index);
        if (index == 1 || index == 3 || index == 5) {
            $('.nav-box').children().attr('src', 'img/banner_erji2.png');
        } else {
            $('.nav-box').children().attr('src', 'img/banner_erji.png');
        }

    });

    $('.nav-box').mouseleave(function () {
        $('.nav-box').css('display', 'none');
    });

    $('.left-nav').mouseleave(function () {
        $('.nav-box').css('display', 'none');
    });

    // 轮播图
    bannerMove('banner');

    // 窗口滑动事件
    var list = document.getElementById('elevator');
    var alis = list.getElementsByTagName('a'); //找到所有按钮
    var adivs = document.getElementsByClassName('divs'); //找到所有按钮

    // 滚动条事件
    window.onscroll = function () {
        console.log(window.scrollY);
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

        // 显示楼层跳跃按钮
        if (window.scrollY >= 600) {
            $('#elevator').css('display', 'block');
        } else {
            $('#elevator').css('display', 'none');
        }

        var scrollNow = window.scrollY; //获取滚动距离
        for (var i = 0; i < adivs.length; i++) {
            if (scrollNow > adivs[i].offsetTop) {
                // 排他
                for (var j = 0; j < alis.length; j++) {
                    alis[j].className = '';
                }
                alis[i].className = 'active'; //高亮
            }
        }
    }

    // 楼层跳跃，点谁谁高亮

    $('#elevator a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });



    // 更多好物渲染数据
    let num = 10; //一开始只出现10条数据
    function init() {
        $.ajax({
            type: 'get',
            url: "api/index_init.php",
            data: {
                num: num
            },
            success: function (str) {
                let arr = JSON.parse(str);
                let html = arr.map(function (item) {
                    return `<li data-id="${item.id}">
                        <img src="img/${item.titlePic}.jpg">
                        <p class="p-title">${item.name}</p>
                        <p class="p-price">￥${item.price}</p>
                    </li>`
                }).join('');
                $('#moreGood-box').html(html);
            }

        });
    }

    init();
    // 加载更多
    $('#loadmore').click(function () {
        num = 12;
        init();
        $('#loadmore').css('display', 'none');
    });

    // 点击跳转详情页
    $('#moreGood-box').on('click', 'li', function () {
        // console.log($(this).attr('data-id'));
        location.href = 'html/detail?id=' + $(this).attr('data-id');
    });














})();