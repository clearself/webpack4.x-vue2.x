<template>
    <section class="card mr iot">
        <h2 class="card-title">7日内智能物联工作情况</h2>
        <div class="chart">
            <BrokenLine :chartData="lineData"  :isData="line_no_data" />
        </div>
    </section>
</template>

<script>
import BrokenLine from './brokenLine.vue'
export default {
    name: 'IotChart',
    components: {
        BrokenLine
    },
    data() {
        return {
            line_no_data: true,
            lineData: []
        }
    },
    created() {
        this.initLine()
    },
    methods: {
        initLine() {
            this.lineData = []
            this.line_no_data = true
            let data = [
                {
                    day: '周一',
                    list: [
                        {
                            name: '北京',
                            num: 23
                        }, {
                            name: '上海',
                            num: 53
                        }, {
                            name: '河南',
                            num: 98
                        }
                    ]
                },
                {
                    day: '周二',
                    list: [
                        {
                            name: '北京',
                            num: 64
                        }, {
                            name: '上海',
                            num: 87
                        }, {
                            name: '河南',
                            num: 32
                        }
                    ]
                },
                {
                    day: '周三',
                    list: [
                        {
                            name: '北京',
                            num: 43
                        }, {
                            name: '上海',
                            num: 25
                        }, {
                            name: '河南',
                            num: 99
                        }
                    ]
                }
            ]
            setTimeout(() => {
                this.line_no_data = false
                this.lineData = data
            }, 1000)
        }

    }
}
</script>

<style lang="less">
.iot {
    flex: auto;
    height: 26vh;
    .chart {
        width: 100%;
        height: 100%;
        margin-top:-1vw;
    }
}
</style>
