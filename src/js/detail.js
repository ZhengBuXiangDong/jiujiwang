(function () {
    // 全部商品分类滑过显示三级导航
    $('.navigation').mouseenter(function () {
        $('.left-nav:eq(0)').slideDown();
    });

    $('.navigation').mouseleave(function () {
        $('.left-nav:eq(0)').slideUp();
    });

    $('#nav-list').children().mouseenter(function () {
        $('.nav-box').css('display', 'block');
        let index = $(this).index();
        if (index == 1 || index == 3 || index == 5) {
            $('.nav-box').children().attr('src', '../img/banner_erji2.png');
        } else {
            $('.nav-box').children().attr('src', '../img/banner_erji.png');
        }

    });

    // 鼠标移除隐藏
    $('.nav-box').mouseleave(function () {
        $('.nav-box').css('display', 'none');
    });

    $('.left-nav').mouseleave(function () {
        $('.nav-box').css('display', 'none');
    });

    // 放大镜
    // 接收传过来的商品id
    let url = location.search.slice(1);
    // 字符串转对象
    let obj = strToObj(url); //{id:1}

    // 调用接口
    $.ajax({
        type: 'get',
        url: "../api/detail.php",
        data: {
            id: obj.id
        },
        success: function (str) {
            let obj = JSON.parse(str)[0];
            // console.log(obj);
            // 改变路径标题
            let positionName = obj.position_name;
            $('.name').html(positionName);

            // 商品编号
            let bianhao = obj.number;
            $('.bianhao').html('商品编号：' + bianhao);

            // 商品条码
            let tiaoma = obj.bar_code;
            $('.tiaoma').html('商品条码：' + tiaoma);

            // 渲染商品标题
            let allName = obj.all_name;
            $('.titleName').html(allName);

            // 标题下的小红字
            let detail = obj.detail;
            $('.p1Detail').html(detail);

            // 价格
            let price = obj.price;
            $('.price').html(price);

            // 用户评价
            let evaluation = obj.evaluation;
            $('.evaluation').html(evaluation);

            // 商品咨询
            let consulation = obj.consultation;
            $('.consulation').html(consulation);

            // 好评率
            let rateOfacclaim = obj.rate_of_acclaim;
            $('.rateOfacclaim').html(rateOfacclaim + '%');

            // 配置信息
            let sku = obj.configuration;
            $('.config').html(sku);

            // 低价选择
            let lowPrice = obj.low_price.split('，');
            // console.log(lowPrice);
            if (lowPrice[0]) {
                $('.lowPrice').html(
                    lowPrice.map(function (item) {
                        return `<i>${item}</i>`;
                    })
                );
            }

            // 颜色
            let colors = obj.color.split(/[,，]/);
            // console.log(colors);
            let colorHtml = colors.map(function (item) {
                let obj = item.split(':');
                // console.log(obj);
                return `<a href="###">
                            <i>
                                <img src="../img/changxiang9plus-${obj[0]}.jpg">
                            </i>
                            ${obj[1]}
                        </a>`;
            }).join('');
            $('.colors').html(colorHtml);

            // 版本
            let edition = obj.edition.split(/[,，]/);
            // console.log(edition);
            $('.editions').html(edition.map(function (item) {
                return `<a href="###">${item}</a>`;
            }).join(''));


            // 渲染小图片
            let url = obj.bigPic.split('，'); //拿到小图片
            var html = url.map(function (item) {
                return `<li>
                                <div class="small-img">
                                    <img src="../img/${item}" />
                                </div>
                            </li>`;
            }).join('');

            $('.animation03').html(html);

            //放大镜插件使用：先渲染再调用插件
            var magnifierConfig = { //配置参数
                magnifier: "#magnifier1", //最外层的大容器
                width: 440, //承载容器宽
                height: 440, //承载容器高
                moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
                zoom: 5 //缩放比例
            };

            var _magnifier = magnifier(magnifierConfig);


        }
    });

    // 加入购物车
    $('.addCar').click(function () {
        // addCart(obj.id);
        let kucun = new Promise(resolved => {
            $.ajax({
                type: 'get',
                url: "../api/detail.php",
                data: {
                    id: obj.id
                },
                success: str => {
                    //把数据放到外部使用
                    resolved(str);
                }
            });
        });
        // 获取库存量
        kucun.then(function (str) {
            let inventory = JSON.parse(str)[0].inventory;
            if (inventory != 0) {
                // 先判断是否是登录状态
                let username = $.cookie('username');
                if (username) {
                    // 登录状态,直接将信息存到数据库中
                    $.ajax({
                        type: 'post',
                        url: '../api/addCart.php',
                        data: {
                            username: username,
                            goodid: obj.id
                        },
                        success: function (str) {
                            if (str == 'ok') {
                                alert('添加成功');
                            } else {
                                alert('添加失败')
                            }
                        }
                    });
                } else {
                    // 游客状态,就把数据添加到cookie里
                    // console.log(555);
                    let oldId = $.cookie('gid'); // 读取cookie中商品的值
                    let newIds = '';
                    if (oldId) {
                        // 已存在就拼接
                        newIds = obj.id + '&' + oldId;
                        $.cookie('gid', newIds);
                    } else {
                        // 没存在就存进去
                        $.cookie('gid', obj.id);
                    }
                    alert('添加成功')
                }
            } else {
                alert('该商品暂时缺货，请关注后续上新');
            }
        });


    });



})();