<template>
    <section class="card mr order">
        <h2 class="card-title">今日工单统计情况</h2>
        <div class="chart">
            <Bar :chartData="barData"  :isData="bar_no_data" />
        </div>
    </section>
</template>

<script>
import Bar from './bar.vue'
export default {
    name: 'OrderChart',
    components: {
        Bar
    },
    data() {
        return {
            bar_no_data: true,
            barData: {
                legend: [],
                area: [],
                data: []
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initBar()
        })
    },
    methods: {
        initBar() {
            this.barData = {
                legend: [],
                area: [],
                data: []
            }
            this.bar_no_data = true
            let data = {
                legend: ['金额数', '次数'],
                area: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                data: [
                    [1320, 1302, 1320, 1320, 1320, 160, 23, 65, 88, 23, 56, 65],
                    [1, 4, 6, 2, 5, 7, 5, 3, 7, 2, 1, 4]
                ]
            }
            setTimeout(() => {
                this.bar_no_data = false
                this.$set(this, 'barData', data)
            }, 1000)
        }

    }

}
</script>

<style lang="less">
        .order {
            flex: auto;
            .chart {
                    width: 100%;
                    height: 100%;
                    max-height: 26.72vh;
                    margin-top: -1vw;
                }
        }
</style>
