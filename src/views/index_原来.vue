<template>
  <div class="home" :class="$store.state.pc_or_mobile=='移动'?'m_home':''" style="width: 1200px;margin: 0 auto">
    <div class="block">
      <el-carousel height="484px" arrow="always" trigger="click">
        <el-carousel-item v-for="item in banner_list"><img :src="'http://rescdn.www.smartconns.com/' + item.pic" alt=""></el-carousel-item>
      </el-carousel>
    </div>

    <div style="width: 880px;margin: 40px auto;overflow: hidden;">
      <div style="width: 260px;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_01.png" alt="">
        <p style="color: #7637ff;font-size: 48px;font-weight: bold;text-align: center;">11000万</p>
        <p style="color: #a9a9a9;font-size: 16px;text-align: center;">累计订单交易额（元）</p>
      </div>
      <div style="width: 260px;float: right;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_02.png" alt="">
        <p style="color: #f000ed;font-size: 48px;font-weight: bold;text-align: center;">92万</p>
        <p style="color: #a9a9a9;font-size: 16px;text-align: center;">累计订单交易量（笔）</p>
      </div>
    </div>
    <div style="text-align:center;margin-top: 80px;overflow: hidden;">
      <div style="width: 300px;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_06.png" alt="">
        <p style="color:#07b2e2;font-size: 48px;font-weight: bold;text-align: center;">680691</p>
        <p style="color: #a9a9a9;font-size: 16px;text-align: center;">会员总数</p>
      </div>
      <div style="width: 300px;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_03.png" alt="">
        <p style="color:#07b2e2;font-size: 48px;font-weight: bold;text-align: center;">120.65</p>
        <p style="color: #a9a9a9;font-size: 16px;text-align: center;">平均客单价（元）</p>
      </div>
      <div style="width: 300px;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_04.png" alt="">
        <p style="color:#07b2e2;font-size: 48px;font-weight: bold;text-align: center;">4800</p>
        <p style="color: #a9a9a9;font-size: 16px;text-align: center;">投入设备总数（台）</p>
      </div>
      <div style="width: 300px;float: left;">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_data_05.png" alt="智能购物车" title="智能购物车">
        <p style="color:#07b2e2;font-size: 48px;font-weight: bold;text-align: center;">95%</p>
        <p style="color: #a9a9a9;font-size: 16px;text-align: center;">每天设备使用率</p>
      </div>
    </div>

    <div style="text-align:center;margin-top: 100px;">
      <p class="nav_title">播丫购 – 商超智能购物车解决方案提供商</p>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <video src="https://rescdn.www.smartconns.com/assets/img/01_video.mp4" controls="controls" style="margin-top: 80px;width: 1200px;">您的浏览器不支持视频播放</video>
    </div>

    <div style="text-align:center;margin-top: 100px;">
      <h2>智能购物车应用价值</h2>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_value_01.png" alt="" style="margin-top: 80px;"></div>
      <div style="text-align:center;margin-top: 80px;overflow: hidden;">
        <div style="width: 400px;float: left;">
          <img src="https://rescdn.www.smartconns.com/assets/img/01_value_02.png" alt="" style="float: left;">
          <div style="float: left;width: 250px">
          <p style="font-size: 24px;font-weight: bold;text-align: left;"><span class="square" style="margin-right: 10px;"></span>降低成本</p>
          <p style="color: #a9a9a9;font-size: 16px;text-align: left;margin-top: 10px;line-height: 29px;">降低30-60%的收银人力成本
            <br>
            省掉部分纸质宣传物料费用</p>
          </div>
        </div>
        <div style="width: 400px;float: left;">
          <img src="https://rescdn.www.smartconns.com/assets/img/01_value_03.png" alt="" style="float: left;">
          <div style="float: left;width: 250px">
            <p style="font-size: 24px;font-weight: bold;text-align: left;"><span class="square" style="margin-right: 10px;"></span>增效</p>
            <p style="color: #a9a9a9;font-size: 16px;text-align: left;margin-top: 10px;line-height: 29px;">提升人效、坪效 <br> 提高10%以上客单价 <br> 广告营销收入增加20%</p>
          </div>
        </div>
        <div style="width: 400px;float: left;">
          <img src="https://rescdn.www.smartconns.com/assets/img/01_value_04.png" alt="" style="float: left;">
          <div style="float: left;width: 250px">
            <p style="font-size: 24px;font-weight: bold;text-align: left;"><span class="square" style="margin-right: 10px;"></span>提升购物体验</p>
            <p style="color: #a9a9a9;font-size: 16px;text-align: left;margin-top: 10px;line-height: 29px;">自助结算 <br>
              免排队<br>
              智能导购<br>
              个性化促销推荐</p>
          </div>
        </div>
      </div>
    </div>

    <div style="text-align:center;margin-top: 100px;">
      <h2>资讯中心</h2>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <div class="hover_blue" style="margin-top: 80px;">
        <div @click="go_art_path('/news_detail',item.id)" v-for="item in data_list"  style="float: left;width: 400px">
          <div style="width: 300px;height: 300px;box-shadow: 1px 1px 16px #dddddd;overflow: hidden;margin: 0 auto;">
<!--            <img src="https://rescdn.www.smartconns.com/assets/img/01-IMG_9105.png" alt="">-->
            <img :src="'http://rescdn.www.smartconns.com/' + item.cover" alt="" style="height: 212px">
            <div style="padding: 10px 10px 0 10px;">
              <p style="text-align: left;font-size: 18px;">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both;"></div>
      <div @click="go_path('/news')" style="width: 132px;height: 40px;text-align: center;border-radius: 40px;background-color: #00b0e1;font-size: 12px;line-height: 40px;color: #fff;margin: 80px auto;cursor: pointer;">查看更多</div>
    </div>
    <div style="text-align:center;margin-top: 100px;margin-bottom: 100px;">
      <h2>合作伙伴</h2>
      <div><img src="https://rescdn.www.smartconns.com/assets/img/01_title_line.png" alt=""></div>
      <div class="clearfix" style="margin-top: 40px;">
        <div v-for="item in partner_list" style="float: left;width: 240px;text-align: center;">
          <img :src="'http://rescdn.www.smartconns.com/' + item.logoUrl">
        </div>

      </div>
<!--      <div class="clearfix" style="margin-top: 40px;">-->
<!--        <div  style="float: left;width: 240px;text-align: center;"><img src="@/assets/image/01_partner_logo_06.png" alt=""></div>-->
<!--        <div  style="float: left;width: 240px;text-align: center;"><img src="@/assets/image/01_partner_logo_07.png" alt=""></div>-->
<!--        <div  style="float: left;width: 240px;text-align: center;"><img src="@/assets/image/01_partner_logo_11.png" alt=""></div>-->
<!--        <div  style="float: left;width: 240px;text-align: center;"><img src="@/assets/image/01_partner_logo_12.png" alt=""></div>-->
<!--        <div  style="float: left;width: 240px;text-align: center;"><img src="@/assets/image/01_partner_logo_13.png" alt=""></div>-->
<!--      </div>-->
    </div>
    <div style="clear:both"></div>
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
        get_partner() {
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
        this.get_banner_list()
        this.get_table_list()
        this.get_partner()
        console.log(this.$store.state.pc_or_mobile)
    }
}
</script>
<style lang="scss" scoped>
  .square {
    background-color: #00b0e1;
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .hover_blue>div>div {
    cursor: pointer;
  }
  .hover_blue>div>div:hover {
    box-shadow: 1px 1px 16px #aaecff!important;
  }
  .m_home {
    width: 100% !important;
  }
</style>
