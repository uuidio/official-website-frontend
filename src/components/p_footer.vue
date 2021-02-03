<template>
  <div class="footer">
    <div style="width: 1200px;margin: 0 auto;overflow: hidden;">
    <div class="nav_list" style="color: #fff">
      <div style="margin-top: 30px;">
        <ul>
          <li  v-for="(item,index) in nav" :key="index" :class="c_index==index?'active':''" @click="go_path(item.path,index)">{{item.name}}</li>
        </ul>
      </div>
      <div style="clear: both;"></div>
      <div class="info" style="margin-top: 30px;margin-left: 30px;width:1200px;">
        <div style="float: left;">
          <div><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_address.png" alt="" style="width: 20px;"> 广州黄埔区科学大道中科汇金谷一街12号6楼</div>
          <div><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_tel.png" alt="" style="width: 20px;"> Tel：020-3203 3815</div>
          <div><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_email.png" alt="" style="width: 20px;"> service@smartconns.com </div>
          <div>粤ICP备13090180号 <img src="https://rescdn.www.smartconns.com/assets/img/01_jinghui.png" alt="" style="width: 20px;"> 粤公网安备 44011602000376号 </div>
        </div>
        <div style="float: right;width:200px;margin-right:20px;margin-top: -59px;"><img src="https://rescdn.www.smartconns.com/assets/img/01_footer_code.png" alt="">
          <br><p style="text-align: center;">播丫科技</p></div>
        <div style="clear: both;"></div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
    components: {},
    mounted () {
        $.each(this.nav,(index,ele) =>{
            if(this.$route.path.indexOf(ele.path)!=-1){
                this.c_index = index
            }
        })
    },
    data () {
        return {
            nav:  [
                { name: '首页', path: '/index' },
                { name: '智能设备', path: '/smart' },
                { name: '解决方案', path: '/solution' },
                { name: '广告资源', path: '/ad' },
                { name: '商务合作', path: '/acooperation'},
                { name: '关于我们', path: '/about'},
                { name: '新闻资讯', path: '/news'},
                { name: '新闻资讯详情', path: '/news_detail'}
            ],
            c_index: 0
        }
    },
    methods: {
        go_path (path,index) {
            this.c_index = index
            this.$router.push({ path: path })
            console.log(this.c_index,'hahah')
        }
    },
}
</script>

