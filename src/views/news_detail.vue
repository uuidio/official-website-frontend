<template>
  <div class="home" style="width: 1200px;margin: 0 auto">
    <div class="block">
      <div class="clearfix" id="containDiv" style="margin-top: 80px;">
        <div id="position">
          <a @click="go_path('/news')" style="color: #A9A9A9;cursor: pointer;">播丫资讯</a> >
          <span>资讯详情</span>
        </div>
      </div>
      <h2 style="text-align: center;margin-bottom: 80px;margin-top: 40px;">{{data_list.title}}</h2>
      <div class="art_detial" v-html="data_list.content" style="width:900px;line-height: 35px;margin: 0 auto;"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'index',
    components: {

    },
    created () {
        this.get_table_list()
    },
    mounted () {
        this.sendTOParent()
    },
    data () {
        return {
            id: this.$route.query.id,
            data_list: [],
        }
    },
    methods: {
        go_path (path,index) {
            this.$router.push({ path: path })
        },
        get_table_list () {
            const self = this
            const url = '/jhg/getDetail?articleId=' + self.id
            this.$api.get(this, url, {}, res => {
                this.data_list = res.data.data
            })
        },
        sendTOParent () {
            this.$emit('listenToChildEvent',5)
        }
    }
}
</script>
<style lang="scss" scoped>
  /* 月份  */

  #containDiv>.monthList {
    width: 205px;
    height: 100%;
  }

  /*#containDiv>.active {
    border-right: 7px solid #F3E757;
  }*/

  .monthList>.month {
    margin-bottom: 20px;
    border-right: 7px solid #F9F9F9;
  }
  .monthList>.active,
  .monthList>a>.active,
  .monthList>.month:hover {
    border-right: 7px solid #00b0e1;
  }

  a {
    text-decoration: none;
  }

  .month {
    background-color: #F9F9F9;
    width: 200px;
    height: 204px;
    text-align: center;
    vertical-align: middle;
    color: #182B3B;
    font-weight: 400;
    font-size: 14px;
    padding-top: 45px;
    cursor: pointer;
  }

  .month>p {
    margin: 0px;
  }

  .month>p>span {
    font-size: 55px;
    font-weight: 600;
  }
  .rich_media_content{
    width: 780px;
  }

  /* 定位条   */

  #news_main {
    width: 986px;
    padding-left: 60px;
    text-align: left;
  }

  #position {
    font-size: 16px;
    color: #A9A9A9;
    float: left;
  }

  #position>span {
    font-weight: bold;
    color: #182B3B;
  }

  /* 标题  */

  #news_title {
    text-align: center;
    color: #182B3B;
  }

  #news_title>h1 {
    padding-top: 50px;
    font-size: 30px;
    font-weight: bold;
    margin: 0px;
  }

  #news_title>h4 {
    font-size: 16px;
    color: #A9A9A9;
    margin: 15px 0px 54px 0px;
  }

  #news_text {
    color: #777777;
    font-size: 16px;
    line-height: 2;
    margin-bottom: 100px;
  }

  #news_text>p {
    text-indent: 2em;
  }

  #news_text>b {
    font-size: 18px;
  }

  #news_text>.news_img {
    width: 100%;
    margin: 0 auto;
    margin: 30px 0px;
    text-align: center;
  }

  .news_img>img {
    width: 800px;
    /*height: 550px;*/
  }
  .news_img span {
    display: block;
    color: #A9A9A9;
    margin: 0 auto;
    line-height: 1em;
  }

  /* 新闻列表-简介  */
  #news_List li {
    height: 200px;
    margin:50px 0px 100px 0px;
    list-style: none;
  }

  .introduce{
    float: right;
    width: 600px;
    height: 200px;
  }

  .introduce>h2 {
    margin: 0px;
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .introduce>div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 2.4em;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #777777;
    height: 120px;
  }

  .introduce>span {
    font-size: 16px;
    color: #A9A9A9;
  }

  /* 上下篇  */

  .next_title, .prev_title {
    font-size: 16px;
    font-weight: bold;
    color: #182B3B;
    cursor: pointer;
  }

  .art_detial img{
    max-width: 100%!important;
  }
</style>
