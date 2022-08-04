<template>
  <div class="topTow">
    <div class="title">计划资金累计完成情况</div>

    <div class="cumulative">累计完成<span>235,680</span>元</div>

    <div class="chart">
      <dv-water-level-pond :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [45],
        shape: "round",
        waveHeight: 25,
        waveNum: 2,
      },
    };
  },
};
</script>

<style lang="scss">
.topTow {
  width: 20%;
  height: 85%;
  box-sizing: border-box;
  margin-left: 20px;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  display: flex;
  flex-direction: column;
  .title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
    color: #fff;
  }
  .cumulative {
    display: flex;
    justify-content: center;
    font-size: 15px;
    align-items: flex-end;
    color: #fff;
    span {
      font-size: 30px;
      font-weight: bold;
      color: #58a1ff;
      margin: 0 5px;
      margin-bottom: -5px;
    }
  }
  .chart {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dv-water-pond-level {
    max-width: 90%;
    width: 130px;
    height: 130px;
    border: 10px solid #19c3eb;
    border-radius: 50%;
    ellipse {
      stroke: transparent !important;
    }
    text {
      font-size: 40px;
    }
  }
}
</style>
