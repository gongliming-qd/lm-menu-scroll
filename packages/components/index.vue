<template>
  <div class="centerBody">
    <!-- 二级按钮 -->
    <div class="leftMenu">
      <Menu
        ref="Menu"
        :MenuList.sync="secondMenuList"
        @clickTitle="secondMenuChange"
        @clickSub="secondContentChange"
      ></Menu>
    </div>
    <div class="rightContent">
      <Common
        v-if="currentView === 'Common'"
        ref="common"
        :commonData="commonData"
        @scrollSetMenu="scrollSetMenu"
        @MenuScrollAnimate="MenuScrollAnimate"
        :Collection="Collection"
      >
        <template v-slot:headerInsert>
          <slot
            name="headerInsert"
            :item="commonData"
          ></slot>
        </template>
        <template v-slot:singleItem="{item}">
          <slot
            name="singleItem"
            :item="item"
          ></slot>
        </template>
      </Common>
    </div>
  </div>
</template>


<script>

// 导入组件
// 1. 左侧菜单
import 'jquery'
import Menu from './children/menu/index.vue'
import Common from './children/common/index.vue'
import _ from 'lodash'
export default {
  name: 'lmMenuScroll', // 组件的name属性（后面有提到这里有个坑）
  data () {
    return {

      secondMenuList: [],
      currentView: "Common",
      commonData: {
        id: 1,
        children: [
          {
            id: 1, className: "利明", active: true, children: [
              { id: 1, className: "xxx" },
              { id: 2, className: "xxx" },
              { id: 3, className: "xxx" },
              { id: 4, className: "xxx" },
              { id: 5, className: "xxx" },
              { id: 6, className: "xxx" },
              { id: 7, className: "xxx" },
              { id: 8, className: "xxx" },
              { id: 9, className: "xxx" },
              { id: 10, className: "xxx" },
              { id: 11, className: "xxx" },
            ]
          },
          {
            id: 2, className: "哈登", active: false, children: [
              { id: 1, className: "xxx" },
              { id: 2, className: "xxx" },
              { id: 3, className: "xxx" },
              { id: 4, className: "xxx" },
              { id: 5, className: "xxx" },
              { id: 6, className: "xxx" },
              { id: 7, className: "xxx" },
              { id: 8, className: "xxx" },
              { id: 9, className: "xxx" },
              { id: 10, className: "xxx" },
              { id: 11, className: "xxx" },
            ]
          },
          {
            id: 3, className: "杜兰特", active: false, children: [
              { id: 1, className: "xxx" },
              { id: 2, className: "xxx" },
              { id: 3, className: "xxx" },
              { id: 4, className: "xxx" },
              { id: 5, className: "xxx" },
              { id: 6, className: "xxx" },
              { id: 7, className: "xxx" },
              { id: 8, className: "xxx" },
              { id: 9, className: "xxx" },
              { id: 10, className: "xxx" },
              { id: 11, className: "xxx" },
            ]
          },
          {
            id: 4, className: "库里", active: false, children: [
              { id: 1, className: "xxx" },
              { id: 2, className: "xxx" },
              { id: 3, className: "xxx" },
              { id: 4, className: "xxx" },
              { id: 5, className: "xxx" },
              { id: 6, className: "xxx" },
              { id: 7, className: "xxx" },
              { id: 8, className: "xxx" },
              { id: 9, className: "xxx" },
              { id: 10, className: "xxx" },
              { id: 11, className: "xxx" },
            ]
          },
          {
            id: 5, className: "狄仁杰", active: false, children: [
              { id: 1, className: "xxx" },
              { id: 2, className: "xxx" },
              { id: 3, className: "xxx" },
              { id: 4, className: "xxx" },
              { id: 5, className: "xxx" },
              { id: 6, className: "xxx" },
              { id: 7, className: "xxx" },
              { id: 8, className: "xxx" },
              { id: 9, className: "xxx" },
              { id: 10, className: "xxx" },
              { id: 11, className: "xxx" },
            ]
          }
        ]
      },
    }
  },
  created () {
    this.secondMenuList = _.cloneDeep(this.MenuData)
    this.commonData = this.secondMenuList[0]
  },
  props: {
    MenuData: {
      type: Array,
      default: () => {
        return [
          {
            id: '1', className: 'NBA素材', needHeaderInsert:true, icon: true, active: true,
            children: [
              {
                id: 1, className: "收藏", active: true, children: [
                  { id: 1, className: 'xxx' },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 2, className: "哈登", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 3, className: "杜兰特", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 4, className: "库里", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 5, className: "威少", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              }
            ]
          },
          {
            id: '2', className: "王者素材", needHeaderInsert:false, icon: true, active: false,
            children: [
              {
                id: 1, className: "孙尚香", active: true, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 2, className: "澜", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 3, className: "刘备", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 4, className: "镜", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 5, className: "上官婉儿", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 6, className: "花木兰", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 7, className: "兰陵王", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 8, className: "公孙离", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 9, className: "赵云", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 10, className: "马可波罗", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 11, className: "孙策", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 12, className: "嬴政", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 13, className: "米莱迪", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 14, className: "猪八戒", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 15, className: "百里玄策", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 16, className: "阿珂", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 17, className: "芈月", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 18, className: "关羽", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 19, className: "野王哥哥", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 20, className: "野王哥哥", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 21, className: "野王", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 22, className: "打野", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 23, className: "野王哥哥", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 3, className: "xxx" },
                  { id: 4, className: "xxx" },
                  { id: 5, className: "xxx" },
                  { id: 6, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 8, className: "xxx" },
                  { id: 9, className: "xxx" },
                  { id: 10, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              }
            ]
          },
        ]
      }
    },
    active: {
      type: 0,
      default: 0
    },
    Collection: {
      type: Number,
      default: 1
    }
  },
  mounted () {
    // 默认展示第一个
    this.secondMenuChange(this.secondMenuList[this.active])
  },
  methods: {
    // 点击二级菜单标题
    secondMenuChange (item) {
      console.log(item);
      this.commonData = item
      this.$refs.common.scrollItem(item.children[this.active], 'first')
    },
    // 点击二级子菜单
    secondContentChange (item, father, index) {
      // 位置滚动
      this.$refs.common.scrollItem(item, index)
    },
    scrollSetMenu (father, son) {
      this.$refs.Menu._clickSub(father, son)
    },
    MenuScrollAnimate (nowIndex) {
      this.$refs.Menu._scrollAnimate(nowIndex)
    }
  },
  components: {
    Menu, Common
  }
}
</script>

<style scoped lang="less">
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #252528;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #252528;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #6a6a6c;
}

.centerBody {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .leftMenu {
    width: 95px;
    height: 100%;
    background-color: #252528;
    overflow-y: overlay;
    padding: 20px 8px;
    box-sizing: border-box;
    border-right: 1px solid #000;

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
  }
  .rightContent {
    flex: 1;
    height: 100%;
    overflow-y: overlay;
    background-color: #1b1b1c;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
