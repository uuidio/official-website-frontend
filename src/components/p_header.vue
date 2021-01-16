<template>
  <div class="header" style="width: 1200px;margin: 0 auto">
    <div class="logo">
      <img src="https://rescdn.www.smartconns.com/assets/img/01_logo.png" alt="">
    </div>
    <div class="nav_list">
      <ul>
        <li v-for="(item,index) in nav" :class="c_index==index?'active':''" @click="go_path(item.path,index)">{{item.name}}</li>
      </ul>
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
        }
    },
}
</script>
<style lang="scss" scoped>
  .header {
    height: 110px;
    .logo {
      margin-top: 30px;
      float: left;
      width: 230px;
    }
  }

  .nav_list {
    margin-top: 37px;
    float: right;
    width: 626px;

    li {
      cursor: pointer;
      margin-left: 30px;
      float: left;
      line-height: 33px;
    }
  }

  .active {
    border-bottom: #00b0e1 solid 2px;
    color: #00b0e1;
  }
</style>
