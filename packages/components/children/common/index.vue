<template>
  <div ref="contentBox">
    <slot v-if="commonData.needHeaderInsert" name="headerInsert"></slot>
    <div
      class="subItem"
      v-for="item in commonData.children"
      :key="item.id"
      :ref="`commonData-${item.id}`"
      @click="scrollItem(item)"
    >
      <div v-if="item.className === Collection" class="subTitle">
        {{`${item.className}(${item.children.length})`}}
      </div>
      <div v-else class="subTitle">
        {{item.className}}
      </div>
      <div class="subContend">
        <slot
          class="singleList"
          v-for=" ele in  item.children"
          :key="ele.id"
          name="singleItem"
          :item="{son:ele, father:item, gFather:commonData}"
        ></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Common', // 组件的name属性（后面有提到这里有个坑）
  data () {
    return {
      ArrOffsetTop: [], // 所有内容的offersetTop
      nowIndex: 0,   // 自定义滚动到哪个地方了
      nowIsClickScroll: false   // 控制当前是否是点击菜单而滚动
    }
  },
  watch: {
    'commonData.id': 'scrollListen'
  },
  mounted () {
    this.scrollListen()
    window.onresize = () => {
      this.scrollListen()
    }
  },
  methods: {
    scrollItem (item, nowSubIndex) {
      this.nowIsClickScroll = true

      if (nowSubIndex === 'first') {
        $(this.$refs.contentBox.parentElement).animate({ scrollTop: 0 }, 400, 'swing', () => {
          this.$emit('scrollSetMenu', this.commonData, this.commonData.children[0])
          this.nowIsClickScroll = false
        });
        return
      }
      // 控制当前是点击菜单而滚动，避免执行自定义scroll的事件
      // 开始滚动
      $(this.$refs.contentBox.parentElement).animate({ scrollTop: this.$refs[`commonData-${item.id}`][0].offsetTop - 10 + 'px' }, 400, 'swing', () => {
        this.$emit('scrollSetMenu', this.commonData, this.commonData.children[nowSubIndex])
        this.nowIsClickScroll = false
      });
    },
    scrollListen () {
      this.$nextTick(() => {
        // 获取所有的offsetTop
        this.ArrOffsetTop = []
        this.commonData.children.forEach(item => {
          this.ArrOffsetTop.push(this.$refs[`commonData-${item.id}`][0].offsetTop)
        })
        console.log(this.ArrOffsetTop);
      })

      $(this.$refs.contentBox.parentElement)[0].addEventListener('scroll', (e) => {
        let scrollTop = $(this.$refs.contentBox.parentElement)[0].scrollTop
        let nowIndex = 0

        this.ArrOffsetTop.some((ele, index) => {
          if (ele > scrollTop) {
            nowIndex = index
            return true
          }
        })
        if (this.ArrOffsetTop[this.ArrOffsetTop.length - 1] < scrollTop) {
          nowIndex = this.ArrOffsetTop.length - 1
        }
        this.nowIndex = nowIndex
        // 如果是点击菜单则不执行下面设置菜单操作
        if (this.nowIsClickScroll) {
          return
        } else {
          this.$emit('scrollSetMenu', this.commonData, this.commonData.children[nowIndex])
          // 控制左侧菜单变化到对应位置
          this.$emit('MenuScrollAnimate', nowIndex)
        }

      })

    }
  },
  props: {
    commonData: {
      type: Object
    },
    Collection: {
      type: Number
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.subItem {
  margin-bottom: 20px;
  .subTitle {
    font-size: 13px;
    color: white;
    margin-bottom: 10px;
  }
  .subContend {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-template-rows: auto;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    .singleList {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      background-color: red;
    }
  }
}
</style>
