<template>
  <div ref="secondMenu">
    <div
      class="secondMenuSub"
      v-for="item in secondMenuList"
      :key="item.id"
    >
      <!-- 头部 -->
      <div
        class="secondMenuHeader"
        :class="{active:item.active}"
        @click="clickTitle(item)"
        :ref="`secondMenuHeader-${item.id}`"
      >
        <i
          class="el-icon-caret-right fontSet"
          :class="{none:!item.icon}"
        ></i> <span>{{item.className}}</span>
      </div>
      <!-- 子项 -->
      <template v-if="item.active">
        <div
          class="secondMenuContent"
          :ref="`secondMenuContent-${item.id}-${ele.id}`"
          :class="{active:ele.active && item.active}"
          v-for="(ele, index) in item.children"
          :key="ele.id"
          @click="clickSub(item,ele, index)"
        >
          <i class="el-icon-caret-right fontSet"></i> <span class="className">{{ele.className}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: 'Menu', // 组件的name属性（后面有提到这里有个坑）
  data () {
    return {
      secondMenuList: [],
      ArrOffsetTop: [],
      activeIndex: 0,
      activeSecondIndex: 0
    }
  },
  props: {
    MenuList: {
      type: Array
    }
  },
  watch:{
    MenuList:{
      handler:'_initData',
      deep:true,
      immediate:true
    }
  },
  created(){
    window.onresize = ()=>{
      this._initData()
    }
  },
  methods: {
    _initData () {
      this.secondMenuList = _.cloneDeep(this.MenuList)
      this.$nextTick(()=>{
        this.__initScrollTop()
      })
    },
    __initScrollTop () {
      this.ArrOffsetTop = []
      this.MenuList.forEach((item, index) => {
        this.ArrOffsetTop.push(this.$refs[`secondMenuHeader-${item.id}`][0].offsetTop)
        if (item.active) {
          this.activeIndex = index
          item.children.forEach((ele, index1) => {
            if (ele.active) {
              this.activeSecondIndex = index1
            }
            this.ArrOffsetTop.push(this.$refs[`secondMenuContent-${item.id}-${ele.id}`][0].offsetTop)
          })
        }
      })
      console.log(this.ArrOffsetTop);
    },
    // 一级二级公共操作部分
    commonAction (item) {
      // 1. 默认关闭全部，再打开当前的
      this.secondMenuList.forEach(ele => {
        ele.active = false
      })
      item.active = true
      // 2. 子元素默认激活第一个
      item.children.forEach(ele => {
        ele.active = false
      })
      item.children[0].active = true
    },
    // 点击头部
    clickTitle (item) {
      if (item.active) {
        item.active = false
        this.$emit('update:MenuList', this.secondMenuList)
        return
      }
      this.commonAction(item)
      this.$emit('clickTitle', item)
      this.$emit('update:MenuList', this.secondMenuList)
    },
    // 点击子菜单
    async clickSub (father, son, index) {
      // 位置滚动
      await this.$emit('clickSub', son, father, index)
    },
    // 控制当前样式变化
    _clickSub (father, son) {
      // 1. 激活父元素，激活子元素
      this.commonAction(father)
      father.children.forEach(ele => {
        ele.active = false
      })
      son.active = true
    },
    // 控制右侧选中
    _scrollAnimate(nowIndex){
      console.dir(this.$refs.secondMenu.parentElement);
      // 屏幕高度
      let offsetHeight = this.$refs.secondMenu.parentElement.offsetHeight
      // 当前滚动高度
      let scrollTop = this.$refs.secondMenu.parentElement.scrollTop
      // 选中时的高度
      let  nowOfferSet =   this.ArrOffsetTop[this.activeIndex+ 1 +  nowIndex ]

       console.log('offsetHeight',offsetHeight);
      console.log('scrollTop',scrollTop);
      console.log('nowOfferSet',nowOfferSet);
       if(nowOfferSet > (offsetHeight + scrollTop)){
        //  当前位置 > 屏幕宽度 + 当前滚动高度 （向下滚）
         let disparity = nowOfferSet - (offsetHeight + scrollTop)
         console.log(disparity);
         $(this.$refs.secondMenu.parentElement).scrollTop(scrollTop + disparity + 30)
       }
       if(scrollTop > nowOfferSet){
         // 滚动高度 > 当前位置（向上滚）
         let disparity = scrollTop - nowOfferSet
         $(this.$refs.secondMenu.parentElement).scrollTop(scrollTop - disparity - 30)
       }
    }
  },
}
</script>

<style scoped lang="less">
.secondMenuSub {
  color: white;
  .secondMenuHeader {
    background-color: #343337;
    padding: 5px 2px;
    border-radius: 2px;
    font-size: 13px;
    box-sizing: border-box;
    transition: all 0.3s;
    cursor: pointer;
    margin-bottom: 12px;
    .fontSet {
      font-size: 8px;
      transition: all 0.3s;
    }
    .fontSet.none {
      font-size: 8px;
      color: transparent;
    }
  }
  .secondMenuHeader.active {
    color: #00c1cd !important;
    .fontSet {
      transform: rotate(90deg);
    }
  }
  .secondMenuContent {
    background-color: transparent;
    padding: 5px 2px;
    border-radius: 2px;
    font-size: 13px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 12px;
    .fontSet {
      font-size: 8px;
      color: transparent;
    }
  }
  .secondMenuContent.active {
    .className {
      color: #00c1cd !important;
    }
  }
}
</style>
