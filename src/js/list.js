(function () {
    // 数据渲染
    // 获取keyWord
    function getKey() {
        let url = decodeURIComponent(location.search);
        // 字符串转对象
        let keyWord = '';
        if (url) {
            keyWord = strToObj(url).keyWord;
        }
        // 渲染关键字
        $('.type').html(keyWord);
        $('#serch-tex').val(keyWord);
        // 初始化查询条件
        if (keyWord) {
            condition = `where all_name like '%${keyWord}%'`;
        } else {
            condition = '';
        }
    }


    // 分页功能需要的数据
    let num = 5; //一次加载20条记录
    let nowPage = 1; //起始页是第一页
    var paixu = 'id'; //默认按照id排序
    let condition = ''; //搜索条件
    let allpages = 0; //记录总页数
    getKey();

    function initList() {

        // 调用接口把商品渲染到页面
        $.ajax({
            type: 'post',
            url: '../api/list.php',
            data: {
                num: num,
                nowPage: nowPage,
                paixu: paixu,
                condition: condition,
            },
            success: function (str) {
                let obj = JSON.parse(str);
                // 数据渲染
                if (obj.data != '') {
                    let html = obj.data.map(function (item) {
                        let imgArr = item.bigPic.split(/[,，]/);
                        // console.log(imgArr);
                        let imgs = imgArr.map(function (item) {
                            return `<img src="../img/${item}">`;
                        }).join('');

                        // console.log(imgs);
                        return `<li data-id="${item.id}" data-kucun="${item.inventory}">
                                <img src="../img/${imgArr[0]}" class="bigPic">
                                <span class="quehuo" >缺货</span>
                                <div class="smallPics">
                                    ${imgs}
                                </div>
                                <a href="###" class="title">${item.all_name}
                                    ${item.detail}</a>
                                <div class="price">￥${item.price}</div>
                                <p>已有 <span>${item.evaluation}</span> 人评价</p>
                                <div class="tool">
                                    <a href="###">对比</a>
                                    <a href="###">收藏</a>
                                </div>
                            </li>`;
                    }).join('');
                    $('.listBox').html(html);

                } else {
                    $('.listBox').html('<p class="p1">暂未找到您搜索的商品，换一个关键词或筛选条件试试</p>');
                    $('.listBox .p1').css({
                        'width': '100%',
                        'height': 200,
                        'text-align': 'center',
                        'line-height': '200px'
                    });
                }

                // 共有几条数据obj.nums
                $('.allnums').html(obj.nums);
                allpages = Math.ceil(obj.nums / num); // 求总页数
                //总页数渲染
                $('#pages').html(allpages);
                // 分页按钮渲染
                if (allpages >= 1) {
                    let html = '';
                    for (let i = 1; i <= allpages; i++) {
                        html += `<li>${i}</li> `;
                    }
                    $('#pageItem').html(html);
                    // 当前页高亮
                    $('#pageItem').children().eq(nowPage - 1).addClass('active');
                } else {
                    $('#pageItem').html('');
                }

                if (obj.nums == 0) {
                    $('.pageNow').html(0);
                } else {

                    $('.pageNow').html(nowPage);
                }


            }
        });



    }

    initList();

    // 显示缺货标志
    $('.listBox').on('mouseenter', 'li', function () {
        let kucuns = $(this).attr('data-kucun');
        if (kucuns == 0) {
            $(this).children('.quehuo').css('display', 'block');
        } else {
            $(this).children('.quehuo').css('display', 'none');
        }

    }).on('click', 'li', function () {
        let id = $(this).attr('data-id');
        // 跳转
        location.href = 'detail.html?id=' + id;
    });

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

    // 更多选项
    let isok = false;
    $('#moreOption').click(function () {
        if (!isok) {
            $('.screening-box').css('height', 'auto');
            $('#moreOption').html('收起');
        } else {
            $('.screening-box').css('height', 280);
            $('#moreOption').html('更多选项...');
        }
        isok = !isok;
    });


    // 排序选项卡
    let desc = false;
    $('.sort span').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let str = $(this).attr('id');
        if (str == 'zonghe') {
            // 综合排序,其实是根据id
            paixu = 'id';
            $('.toTop').css('border-bottom-color', '#999');
            $('.toDown').css('border-top-color', '#999');
            desc = false;
        } else if (str == 'jiage') {
            // 根据价格的降序和升序的区别
            if (!desc) {
                // 升序
                $('.toTop').css('border-bottom-color', 'red');
                $('.toDown').css('border-top-color', '#999');
                paixu = 'price';
            } else {
                // 降序
                $('.toDown').css('border-top-color', 'red');
                $('.toTop').css('border-bottom-color', '#999');
                paixu = 'price DESC';
            }
            desc = !desc;
        } else if (str == 'zuixin') {
            // 上新时间
            $('.toTop').css('border-bottom-color', '#999');
            $('.toDown').css('border-top-color', '#999');
            desc = false;
            paixu = 'rate_of_acclaim'; //其实是好评率，因为数据库里没有上新时间
        }
        nowPage = 1;
        initList();
    });

    // 仅显示有货
    // 先存一下condition
    let newCodition = condition;
    let yesready = false;
    $('#yes').click(function () {
        if (!yesready) {
            $('#yes i').html('√');
            $('#yes i').css({
                'background': '#f21c1c',
                'border-color': '#f21c1c'
            });

            if (condition != '') {
                condition += `and inventory > 0`;
            } else {
                condition = `where inventory > 0`
            }
        } else {
            $('#yes i').html('');
            $('#yes i').css({
                'background': '#fff',
                'border-color': '#dcdfe6'
            });
            condition = newCodition;
        }
        nowPage = 1;
        initList();
        yesready = !yesready;
    });

    // 价格区间
    newCodition = condition; //存一下
    $('#priBtn').click(function () {
        condition = newCodition;
        //获取价格
        let min = $.trim($('#lower').val());
        let max = $.trim($('#higher').val());;

        if (min) {
            if (condition != '') {
                condition += `and`;
            } else {
                condition = `where`
            }
            condition += ` price>=${min} `;
        }

        if (max) {
            if (condition != '') {
                condition += `and`;
            } else {
                condition = `where`
            }
            condition += ` price<=${max} `;
        }
        nowPage = 1;
        initList();

    });

    // 换页利用事件委托
    $('#pageItem').on('click', 'li', function () {
        nowPage = $(this).html();
        initList(); //数据渲染
    });

    // 上一页
    $('.pre').click(function () {
        nowPage--;
        if (nowPage < 1) {
            nowPage = 1;
        }
        initList(); //数据渲染
    });

    // 下一页
    $('.nextPage').click(function () {
        nowPage++;
        // consoles.log(allpages);
        if (nowPage > allpages) {
            nowPage = allpages;
        }
        initList(); //数据渲染
    });

    // 搜索功能
    $('#searchBtnNow').click(function () {
        // 获取搜索框里的值
        let serchtex = $('#serch-tex').val();
        if (!serchtex) {
            serchtex = $('#serch-tex').attr('placeholder');
        }
        let newTex = $.trim(serchtex);
        keyWord = newTex;
        location.href = 'list.html?keyWord=' + keyWord;
        getKey();
    });

    // 换图
    $('.listBox ').on('mouseenter', '.smallPics img', function () {
        let url = $(this).attr('src');
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().prev().prev().attr('src', url);
    });


})();