<template>
  <div>
    <div class="center" style="width: 1200px;margin: 0 auto">
      <div class="top" >
        <div class="top1">
          <img src="../assets/image/图层25拷贝.png">
        </div>
        <div class="top2">
          <ul>
            <li class="top2_1">首页</li>
<!--            <li>播丫产品 <img src="../assets/image/矢量智能对象.png" /></li>-->
<!--            <li>解决方案</li>-->
<!--            <li>商务合作</li>-->
<!--            <li>新闻资讯</li>-->
<!--            <li>疑问解答</li>-->
<!--            <li>关于播丫</li>-->
          </ul>
        </div>
        <div class="top3" style="float: right;">
          <ul>
            <li class="top3_1" @click="go_url('https://api.boyo.tv/admin/live/')">登录</li>
            <li class="top3_2" @click="go_url('https://api.boyo.tv/admin/live/passport/register')" style="margin-left: 20px">免费试用</li>
          </ul>
        </div>
      </div>
      <div>
        <el-carousel height="484px" arrow="always" trigger="click">
          <el-carousel-item>
            <img src="../assets/image/banner1.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/banner2.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/banner3.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="middle1">
        <div class="middle1_1">优视直播四大利器</div>
        <div class="middle1_2"></div>
        <div class="middle1_3">
          <ul>
            <li>
              <div class="middle1_31"><img src="../assets/image/矢量智能对象(9).png" /></div>
              <div class="middle1_32">智能直播设备</div>
            </li>
            <li>
              <div class="middle1_31"><img src="../assets/image/矢量智能对象(10).png" /></div>
              <div class="middle1_32">直播平台</div>
            </li>
            <li>
              <div class="middle1_31"><img src="../assets/image/矢量智能对象(11).png" /></div>
              <div class="middle1_32">小程序商城</div>
            </li>
            <li>
              <div class="middle1_31"><img src="../assets/image/矢量智能对象(12).png" /></div>
              <div class="middle1_32">营销套件</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="middle2">
        <div class="middle2_1">强大的直播运营工具</div>
        <div class="middle2_2"></div>
        <div class="middle2_3">
          <ul>
            <li>
              <div><img src="../assets/image/矢量智能对象(1).png"  /></div>
              <div class="middle2_31">引导页</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(2).png"  /></div>
              <div class="middle2_31">预告片</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(3).png"  /></div>
              <div class="middle2_31">图文介绍</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(4).png"  /></div>
              <div class="middle2_31">邀请排行榜</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(5).png"  /></div>
              <div class="middle2_31">微信分享</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(6).png"  /></div>
              <div class="middle2_31">预约观看</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(7).png"  /></div>
              <div class="middle2_31">开播提醒</div>
            </li>
            <li>
              <div><img src="../assets/image/矢量智能对象(8).png"  /></div>
              <div class="middle2_31">绿幕抠图</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="middle3">
        <img src="../assets/image/图层27.png">
      </div>
      <div class="middle4">
        <img src="../assets/image/优视直播大屏一体机（六合一）.png">
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'index',
    components: {

    },
    data () {
        return {
            banner_list: [],
            data_list: [],
            partner_list: [],
        }
    },
    methods: {
        go_url(url){
          window.location.href = url
        },
        init () {
            // var vx = document.getElementsByClassName('right_1')[0];
            // var code = document.getElementsByClassName('right1')[0];
            // var triangle1 = document.getElementsByClassName('triangle1')[0];
            //
            // var tel = document.getElementsByClassName('right_2')[0];
            // var tel1 = document.getElementsByClassName('right2')[0];
            // var triangle2 = document.getElementsByClassName('triangle2')[0];
            // vx.onmouseover = function () {
            //     code.style.display = 'block';
            //     triangle1.style.display = 'block';
            // }
            // vx.onmouseout = function () {
            //     code.style.display = 'none';
            //     triangle1.style.display = 'none';
            // }
            //
            // tel.onmouseover = function () {
            //     tel1.style.display = 'block';
            //     triangle2.style.display = 'block';
            // }
            // tel.onmouseout = function () {
            //     tel1.style.display = 'none';
            //     triangle2.style.display = 'none';
            // }
        },
        go_art_path (path, id) {
            this.$router.push({
                path: path,
                query: { id: id }
            })
        },
        get_banner_list () {
            const url = '/jhg/banner/get'
            this.$api.get(this, url, {}, res => {
                this.banner_list = res.data.data
            })
        },
        get_table_list () {
            const url = '/jhg/summaryList'
            this.$api.get(this, url, {}, res => {
                this.data_list = res.data.data.slice(0,3)
            })
        },
        get_partner () {
            const url = '/jhg/logo/get'
            this.$api.get(this, url, {}, res => {
                this.partner_list = res.data.data
            })
        },
        go_path (path) {
            this.$router.push({ path: path })
        },
    },
    created () {
        this.init()
        // this.get_banner_list()
        // this.get_table_list()
        // this.get_partner()
    }
}
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  float: left;
  font-weight: bold;
}

.top {
  height: 118px;
}

.top1 {
  float: left;
  margin-top: 32px;
}

.top2 {
  float: left;
  margin-left: 76px;
  margin-top: 44px;
}

.top2 li {
  margin-left: 30px;
}

.top2_1 {

  color: #D70D19;
}

.top2_2 {
  display: inline-block;
  margin-top: 2px;
}

.top3 {
  float: left;
  margin-left: 50px;
  margin-top: 38px;
}

.top3_1 {
  width: 99px;
  height: 35px;
  border: 1px solid #00C657;
  border-radius: 18px;
  font-size: 14px;
  color: #00C657;
  text-align: center;
  line-height: 35px;
}

.top3_2 {
  width: 99px;
  height: 35px;
  border: 1px solid #D70D19;
  border-radius: 18px;
  font-size: 14px;
  font-weight: bold;
  color: #D70D19;
  text-align: center;
  line-height: 35px;
  margin-left: 4px;
}

.middle1 {
  width: 1200px;
  margin: 82px auto;
}

.middle1_1 {
  text-align: center;
  width: 1200px;
  height: 24px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #323232;

}

.middle1_2 {
  margin: 0 auto;
  width: 122px;
  height: 4px;
  background-color: #D8271C;
  border-radius: 2px;
  margin-top: 10px;
}

.middle1_3 {
  width: 1200px;
  height: 120px;
  margin-top: 68px;
  margin-left: 51px;
}

.middle1_3 li {
  width: 150px;
  height: 150px;
  float: left;
  list-style: none;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #323232;
  margin-left: 100px;
  text-align: center;
}

.middle1_31 {
  height: 71px;
  vertical-align: middle;
}

.middle1_32 {
  margin-top: 26px;
}

.middle2 {
  width: 1200px;
  margin-top: 132px;
}

.middle2_1 {
  text-align: center;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #323232;
}

.middle2_2 {
  margin: 0 auto;
  width: 122px;
  height: 4px;
  background-color: #D8271C;
  border-radius: 2px;
  margin-top: 10px;
}

.middle2_3 {
  height: 688px;
}

.middle2_3 li {
  float: left;
  list-style: none;
  margin-left: 96px;
  margin-top: 100px;
}

.middle2_31 {
  margin-top: 20px;
  text-align: center;

  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #323232;

}

.middle3 {
  width: 1200px;
  margin-top: 96px;
}

.middle4 {
  width: 1200px;
}

.foot {
  width: 1526px;
  height: 258px;
  background-color: #1b232e;
}

.foot1 {
  float: left;
  margin-left: 164px;
  font-size: 18px;
  color: #cdcecf;
}

.foot1 div {
  margin-top: 26px;
}

.foot2 {
  float: left;
  margin-left: 460px;
  margin-top: 22px;
}

.right {
  position: fixed;
  top: 280px;
  right: 5px;
}

.right1 {
  position: fixed;
  top: 254px;
  right: 90px;
  width: 109px;
  height: 109px;
  background-color: #4a4a4a;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  display: none;
}

.right1_1 {
  height: 96px;
  width: 96px;
  margin-top: 6px;
}

.triangle1 {
  position: fixed;
  top: 298px;
  right: 70px;
  display: none;
}
.right2 {
  position: fixed;
  top: 330px;
  right: 90px;
  width: 109px;
  height: 109px;
  background-color: #4a4a4a;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  text-align: center;
  line-height: 120px;
  color: #ffffff;
  display: none;
}
.triangle2 {
  position: fixed;
  top: 374px;
  right: 70px;
  display: none;
}
</style>
