<template>
  <div class="home" style="width: 1200PX;margin: 0 auto">
    <div class="block">
      <Button>哈哈哈哈</Button>
      <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <swipe-item>1</swipe-item>
        <swipe-item>2</swipe-item>screen_warning
        <swipe-item>3</swipe-item>
        <swipe-item>4</swipe-item>
      </swipe>
    </div>

    <div style="width: 880PX;margin: 40PX auto;overflow: hidden;">
      <div style="width: 260PX;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_01.png" alt="">
        <p style="color: #7637ff;font-size: 48PX;font-weight: bold;text-align: center;">11000万</p>
        <p style="color: #a9a9a9;font-size: 16PX;text-align: center;">累计订单交易额（元）</p>
      </div>
      <div style="width: 260PX;float: right;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_02.png" alt="">
        <p style="color: #f000ed;font-size: 48PX;font-weight: bold;text-align: center;">92万</p>
        <p style="color: #a9a9a9;font-size: 16PX;text-align: center;">累计订单交易量（笔）</p>
      </div>
    </div>
    <div style="text-align:center;margin-top: 80PX;overflow: hidden;">
      <div style="width: 300PX;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_06.png" alt="">
        <p style="color:#07b2e2;font-size: 48PX;font-weight: bold;text-align: center;">680691</p>
        <p style="color: #a9a9a9;font-size: 16PX;text-align: center;">会员总数</p>
      </div>
      <div style="width: 300PX;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_03.png" alt="">
        <p style="color:#07b2e2;font-size: 48PX;font-weight: bold;text-align: center;">120.65</p>
        <p style="color: #a9a9a9;font-size: 16PX;text-align: center;">平均客单价（元）</p>
      </div>
      <div style="width: 300PX;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_04.png" alt="">
        <p style="color:#07b2e2;font-size: 48PX;font-weight: bold;text-align: center;">4800</p>
        <p style="color: #a9a9a9;font-size: 16PX;text-align: center;">投入设备总数（台）</p>
      </div>
      <div style="width: 300PX;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_05.png" alt="智能购物车" title="智能购物车">
        <p style="color:#07b2e2;font-size: 48PX;font-weight: bold;text-align: center;">95%</p>
        <p style="color: #a9a9a9;font-size: 16PX;text-align: center;">每天设备使用率</p>
      </div>
    </div>

    <div style="text-align:center;margin-top: 100PX;">
      <p class="nav_title">极汇购 – 商超智能购物车解决方案提供商</p>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <video src="https://rescdn.www.smartconns.com/assets/img/01_video.mp4" controls="controls" style="margin-top: 80PX;width: 1200PX;">您的浏览器不支持视频播放</video>
    </div>

    <div style="text-align:center;margin-top: 100PX;">
      <h2>智能购物车应用价值</h2>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_value_01.png" alt="" style="margin-top: 80PX;"></div>
      <div style="text-align:center;margin-top: 80PX;overflow: hidden;">
        <div style="width: 400PX;float: left;">
          <img src="https://rescdn.www.smartconns.com/assets/img/01_value_02.png" alt="" style="float: left;">
          <div style="float: left;width: 250PX">
          <p style="font-size: 24PX;font-weight: bold;text-align: left;"><span class="square" style="margin-right: 10PX;"></span>降低成本</p>
          <p style="color: #a9a9a9;font-size: 16PX;text-align: left;margin-top: 10PX;line-height: 29PX;">降低30-60%的收银人力成本
            <br>
            省掉部分纸质宣传物料费用</p>
          </div>
        </div>
        <div style="width: 400PX;float: left;">
          <img src="https://rescdn.www.smartconns.com/assets/img/01_value_03.png" alt="" style="float: left;">
          <div style="float: left;width: 250PX">
            <p style="font-size: 24PX;font-weight: bold;text-align: left;"><span class="square" style="margin-right: 10PX;"></span>增效</p>
            <p style="color: #a9a9a9;font-size: 16PX;text-align: left;margin-top: 10PX;line-height: 29PX;">提升人效、坪效 <br> 提高10%以上客单价 <br> 广告营销收入增加20%</p>
          </div>
        </div>
        <div style="width: 400PX;float: left;">
          <img src="https://rescdn.www.smartconns.com/assets/img/01_value_04.png" alt="" style="float: left;">
          <div style="float: left;width: 250PX">
            <p style="font-size: 24PX;font-weight: bold;text-align: left;"><span class="square" style="margin-right: 10PX;"></span>提升购物体验</p>
            <p style="color: #a9a9a9;font-size: 16PX;text-align: left;margin-top: 10PX;line-height: 29PX;">自助结算 <br>
              免排队<br>
              智能导购<br>
              个性化促销推荐</p>
          </div>
        </div>
      </div>
    </div>

    <div style="text-align:center;margin-top: 100PX;">
      <h2>资讯中心</h2>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <div class="hover_blue" style="margin-top: 80PX;">
        <div @click="go_art_path('/news_detail',item.id)" v-for="item in data_list"  style="float: left;width: 400PX">
          <div style="width: 300PX;height: 300PX;box-shadow: 1PX 1PX 16PX #dddddd;overflow: hidden;margin: 0 auto;">
<!--            <img src="https://rescdn.www.smartconns.com/assets/img/01-IMG_9105.png" alt="">-->
            <img :src="'http://rescdn.www.smartconns.com/' + item.cover" alt="" style="height: 212PX">
            <div style="padding: 10PX 10PX 0 10PX;">
              <p style="text-align: left;font-size: 18PX;">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both;"></div>
      <div @click="go_path('/news')" style="width: 132PX;height: 40PX;text-align: center;border-radius: 40PX;background-color: #00b0e1;font-size: 12PX;line-height: 40PX;color: #fff;margin: 80PX auto;cursor: pointer;">查看更多</div>
    </div>
    <div style="text-align:center;margin-top: 100PX;margin-bottom: 100PX;">
      <h2>合作伙伴</h2>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <div class="clearfix" style="margin-top: 40PX;">
        <div  style="float: left;width: 240PX;text-align: center;"><img src="https://rescdn.www.smartconns.com/assets/img/01_partner_logo_01.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="https://rescdn.www.smartconns.com/assets/img/01_partner_logo_02.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="https://rescdn.www.smartconns.com/assets/img/01_partner_logo_03.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="@/assets/image/01_partner_logo_10.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="@/assets/image/01_partner_logo_14.png" alt=""></div>
      </div>
      <div class="clearfix" style="margin-top: 40PX;">
        <div  style="float: left;width: 240PX;text-align: center;"><img src="https://rescdn.www.smartconns.com/assets/img/01_partner_logo_06.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="https://rescdn.www.smartconns.com/assets/img/01_partner_logo_07.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="@/assets/image/01_partner_logo_11.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="@/assets/image/01_partner_logo_12.png" alt=""></div>
        <div  style="float: left;width: 240PX;text-align: center;"><img src="@/assets/image/01_partner_logo_13.png" alt=""></div>
      </div>
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button,Swipe, SwipeItem } from 'vant';


export default {
    name: 'index',
    components: {
        Button,Swipe, SwipeItem
    },
    data () {
        return {
            banner_list: [],
            data_list: [],
        }
    },
    methods: {
        go_art_path (path, id) {
            this.$router.push({
                path: path,
                query: { id: id }
            })
        },
        get_banner_list () {
            const url = 'http://www.smartconns.com/jhg/banner/get'
            this.$api.get(this, url, {}, res => {
                this.banner_list = res.data.data
            })
        },
        get_table_list () {
            const url = 'http://www.smartconns.com/jhg/summaryList'
            this.$api.get(this, url, {}, res => {
                this.data_list = res.data.data.slice(0,3)
            })
        },
        go_path (path) {
            this.$router.push({ path: path })

        },
    },
    created () {
        this.get_banner_list ()
        this.get_table_list ()
    }
}
</script>
<style lang="scss" scoped>
  .square {
    background-color: #00b0e1;
    display: inline-block;
    width: 10PX;
    height: 10PX;
  }
  .hover_blue>div>div {
    cursor: pointer;
  }
  .hover_blue>div>div:hover {
    box-shadow: 1PX 1PX 16PX #aaecff!important;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20PX;
    line-height: 150PX;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
