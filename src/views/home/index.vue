<template>
  <div class="index">
    <input type="text" />
    <!-- 底部标签栏 -->
    <van-tabbar :route="true">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="bookshelf">书架</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "home",
  props: {
    any: {
      type: Object,
      required: false
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>