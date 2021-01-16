<template>
  <div class="home" style="width: 1200PX;margin: 0 auto">
    <div class="block">
      <div class="clearfix" id="containDiv" style="margin-top: 80PX;">
        <div id="position">
          <a @click="go_path('/news')" style="color: #A9A9A9;cursor: pointer;">极汇资讯</a> >
          <span>资讯详情</span>
        </div>
      </div>
      <h2 style="text-align: center;margin-bottom: 80PX;margin-top: 40PX;">{{data_list.title}}</h2>
      <div class="art_detial" v-html="data_list.content" style="width:900PX;line-height: 35PX;margin: 0 auto;"></div>
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
            const url = 'http://www.smartconns.com/jhg/getDetail?articleId=' + self.id
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
    width: 205PX;
    height: 100%;
  }

  /*#containDiv>.active {
    border-right: 7PX solid #F3E757;
  }*/

  .monthList>.month {
    margin-bottom: 20PX;
    border-right: 7PX solid #F9F9F9;
  }
  .monthList>.active,
  .monthList>a>.active,
  .monthList>.month:hover {
    border-right: 7PX solid #00b0e1;
  }

  a {
    text-decoration: none;
  }

  .month {
    background-color: #F9F9F9;
    width: 200PX;
    height: 204PX;
    text-align: center;
    vertical-align: middle;
    color: #182B3B;
    font-weight: 400;
    font-size: 14PX;
    padding-top: 45PX;
    cursor: pointer;
  }

  .month>p {
    margin: 0PX;
  }

  .month>p>span {
    font-size: 55PX;
    font-weight: 600;
  }
  .rich_media_content{
    width: 780PX;
  }

  /* 定位条   */

  #news_main {
    width: 986PX;
    padding-left: 60PX;
    text-align: left;
  }

  #position {
    font-size: 16PX;
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
    padding-top: 50PX;
    font-size: 30PX;
    font-weight: bold;
    margin: 0PX;
  }

  #news_title>h4 {
    font-size: 16PX;
    color: #A9A9A9;
    margin: 15PX 0PX 54PX 0PX;
  }

  #news_text {
    color: #777777;
    font-size: 16PX;
    line-height: 2;
    margin-bottom: 100PX;
  }

  #news_text>p {
    text-indent: 2em;
  }

  #news_text>b {
    font-size: 18PX;
  }

  #news_text>.news_img {
    width: 100%;
    margin: 0 auto;
    margin: 30PX 0PX;
    text-align: center;
  }

  .news_img>img {
    width: 800PX;
    /*height: 550PX;*/
  }
  .news_img span {
    display: block;
    color: #A9A9A9;
    margin: 0 auto;
    line-height: 1em;
  }

  /* 新闻列表-简介  */
  #news_List li {
    height: 200PX;
    margin:50PX 0PX 100PX 0PX;
    list-style: none;
  }

  .introduce{
    float: right;
    width: 600PX;
    height: 200PX;
  }

  .introduce>h2 {
    margin: 0PX;
    font-size: 24PX;
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
    margin-top: 10PX;
    margin-bottom: 20PX;
    color: #777777;
    height: 120PX;
  }

  .introduce>span {
    font-size: 16PX;
    color: #A9A9A9;
  }

  /* 上下篇  */

  .next_title, .prev_title {
    font-size: 16PX;
    font-weight: bold;
    color: #182B3B;
    cursor: pointer;
  }

</style>
