<template>
  <div>
    <div class="topHeader">
      <dv-decoration-8 style="width: 300px; height: 70px" />
      <dv-decoration-5 style="width: 800px; height: 100px" />
      <dv-decoration-8 :reverse="true" style="width: 300px; height: 70px" />
      <div class="center-title">施工养护综合数据</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.topHeader {
  display: flex;
  justify-content: space-between;
  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    color: #fff;
  }
}
</style>
