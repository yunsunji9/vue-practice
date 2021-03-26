<template>
  <div>
    <canvas ref="myLineChart" id="myLineChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    new this.$_Chart(this.$refs.myLineChart.getContext('2d'), {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });
  }
}
</script>

<style lang="scss" scoped>

</style>