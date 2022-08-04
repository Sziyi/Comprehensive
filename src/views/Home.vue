<template>
  <div class="home">
    <!-- 头部 -->
    <topHeader></topHeader>
    <div class="manage">
      <manage></manage>
      <div class="left">
        <left />
        <div class="tb">
          <div class="top">
            <topOne />
            <topTwo />
            <topThree />
          </div>
          <bottom />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from "../components/topHeader.vue";
import manage from "../components/manage.vue";
import left from "../components/left.vue";
import topOne from "../components/topOne.vue";
import topTwo from "../components/topTwo.vue";
import topThree from "../components/topThree.vue";
import bottom from "../components/bottom.vue";
export default {
  components: { topHeader, manage, left, topOne, topTwo, topThree, bottom },
  name: "Home",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../assets/img/bg.jpg");
  background-size: 100% 100%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .manage {
    flex: 1;
    display: flex;
    flex-direction: column;
    // background-color: aqua;
    .left {
      flex: 1;
      display: flex;
      margin-top: 20px;
      //   background-color: #fff;
      .tb {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-left: 20px;
        // background-color: aquamarine;
        .top {
          height: 50%;
          display: flex;
          flex-grow: 0;
          box-sizing: border-box;
          padding-bottom: 20px;
          //   background-color: blueviolet;
        }
      }
    }
  }
}
</style>
