<template>
  <div id="app">
    <div class="header" style="width: 1200px;margin: 0 auto">
      <div class="logo">
        <img src="https://rescdn.www.smartconns.com/assets/img/01_logo.png" alt="智能购物车" title="智能购物车">
      </div>
      <div class="nav_list">
        <ul>
          <li v-for="(item,index) in nav" :class="c_index==index?'active':''" @click="go_path(item.path,index)">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <router-view v-on:listenToChildEvent="showMsgfromChild"/>
    </keep-alive>
    <div class="footer" style="width: 100%;min-width: 1200px;">
      <div style="width: 1200px;margin: 0 auto;padding: 1px 0 30px 0; " class="clearfix">
        <div class="nav_list" style="color: #fff">
          <div style="margin-top: 30px;">
            <ul>
              <li v-for="(item,index) in nav" :key="index" :class="c_index==index?'active':''"
                  @click="go_path(item.path,index)">{{item.name}}
              </li>
            </ul>
          </div>
          <div style="clear: both;"></div>
          <div class="info" style="margin-top: 30px;margin-left: 30px;width:1200px;position: relative;">
            <div style="float: left;">
              <div><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_address.png" alt=""
                        style="width: 20px;margin-top: -5px;vertical-align: middle;"> <span>广州黄埔区科学大道中科汇金谷一街12号6楼</span>
              </div>
              <div><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_tel.png" alt=""
                        style="width: 20px;margin-top: -5px;vertical-align: middle;"> <span>Tel：020-3203 3815</span>
              </div>
              <div><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_email.png" alt=""
                        style="width: 20px;margin-top: -5px;vertical-align: middle;">
                <span>service@smartconns.com</span></div>
              <div>粤ICP备13090180号 <img src="https://rescdn.www.smartconns.com/assets/img/01_jinghui.png" alt=""
                                       style="width: 16px;margin-top: -4px;vertical-align: middle;"> <span>粤公网安备 44011602000376号</span>
              </div>
            </div>
            <div style="float: right;width:200px;margin-right:20px;margin-top: -59px;"><img
              src="https://rescdn.www.smartconns.com/assets/img/01_footer_code.png" alt="">
              <br>
              <p style="text-align: center;">极汇科技</p></div>
            <div style="color: #666;position: absolute;top: -69px;right: 396px;"><span>友情链接</span> <span
              @click="post100" class="pointme" style="color: #333;margin-left: 16px;cursor: pointer;">快递100</span></div>
            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    components: {},
    data () {
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
        go_path (path, index) {
            this.c_index = index
            this.$router.push({ path: path })
        },
        showMsgfromChild (index) {
            this.c_index = index
        },
        post100 () {
            window.open('https://api.kuaidi100.com/', '_blank')
        },
        pc_or_mobile () {
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
    created () {
        $.each(this.nav, (index, ele) => {
            if (this.$route.path.indexOf(ele.path) != -1) {
                this.c_index = index
            }
        })
        // alert(this.pc_or_mobile())
    },
    mounted () {
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
  .pointme:hover {
    color: #fff !important;
  }

  .footer {
    background-color: #959595;
    border-bottom: #333 solid 1px;

    .logo {
      margin-top: 30px;
      float: left;
      width: 230px;
    }
  }

  .footer .nav_list {
    width: 626px;

    li {
      color: #ffffff;
      cursor: pointer;
      margin-left: 30px;
      float: left;
      line-height: 33px;
    }
  }

  .footer .active {
    border-bottom: #fff solid 2px;
    color: #fff;
  }

  .info {
    line-height: 41px;
  }
</style>
