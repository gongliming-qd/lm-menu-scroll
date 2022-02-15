<!--
 * @Author: glm
 * @Date: 2022-02-15 10:29:37
 * @LastEditors: your Name
 * @LastEditTime: 2022-02-15 17:58:24
 * @Description: 
-->

# lm-menu-scroll

```javascript
1. 基于vue的插件 
```

```javascript
安装
npm install lm-menu-scroll -S

导入组件并注册
import lmMenuScroll from 'lm-menu-scroll'
import'lm-menu-scroll/dist/lm-menu-scroll.css' 

使用
<lm-menu-scroll :MenuData="MenuData" :active="1" >
      <template v-slot:headerInsert="{item}">
        111
      </template>
      <template v-slot:singleItem="{item}">
        <div class="singleItemImg">{{item}}</div>
      </template>
</lm-menu-scroll>





```
### options
- MenuData 展示数据 :  

```
{
            id: '1', className: "NBA素材", icon: true, active: true,
            children: [
              {
                id: 1, className: "詹姆斯", active: true, children: [
                  { id: 1, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              
             
              {
                id: 4, className: "库里", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              },
              {
                id: 5, className: "威少", active: false, children: [
                  { id: 1, className: "xxx" },
                  { id: 2, className: "xxx" },
                  { id: 7, className: "xxx" },
                  { id: 11, className: "xxx" },
                ]
              }
            ]
},

- active 默认打开哪个



- 插槽
headerInsert：右侧顶部展示， 返回值item，当前子菜单所有数据
singleItemImg：右侧单个内容展示  返回值item，当前子菜单所有数据

```javascript