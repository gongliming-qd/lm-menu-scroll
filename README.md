<!--
 * @Author: glm
 * @Date: 2022-02-15 10:29:37
 * @LastEditors: your Name
 * @LastEditTime: 2022-02-16 18:14:13
 * @Description: 
-->

# lm-menu-scroll

```javascript
1. 基于vue的插件, 基于菜单左右联动效果~
```



```javascript
安装
npm install lm-menu-scroll -S


```

```
<!-- 使用模板 -->
<template>
  <div class="box">
    <lm-menu-scroll
      ref="lmmenuscroll"
      :MenuData="MenuData"
      :updateIndex="updateIndex"
      :active="0"
      :Collection="`收藏`"
      :needHeaderInsert="false"
      activeMenuColor="#ccc"
    >
      <template v-slot:headerInsert="{item}">
        <div class="headerSet">
          
        </div>
      </template>
      <template v-slot:singleItem="{item}">
        <div
          class="singleItemImg"
          @click="singleClick(item)"
        >
          {{item.son.className}}
        </div>
      </template>
    </lm-menu-scroll>
  </div>
</template>

<script>
import lmMenuScroll from 'lm-menu-scroll'
import 'lm-menu-scroll/dist/lm-menu-scroll.css'
export default {
  data () {
    return {
      MenuData: [
        {
          active: true,
          className: 'fist',
          id: 'fist',
          collect: false,
          needHeaderInsert: false,
          children: [
            {
              active: true,
              className: 'Screen Screen ScreenFull Screen',
              id: '333331640225586i08r5',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition",
                },{
                  active: true,
                  className: "Filters",
                  id: "BlendTransition4",
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition5",
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition7",
                },
              ],
            },
            {
              active: false,
              className: 'Full Screen2',
              id: '222',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition1",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition2",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '333',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition331",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition332",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition333",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '444',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "441",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "442",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "443",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '555',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "551",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "552",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "553",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '666',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "661",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "662",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "663",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '777',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "771",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "772",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "773",
                  
                },
              ],

            }
          ],
        },
        {
          active: true,
          className: 'second',
          id: 'fist2',
          collect: false,
          needHeaderInsert: false,
          children: [
            {
              active: true,
              className: '龚利明',
              id: '333331640225586i08r5',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition",
                  
                },{
                  active: true,
                  className: "Filters",
                  id: "BlendTransition4",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition5",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition7",
                  
                },
              ],
            },
            {
              active: false,
              className: 'Full Screen2',
              id: '222',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition1",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition2",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '333',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition331",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition332",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "BlendTransition333",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '444',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "441",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "442",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "443",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '555',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "551",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "552",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "553",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '666',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "661",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "662",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "663",
                  
                },
              ],

            },
            {
              active: false,
              className: 'Full Screen3',
              id: '777',
              children: [
                {
                  active: true,
                  className: "Filters",
                  id: "771",
                  
                },
                {
                  active: true,
                  className: "Filters",
                  id: "772",
                  
                },
                 {
                  active: true,
                  className: "Filters",
                  id: "773",
                  
                },
              ],

            }
          ],
        }

      ],
      updateIndex: 0,
    }
  },
  mounted(){
    this.updateIndex ++
  },
  methods: {
    singleClick (item) {
    }
  },
  components: {
    lmMenuScroll
  }
}
</script>

<style scoped lang="less">

.headerSet {
  color: white;
  height: 100px;
}
.singleItemImg {
  width: 100px;
  height: 100px;
  background-color: wheat;
  overflow: hidden;
}
.box{
  background-color: black;
   width: 100%;
    height: 100vh;
}
</style>

```
MenuData: 

- active 默认打开哪个



- 插槽
headerInsert：右侧顶部展示， 返回值item，当前子菜单所有数据
singleItemImg：右侧单个内容展示  返回值item，当前子菜单所有数据

```javascript