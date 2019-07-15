function bannerMove(id) {
    // 找节点
    var banner = document.getElementById(id);
    var listPic = banner.querySelector('.listPic');
    var aLis = listPic.querySelectorAll('li'); //找到所有的图
    var cir = banner.querySelector('.cir');
    var cirs = cir.querySelectorAll('span'); //找到所有的小圆点
    var prev = document.getElementById('btn1'); //上一张
    var next = document.getElementById('btn2'); //下一张
    var now = 0; //当前图的下标
    var lw = aLis[0].offsetWidth; //每张图的宽度

    // 图片全部放到右侧，第一张放在可视区
    for (var i = 0; i < aLis.length; i++) {
        aLis[i].style.left = lw + 'px';
    }
    aLis[now].style.left = '0px';

    // 轮播图自动播放
    var timer = null;
    timer = setInterval(goNext, 2000); //2s后播放下一张

    // 下一张
    function goNext() {
        // 旧的移走
        startMove(aLis[now], {
            'left': -lw
        });

        //下一张
        now++;
        // 临界值
        if (now >= aLis.length) {
            now = 0;
        }

        // 先确保在候补区
        aLis[now].style.left = lw + 'px';
        // 放在可视区
        startMove(aLis[now], {
            'left': 0
        });

        cirFollow(); //焦点跟随
    }

    // 上一张
    function goPrev() {
        // 旧的移到右边
        startMove(aLis[now], {
            'left': lw
        });

        // 上一张
        now--;
        // 临界值
        if (now < 0) {
            now = aLis.length - 1;
        }
        // 确保要上场的在左边
        aLis[now].style.left = -lw + 'px'; //强制过去
        // 再放到可视区
        startMove(aLis[now], {
            'left': 0
        });
        cirFollow(); //焦点跟随
    }

    //焦点跟随
    function cirFollow() {
        for (var j = 0; j < cirs.length; j++) {
            cirs[j].className = '';
        }
        cirs[now].className = 'active';
    }

    // 鼠标移入图片停止轮播
    banner.onmouseover = function () {
        clearInterval(timer);
        btn1.style.display = 'block';
        btn2.style.display = 'block';

    }

    // 鼠标移出图片开始轮播
    banner.onmouseout = function () {
        timer = setInterval(goNext, 2000);
        btn1.style.display = 'none';
        btn2.style.display = 'none';
    }

    // 点击小圆点切换图片
    cir.onclick = function (ev) {
        if (ev.target.tagName == 'SPAN') {
            var index = ev.target.dataset.index; //获取自定义索引值

            // 切换图片
            if (index > now) {
                // 当前的图往左走
                startMove(aLis[now], {
                    'left': -lw
                });

                // 要切换的图过来
                // 确保要上场的在左边
                aLis[index].style.left = lw + 'px'; //强制过去
                // 再放到可视区
                startMove(aLis[index], {
                    'left': 0
                });
            } else if (index < now) {
                // 反过来
                startMove(aLis[now], {
                    'left': lw
                });
                aLis[index].style.left = -lw + 'px'; //强制过去
                // 再放到可视区
                startMove(aLis[index], {
                    'left': 0
                });
            }
            // 更新now值
            now = index;
            cirFollow(); //焦点跟随
        }
    }

    // 点击上一张切换到上一张
    prev.onclick = function () {
        goPrev();
    }

    // 点击下一张切换到下一张
    next.onclick = function () {
        goNext();
    }

}