<template>
  <div class="home" style="width: 1400PX;margin: 0 auto">
    <div class="block">
      <div id="containDiv" style="margin-top: 80PX;">
        <div class="left monthList" style="float:left">
          <div @click="go_month()" class="month active">
            <p style="margin-top: 60PX;"><span style="font-size: 26PX;">全部</span></p>
          </div>
          <div @click="go_month(item)" class="month" v-for="item in month_list">
            <p><span>{{item.slice(5, 7)}}</span>月</p>
            <p>{{item.slice(0, 4)}}年</p>
          </div>
        </div>
        <div id="news_main" class="left" style="float:left">
          <div id="news_List">
            <ul style="padding: 0PX;">
              <li v-for="item in filter_data_list" @click="go_path('/news_detail',item.id)" style="cursor: pointer;">
                <div style="float:left; width:300PX; height: 200PX;">
                  <img :src="'http://rescdn.www.smartconns.com/' + item.cover" style="height:200PX; width:300PX;"/>
                </div>
                <div class="introduce">
                  <h2>{{item.title}}</a></h2>
                  <div>{{item.summary}}</div>
                  <span>{{item.day}}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'index',
    components: {},
    data () {
        return {
            filter_data_list: [],
            data_list: [],
            month_list: [],
            active: 'active',
            c_month_index: 0,
        }
    },
    created () {
        this.get_table_list()
    },
    methods: {
        sendTOParent(){
            this.$emit('listenToChildEvent',5)
        },
        getMyDate (date) {
            let oDate = new Date(date)
            let oYear = oDate.getFullYear()
            let oMonth = oDate.getMonth() + 1
            let oDay = oDate.getDate()
            let oHour = oDate.getHours()
            let oMin = oDate.getMinutes()
            let oTime = oYear + '/' + this.getzf(oMonth) + '/' + this.getzf(oDay) + ' ' + this.getzf(oHour) + ':' + this.getzf(oMin)//最后拼接时间
            return oTime
        },
        getzf (num) {
            if (parseInt(num) < 10) {
                num = '0' + num
            }
            return num
        },
        get_table_list () {
            let self = this
            const url = 'http://www.smartconns.com/jhg/summaryList'
            this.$api.get(this, url, {}, res => {
                this.data_list = res.data.data
                $.each(self.data_list, (index, ele) => {
                    console.log(ele)
                    ele['day'] = self.getMyDate(ele.createTime)
                    ele['month'] = ele['day'].slice(0, 7)
                    this.month_list.push(ele['day'].slice(0, 7))
                })
                this.month_list = [...new Set(this.month_list)]
                this.filter_data_list = JSON.parse(JSON.stringify(this.data_list))
            })
        },
        go_path (path, id) {
            this.$router.push({
                path: path,
                query: { id: id }
            })
        },
        go_month (month) {
            this.filter_data_list = JSON.parse(JSON.stringify(this.data_list))
            if (month) {
                this.filter_data_list = this.filter_data_list.filter((ele) => {
                    return ele.month == month
                })
            }
            console.log(this.filter_data_list)
        },
    },
    mounted () {
        setTimeout(()=>{
            $(".month").click(function(){
                $(".month").removeClass("active");
                $(this).addClass("active");
            })
        },1500)
        this.sendTOParent()
    }
}
</script>
<style lang="scss" scoped>
  /* 月份  */

  #containDiv > .monthList {
    width: 205PX;
    height: 100%;
  }

  /*#containDiv>.active {
    border-right: 7PX solid #F3E757;
  }*/

  .monthList > .month {
    margin-bottom: 20PX;
    border-right: 7PX solid #F9F9F9;
  }

  .monthList > .active,
  .monthList > a > .active,
  .monthList > .month:hover {
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

  .month > p {
    margin: 0PX;
  }

  .month > p > span {
    font-size: 55PX;
    font-weight: 600;
  }

  .rich_media_content {
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
    margin-left: 60PX;
  }

  #position > span {
    font-weight: bold;
    color: #182B3B;
  }

  /* 标题  */

  #news_title {
    text-align: center;
    color: #182B3B;
  }

  #news_title > h1 {
    padding-top: 50PX;
    font-size: 30PX;
    font-weight: bold;
    margin: 0PX;
  }

  #news_title > h4 {
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

  #news_text > p {
    text-indent: 2em;
  }

  #news_text > b {
    font-size: 18PX;
  }

  #news_text > .news_img {
    width: 100%;
    margin: 0 auto;
    margin: 30PX 0PX;
    text-align: center;
  }

  .news_img > img {
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
    margin: 50PX 0PX 100PX 0PX;
    list-style: none;
  }

  .introduce {
    float: right;
    width: 600PX;
    height: 200PX;
  }

  .introduce > h2 {
    margin: 0PX;
    font-size: 24PX;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .introduce > div {
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

  .introduce > span {
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
