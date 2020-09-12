<template>
  <div id="nav" class="navfull">
    <div class="category-content">
      <div class="category">
        <ul class="category-list">
          <li
            class="appliance js_toggle relative"
            v-for="(v,i) in data"
            :key="i"
            @mouseover="mouseOver(i)"
            @mouseout="mouseOut(i)"
          >
            <div class="category-info">
              <h3 class="category-name">
                <i>
                  <img :src="v.url" />
                </i>
                <a class="ml-22" :title="v.bigtype">{{v.bigtype}}
                  <em>&gt;</em>
                </a>
              </h3>
            </div>
            <div class="menu-item">
              <div class="area-in">
                <div class="area-bg">
                  <div class="menu-srot">
                    <div class="sort-side">
                      <dl class="dl-sort" v-for="v in v.smalltype" :key="v">
                        <dt>
                          <span>{{v.name}}</span>
                        </dt>
                        <dd v-for="v in v.goods" :key="v">
                          <a href="javascript:void(0)">
                            <span>{{v}}</span>
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b class="arrow"></b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/assets/js/data.js"; //导入数据
export default {
  name: "menu",
  data() {
    return {
      data: data,
    };
  },
  methods: {
    mouseOver(i) {
      var obj = document.getElementsByClassName("appliance")[i];
      obj.className = "appliance js_toggle relative hover"; //设置当前事件对象样式
      var menu = obj.childNodes; //寻找该事件子节点（商品子类别）
      menu[2].style.display = "block"; //设置子节点显示
    },
    mouseOut(i) {
      var obj = document.getElementsByClassName("appliance")[i];
      obj.className = "appliance js_toggle relative"; //设置当前事件对象样式
      var menu = obj.childNodes; //寻找该事件子节点（商品子类别）
      menu[2].style.display = "none"; //设置子节点隐藏
    },
    show(value) {
      this.$router.push({ name: value });
    },
  },
};
</script>

<style lang ="less">
@import url("meun.less");
</style>>