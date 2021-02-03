<template>
  <div id="app">
    <keep-alive>
      <router-view v-on:listenToChildEvent="showMsgfromChild"/>
    </keep-alive>
    <div class="foot">
      <div style="width: 1200px;margin: 0 auto">
        <div class="foot1">
          <div><img src="./assets/image/地址.png"/> 广州市天河区元岗路 616-2</div>
          <div><img src="./assets/image/电话.png"/> 13926476310</div>
          <div><img src="./assets/image/邮箱.png"/> 4578995@qq.com</div>
          <div>粤ICP备2021008656号-1<img src="./assets/image/01_jinghui.png">粤公网安备 44011602000376号</div>
        </div>
        <div class="foot2"><img src="./assets/image/qrcode_for_gh_0addc81770ea_258.png"/></div>
      </div>
    </div>
    <div class="info">
      <div class="right">
        <div class="right_1">
          <img src="./assets/image/微信.png"/>
          <div class="erweima">
            <div class="right1">
              <div class="right1_1">
                <img src="./assets/image/qrcode_for_gh_0addc81770ea_430.png"/>
              </div>
            </div>
            <div class="triangle1">
              <div class="triangle1_1">
                <img src="./assets/image/矩形18拷贝2.png"/>
              </div>
            </div>
          </div>
        </div>
        <div class="right_2">
          <img src="./assets/image/图层34.png"/>
          <div class="my_phone">
            <div class="right2">18925025105</div>
            <div class="triangle2">
              <div class="triangle2_1">
                <img src="./assets/image/矩形18拷贝2.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    components: {},
    data() {
      return {
        nav: [
          {
            name: '首页',
            path: '/index'
          },
          {
            name: '智能设备',
            path: '/smart'
          },
          {
            name: '解决方案',
            path: '/solution'
          },
          {
            name: '广告资源',
            path: '/ad'
          },
          {
            name: '商务合作',
            path: '/acooperation'
          },
          {
            name: '新闻资讯',
            path: '/news'
          },
          {
            name: '关于我们',
            path: '/about'
          },
          // { name: '新闻资讯详情', path: '/news_detail'}
        ],
        c_index: 0
      }
    },
    methods: {
      go_path(path, index) {
        this.c_index = index
        this.$router.push({path: path})
      },
      showMsgfromChild(index) {
        this.c_index = index
      },
      post100() {
        window.open('https://api.kuaidi100.com/', '_blank')
      },
      pc_or_mobile() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          return '移动'
        } else if (/(Android)/i.test(navigator.userAgent)) {
          return '移动'
        } else {
          return 'pc'
        }
      },
    },
    computed: {},
    watch: {},
    created() {
      $.each(this.nav, (index, ele) => {
        if (this.$route.path.indexOf(ele.path) != -1) {
          this.c_index = index
        }
      })
      this.$store.commit('pc_or_mobile', this.pc_or_mobile())
    },
    mounted() {
      // window.onresize = function () {
      //     localStorage.window_width = document.body.clientWidth
      // }
    }
  }
</script>
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    /*background: transparent;*/
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset, img {
    border: 0;
  }

  address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  caption, th {
    text-align: left;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 200%;
    font-weight: normal;
  }

  :focus {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  a:hover img {
    border: none;
  }

  a:active {
    noOutline: expression(this.onFocus=this.blur());
  }

  /*清除浮动*/
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .clearfix {
    display: inline-block;
  }

  /* Hides from IE-mac \*/
  * html .clearfix {
    height: 1%;
  }

  .clearfix {
    display: block;
  }

  .nav_title {
    font-size: 30px;
  }

  .art_detial img {
    max-width: 100% !important;
  }
</style>
<style lang="scss" scoped>
  .header {
    height: 110px;

    .logo {
      margin-top: 30px;
      float: left;
      width: 230px;
    }
  }

  .header .nav_list {
    margin-top: 37px;
    float: right;
    width: 626px;

    li {
      cursor: pointer;
      margin-left: 30px;
      float: left;
      line-height: 33px;
      color: #333;
      font-size: 16px;
    }
  }

  .header .active {
    border-bottom: #00b0e1 solid 2px;
    color: #00b0e1 !important;
  }

</style>
<style lang="scss" scoped>
  .foot {
    height: 258px;
    background-color: #1b232e;
  }

  .foot1 {
    float: left;
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
    cursor: pointer;
    position: fixed;
    top: 254px;
    right: 90px;
    width: 130px;
    height: 130px;
    background-color: #4a4a4a;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    /*display: none;*/
  }
  .erweima,.my_phone {
    display: none;
  }
  .right_1,.right_2 {
    cursor: pointer;
  }
  .right_1:hover>.erweima,.right_2:hover>.my_phone{
    display: block!important;
  }
  .right1_1 {
    height: 120px;
    width: 120px;
    margin-top: 4px;
  }
  .right1_1 img{
    width: 122px;
    height: 122px;
    margin-left: 3px;
  }
  .triangle1 {
    position: fixed;
    top: 298px;
    right: 70px;
    /*display: none;*/
  }

  .right2 {
    position: fixed;
    top: 330px;
    right: 90px;
    width: 130px;
    height: 130px;
    background-color: #4a4a4a;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    text-align: center;
    line-height: 120px;
    color: #ffffff;
    /*display: none;*/
  }

  .triangle2 {
    position: fixed;
    top: 374px;
    right: 70px;
    /*display: none;*/
  }
</style>
