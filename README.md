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

导入组件并注册
import lmMenuScroll from 'lm-menu-scroll'
import'lm-menu-scroll/dist/lm-menu-scroll.css' 

使用
      <lm-menu-scroll
        :MenuData="MenuData"
        :active="0"
        :Collection="`收藏`"
      >
        <template v-slot:headerInsert="{item}">
          <div class="headerSet">
            李大傻砸
          </div>
        </template>
        <template v-slot:singleItem="{item}">
          <div
            class="singleItemImg"
          >
            {{item.son.className}}
          </div>
        </template>
      </lm-menu-scroll>





```
### options
- MenuData 展示数据 :  

```
MenuData: MenuData: [
        {
          id: '2', className: "王者素材", collect: true, needHeaderInsert: false, icon: true, active: true,
          children: [
            {
              id: '1', className: "收藏", active: true, children: [
              ]
            },
            {
              id: 2, className: "澜", active: false, children: [
                { id: 1, className: "澜1", collect: false, downLoad: false },
                { id: 2, className: "澜2", collect: false, downLoad: false },
                { id: 3, className: "澜3", collect: false, downLoad: false },
                { id: 4, className: "澜4", collect: false, downLoad: false },
                { id: 5, className: "澜5", collect: false, downLoad: false },
                { id: 6, className: "澜6", collect: false, downLoad: false },
                { id: 7, className: "澜7", collect: false, downLoad: false },
                { id: 8, className: "澜8", collect: false, downLoad: false },
                { id: 9, className: "澜9", collect: false, downLoad: false },
                { id: 10, className: "xxx10", collect: false, downLoad: false },
                { id: 11, className: "xxx11", collect: false, downLoad: false },
              ]
            },
            {
              id: 3, className: "刘备", active: false, children: [
                { id: 1, className: "刘备1", collect: false, downLoad: false },
                { id: 2, className: "刘备2", collect: false, downLoad: false },
                { id: 3, className: "刘备3", collect: false, downLoad: false },
                { id: 4, className: "刘备4", collect: false, downLoad: false },
                { id: 5, className: "刘备5", collect: false, downLoad: false },
                { id: 6, className: "刘备6", collect: false, downLoad: false },
                { id: 7, className: "刘备7", collect: false, downLoad: false },
                { id: 8, className: "刘备8", collect: false, downLoad: false },
                { id: 9, className: "刘备9", collect: false, downLoad: false },
                { id: 10, className: "xxx10", collect: false, downLoad: false },
                { id: 11, className: "xxx11", collect: false, downLoad: false },
              ]
            },
            {
              id: 4, className: "镜", active: false, children: [
                { id: 1, className: "镜1", collect: false, downLoad: false },
                { id: 2, className: "镜2", collect: false, downLoad: false },
                { id: 3, className: "镜3", collect: false, downLoad: false },
                { id: 4, className: "镜4", collect: false, downLoad: false },
                { id: 5, className: "镜5", collect: false, downLoad: false },
                { id: 6, className: "镜6", collect: false, downLoad: false },
                { id: 7, className: "镜7", collect: false, downLoad: false },
                { id: 8, className: "镜8", collect: false, downLoad: false },
                { id: 9, className: "镜9", collect: false, downLoad: false },
                { id: 10, className: "xxx10", collect: false, downLoad: false },
                { id: 11, className: "xxx11", collect: false, downLoad: false },
              ]
            },
            {
              id: 5, className: "上官婉儿", active: false, children: [
                { id: 1, className: "上官婉儿1", collect: false, downLoad: false },
                { id: 2, className: "上官婉儿2", collect: false, downLoad: false },
                { id: 3, className: "上官婉儿3", collect: false, downLoad: false },
                { id: 4, className: "上官婉儿4", collect: false, downLoad: false },
                { id: 5, className: "上官婉儿5", collect: false, downLoad: false },
                { id: 6, className: "上官婉儿6", collect: false, downLoad: false },
                { id: 7, className: "上官婉儿7", collect: false, downLoad: false },
                { id: 8, className: "上官婉儿8", collect: false, downLoad: false },
                { id: 9, className: "上官婉儿9", collect: false, downLoad: false },
                { id: 10, className: "xxx10", collect: false, downLoad: false },
                { id: 11, className: "xxx11", collect: false, downLoad: false },
              ]
            },
            {
              id: 6, className: "花木兰", active: false, children: [
                { id: 1, className: "花木兰1", collect: false, downLoad: false },
                { id: 2, className: "花木兰2", collect: false, downLoad: false },
                { id: 3, className: "花木兰3", collect: false, downLoad: false },
                { id: 4, className: "花木兰4", collect: false, downLoad: false },
                { id: 5, className: "花木兰5", collect: false, downLoad: false },
                { id: 6, className: "花木兰6", collect: false, downLoad: false },
                { id: 7, className: "花木兰7", collect: false, downLoad: false },
                { id: 8, className: "花木兰8", collect: false, downLoad: false },
                { id: 9, className: "花木兰9", collect: false, downLoad: false },
                { id: 10, className: "xxx10", collect: false, downLoad: false },
                { id: 11, className: "xxx11", collect: false, downLoad: false },
              ]
            },
            {
              id: 7, className: "兰陵王", active: false, children: [
                { id: 1, className: "兰陵王1", collect: false, downLoad: false },
                { id: 2, className: "兰陵王2", collect: false, downLoad: false },
                { id: 3, className: "兰陵王3", collect: false, downLoad: false },
                { id: 4, className: "兰陵王4", collect: false, downLoad: false },
                { id: 5, className: "兰陵王5", collect: false, downLoad: false },
                { id: 6, className: "兰陵王6", collect: false, downLoad: false },
                { id: 7, className: "兰陵王7", collect: false, downLoad: false },
                { id: 8, className: "兰陵王8", collect: false, downLoad: false },
                { id: 9, className: "兰陵王9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 8, className: "公孙离", active: false, children: [
                { id: 1, className: "公孙离1", collect: false, downLoad: false },
                { id: 2, className: "公孙离2", collect: false, downLoad: false },
                { id: 3, className: "公孙离3", collect: false, downLoad: false },
                { id: 4, className: "公孙离4", collect: false, downLoad: false },
                { id: 5, className: "公孙离5", collect: false, downLoad: false },
                { id: 6, className: "公孙离6", collect: false, downLoad: false },
                { id: 7, className: "公孙离7", collect: false, downLoad: false },
                { id: 8, className: "公孙离8", collect: false, downLoad: false },
                { id: 9, className: "公孙离9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 9, className: "赵云", active: false, children: [
                { id: 1, className: "赵云1", collect: false, downLoad: false },
                { id: 2, className: "赵云2", collect: false, downLoad: false },
                { id: 3, className: "赵云3", collect: false, downLoad: false },
                { id: 4, className: "赵云4", collect: false, downLoad: false },
                { id: 5, className: "赵云5", collect: false, downLoad: false },
                { id: 6, className: "赵云6", collect: false, downLoad: false },
                { id: 7, className: "赵云7", collect: false, downLoad: false },
                { id: 8, className: "赵云8", collect: false, downLoad: false },
                { id: 9, className: "赵云9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 10, className: "马可波罗", active: false, children: [
                { id: 1, className: "马可波罗1", collect: false, downLoad: false },
                { id: 2, className: "马可波罗2", collect: false, downLoad: false },
                { id: 3, className: "马可波罗3", collect: false, downLoad: false },
                { id: 4, className: "马可波罗4", collect: false, downLoad: false },
                { id: 5, className: "马可波罗5", collect: false, downLoad: false },
                { id: 6, className: "马可波罗6", collect: false, downLoad: false },
                { id: 7, className: "马可波罗7", collect: false, downLoad: false },
                { id: 8, className: "马可波罗8", collect: false, downLoad: false },
                { id: 9, className: "马可波罗9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 11, className: "孙策", active: false, children: [
                { id: 1, className: "孙策1", collect: false, downLoad: false },
                { id: 2, className: "孙策2", collect: false, downLoad: false },
                { id: 3, className: "孙策3", collect: false, downLoad: false },
                { id: 4, className: "孙策4", collect: false, downLoad: false },
                { id: 5, className: "孙策5", collect: false, downLoad: false },
                { id: 6, className: "孙策6", collect: false, downLoad: false },
                { id: 7, className: "孙策7", collect: false, downLoad: false },
                { id: 8, className: "孙策8", collect: false, downLoad: false },
                { id: 9, className: "孙策9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 12, className: "嬴政", active: false, children: [
                { id: 1, className: "嬴政1", collect: false, downLoad: false },
                { id: 2, className: "嬴政2", collect: false, downLoad: false },
                { id: 3, className: "嬴政3", collect: false, downLoad: false },
                { id: 4, className: "嬴政4", collect: false, downLoad: false },
                { id: 5, className: "嬴政5", collect: false, downLoad: false },
                { id: 6, className: "嬴政6", collect: false, downLoad: false },
                { id: 7, className: "嬴政7", collect: false, downLoad: false },
                { id: 8, className: "嬴政8", collect: false, downLoad: false },
                { id: 9, className: "嬴政9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 13, className: "米莱迪", active: false, children: [
                { id: 1, className: "米莱迪", collect: false, downLoad: false },
                { id: 2, className: "米莱迪", collect: false, downLoad: false },
                { id: 3, className: "米莱迪", collect: false, downLoad: false },
                { id: 4, className: "米莱迪", collect: false, downLoad: false },
                { id: 5, className: "米莱迪", collect: false, downLoad: false },
                { id: 6, className: "米莱迪", collect: false, downLoad: false },
                { id: 7, className: "米莱迪", collect: false, downLoad: false },
                { id: 8, className: "米莱迪", collect: false, downLoad: false },
                { id: 9, className: "米莱迪", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 14, className: "猪八戒", active: false, children: [
                { id: 1, className: "猪八戒1", collect: false, downLoad: false },
                { id: 2, className: "猪八戒2", collect: false, downLoad: false },
                { id: 3, className: "猪八戒3", collect: false, downLoad: false },
                { id: 4, className: "猪八戒4", collect: false, downLoad: false },
                { id: 5, className: "猪八戒5", collect: false, downLoad: false },
                { id: 6, className: "猪八戒6", collect: false, downLoad: false },
                { id: 7, className: "猪八戒7", collect: false, downLoad: false },
                { id: 8, className: "猪八戒8", collect: false, downLoad: false },
                { id: 9, className: "猪八戒9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 15, className: "百里玄策", active: false, children: [
                { id: 1, className: "百里玄策1", collect: false, downLoad: false },
                { id: 2, className: "百里玄策2", collect: false, downLoad: false },
                { id: 3, className: "百里玄策3", collect: false, downLoad: false },
                { id: 4, className: "百里玄策4", collect: false, downLoad: false },
                { id: 5, className: "百里玄策5", collect: false, downLoad: false },
                { id: 6, className: "百里玄策6", collect: false, downLoad: false },
                { id: 7, className: "百里玄策7", collect: false, downLoad: false },
                { id: 8, className: "百里玄策8", collect: false, downLoad: false },
                { id: 9, className: "百里玄策9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 16, className: "阿珂", active: false, children: [
                { id: 1, className: "阿珂1", collect: false, downLoad: false },
                { id: 2, className: "阿珂2", collect: false, downLoad: false },
                { id: 3, className: "阿珂3", collect: false, downLoad: false },
                { id: 4, className: "阿珂4", collect: false, downLoad: false },
                { id: 5, className: "阿珂5", collect: false, downLoad: false },
                { id: 6, className: "阿珂6", collect: false, downLoad: false },
                { id: 7, className: "阿珂7", collect: false, downLoad: false },
                { id: 8, className: "阿珂8", collect: false, downLoad: false },
                { id: 9, className: "阿珂9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 17, className: "芈月", active: false, children: [
                { id: 1, className: "芈月1", collect: false, downLoad: false },
                { id: 2, className: "芈月2", collect: false, downLoad: false },
                { id: 3, className: "芈月3", collect: false, downLoad: false },
                { id: 4, className: "芈月4", collect: false, downLoad: false },
                { id: 5, className: "芈月5", collect: false, downLoad: false },
                { id: 6, className: "芈月6", collect: false, downLoad: false },
                { id: 7, className: "芈月7", collect: false, downLoad: false },
                { id: 8, className: "芈月8", collect: false, downLoad: false },
                { id: 9, className: "芈月9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 18, className: "关羽", active: false, children: [
                { id: 1, className: "关羽1", collect: false, downLoad: false },
                { id: 2, className: "关羽2", collect: false, downLoad: false },
                { id: 3, className: "关羽3", collect: false, downLoad: false },
                { id: 4, className: "关羽4", collect: false, downLoad: false },
                { id: 5, className: "关羽5", collect: false, downLoad: false },
                { id: 6, className: "关羽6", collect: false, downLoad: false },
                { id: 7, className: "关羽7", collect: false, downLoad: false },
                { id: 8, className: "关羽8", collect: false, downLoad: false },
                { id: 9, className: "关羽9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 19, className: "程咬金", active: false, children: [
                { id: 1, className: "程咬金1", collect: false, downLoad: false },
                { id: 2, className: "程咬金2", collect: false, downLoad: false },
                { id: 3, className: "程咬金3", collect: false, downLoad: false },
                { id: 4, className: "程咬金4", collect: false, downLoad: false },
                { id: 5, className: "程咬金5", collect: false, downLoad: false },
                { id: 6, className: "程咬金6", collect: false, downLoad: false },
                { id: 7, className: "程咬金7", collect: false, downLoad: false },
                { id: 8, className: "程咬金8", collect: false, downLoad: false },
                { id: 9, className: "程咬金9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 20, className: "高渐离", active: false, children: [
                { id: 1, className: "高渐离1", collect: false, downLoad: false },
                { id: 2, className: "高渐离2", collect: false, downLoad: false },
                { id: 3, className: "高渐离3", collect: false, downLoad: false },
                { id: 4, className: "高渐离4", collect: false, downLoad: false },
                { id: 5, className: "高渐离5", collect: false, downLoad: false },
                { id: 6, className: "高渐离6", collect: false, downLoad: false },
                { id: 7, className: "高渐离7", collect: false, downLoad: false },
                { id: 8, className: "高渐离8", collect: false, downLoad: false },
                { id: 9, className: "高渐离9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 21, className: "霏", active: false, children: [
                { id: 1, className: "霏1", collect: false, downLoad: false },
                { id: 2, className: "霏2", collect: false, downLoad: false },
                { id: 3, className: "霏3", collect: false, downLoad: false },
                { id: 4, className: "霏4", collect: false, downLoad: false },
                { id: 5, className: "霏5", collect: false, downLoad: false },
                { id: 6, className: "霏6", collect: false, downLoad: false },
                { id: 7, className: "霏7", collect: false, downLoad: false },
                { id: 8, className: "霏8", collect: false, downLoad: false },
                { id: 9, className: "霏9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 22, className: "孙尚香", active: false, children: [
                { id: 1, className: "孙尚香1", collect: false, downLoad: false },
                { id: 2, className: "孙尚香2", collect: false, downLoad: false },
                { id: 3, className: "孙尚香3", collect: false, downLoad: false },
                { id: 4, className: "孙尚香4", collect: false, downLoad: false },
                { id: 5, className: "孙尚香5", collect: false, downLoad: false },
                { id: 6, className: "孙尚香6", collect: false, downLoad: false },
                { id: 7, className: "孙尚香7", collect: false, downLoad: false },
                { id: 8, className: "孙尚香8", collect: false, downLoad: false },
                { id: 9, className: "孙尚香9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            },
            {
              id: 23, className: "睡觉觉", active: false, children: [
                { id: 1, className: "睡觉觉1", collect: false, downLoad: false },
                { id: 2, className: "睡觉觉2", collect: false, downLoad: false },
                { id: 3, className: "睡觉觉3", collect: false, downLoad: false },
                { id: 4, className: "睡觉觉4", collect: false, downLoad: false },
                { id: 5, className: "睡觉觉5", collect: false, downLoad: false },
                { id: 6, className: "睡觉觉6", collect: false, downLoad: false },
                { id: 7, className: "睡觉觉7", collect: false, downLoad: false },
                { id: 8, className: "睡觉觉8", collect: false, downLoad: false },
                { id: 9, className: "睡觉觉9", collect: false, downLoad: false },
                { id: 10, className: "xxx", collect: false, downLoad: false },
                { id: 11, className: "xxx", collect: false, downLoad: false },
              ]
            }
          ]
        },
        {
          id: '1', className: "NBA素材", collect: false, needHeaderInsert: true, icon: true, active: false,
          children: [
            {
              id: 1, className: "收藏", active: true, children: [
                { id: 1, className: "收藏1", collect: false, downLoad: false },
                { id: 2, className: "收藏2", collect: false, downLoad: false },
                { id: 3, className: "收藏3", collect: false, downLoad: false },
                { id: 4, className: "收藏4", collect: false, downLoad: false },
                { id: 5, className: "收藏5", collect: false, downLoad: false },
                { id: 6, className: "收藏6", collect: false, downLoad: false },
                { id: 7, className: "收藏7", collect: false, downLoad: false },
                { id: 8, className: "收藏8", collect: false, downLoad: false },
                { id: 9, className: "收藏9", collect: false, downLoad: false },
                { id: 10, className: "收藏10", collect: false, downLoad: false },
                { id: 11, className: "收藏11", collect: false, downLoad: false },
              ]
            },
            {
              id: 2, className: "杜兰特", active: false, children: [
                { id: 1, className: "杜兰特1", collect: false, downLoad: false },
                { id: 2, className: "杜兰特2", collect: false, downLoad: false },
                { id: 3, className: "杜兰特3", collect: false, downLoad: false },
                { id: 4, className: "杜兰特4", collect: false, downLoad: false },
                { id: 5, className: "杜兰特5", collect: false, downLoad: false },
                { id: 6, className: "杜兰特6", collect: false, downLoad: false },
                { id: 7, className: "杜兰特7", collect: false, downLoad: false },
                { id: 8, className: "杜兰特8", collect: false, downLoad: false },
                { id: 9, className: "杜兰特9", collect: false, downLoad: false },
                { id: 10, className: "杜兰特", collect: false, downLoad: false },
                { id: 11, className: "杜兰特", collect: false, downLoad: false },
              ]
            },
            {
              id: 3, className: "伦纳德", active: false, children: [
                { id: 1, className: "伦纳德1" },
                { id: 2, className: "伦纳德2" },
                { id: 3, className: "伦纳德3" },
                { id: 4, className: "伦纳德4" },
                { id: 5, className: "伦纳德5" },
                { id: 6, className: "伦纳德6" },
                { id: 7, className: "伦纳德7" },
                { id: 8, className: "伦纳德8" },
                { id: 9, className: "伦纳德9" },
                { id: 10, className: "xxx" },
                { id: 11, className: "xxx" },
              ]
            },
            {
              id: 4, className: "库里", active: false, children: [
                { id: 1, className: "库里1" },
                { id: 2, className: "库里2" },
                { id: 3, className: "库里3" },
                { id: 4, className: "库里4" },
                { id: 5, className: "库里5" },
                { id: 6, className: "库里6" },
                { id: 7, className: "库里7" },
                { id: 8, className: "库里8" },
                { id: 9, className: "库里9" },
                { id: 10, className: "xxx" },
                { id: 11, className: "xxx" },
              ]
            },
            {
              id: 5, className: "威少", active: false, children: [
                { id: 1, className: "威少1" },
                { id: 2, className: "威少2" },
                { id: 3, className: "威少3" },
                { id: 4, className: "威少4" },
                { id: 5, className: "威少5" },
                { id: 6, className: "威少6" },
                { id: 7, className: "威少7" },
                { id: 8, className: "威少8" },
                { id: 9, className: "威少9" },
                { id: 10, className: "xxx" },
                { id: 11, className: "xxx" },
              ]
            }
          ]
        },

      ]

- active 默认打开哪个



- 插槽
headerInsert：右侧顶部展示， 返回值item，当前子菜单所有数据
singleItemImg：右侧单个内容展示  返回值item，当前子菜单所有数据

```javascript