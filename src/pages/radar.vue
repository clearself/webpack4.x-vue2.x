<template>
    <div style="width: 100%; height: 100%; position: relative">
        <div class="ub ub-ac ub-pc no-data" v-if="isData">暂无数据</div>
        <div ref="myEcharts" class="echarts" v-loading="loading"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'Bar',
    props: ['chartData', 'title', 'isData'],
    data() {
        return {
            myChart: null,
            loading: true
        }
    },
    watch: {
        chartData: {
            deep: true, // 深度监听
            handler(newVal, oldVal) {
                if (newVal.length > 0) {
                    this.loading = false
                } else {
                    this.loading = true
                }
                this.init()
            }
        },
        isData: {
            deep: true, // 深度监听
            handler(newVal, oldVal) {
                if (newVal) {
                    this.loading = false
                }
            }
        }
    },
    mounted() {},
    methods: {
        init() {
            let that = this
            let indicator = []
            var data = this.chartData

            let dataAll = data.data[0].concat(data.data[1])
            let maxValue = dataAll.sort((a, b) => b - a)[0]
            if (data.area.length > 0) {
                data.area.forEach(item => {
                    indicator.push(
                        {
                            name: item,
                            max: maxValue
                        }
                    )
                })
            }
            let option = {
                color: ['rgba(0,183,238, 1)', 'rgba(86,199,60, 1)'],
                tooltip: {
                    show: true,
                    trigger: 'item'
                },
                legend: {
                    show: true,
                    icon: 'circle',
                    right: '20%',
                    top: 'center',
                    orient: 'vertical',
                    itemGap: 30,
                    textStyle: {
                        fontSize: 15,
                        color: '#000'
                    },
                    data: data.legend
                },
                radar: {
                    center: ['35%', '50%'],
                    radius: '70%',
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    splitArea: {
                        areaStyle: {
                            color: ['transparent']
                        }
                    },
                    axisLabel: {
                        show: false,
                        fontSize: 20,
                        color: '#000',
                        fontStyle: 'normal',
                        fontWeight: 'normal'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: '#000'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: '#000'
                        }
                    },
                    indicator: indicator
                },
                series: [
                    {
                        name: data.legend[0],
                        type: 'radar',
                        symbol: 'circle',
                        symbolSize: 10,
                        areaStyle: {
                            normal: {
                                color: 'rgba(86,199,60, 0.4)'
                            }
                        },
                        itemStyle: {
                            color: 'rgba(86,199,60, 1)',
                            borderColor: 'rgba(86,199,60, 0.3)',
                            borderWidth: 10
                        },
                        lineStyle: {
                            normal: {
                                color: 'rgba(86,199,60, 1)',
                                width: 2
                            }
                        },
                        data: [data.data[0]]
                    },
                    {
                        name: data.legend[1],
                        type: 'radar',
                        symbol: 'circle',
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,183,238, 1)',
                                borderColor: 'rgba(0,183,238, 0.4)',
                                borderWidth: 10
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: 'rgba(0,183,238, 1)'
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: 'rgba(0,183,238, 1)',
                                width: 2
                            }
                        },
                        data: [data.data[1]]
                    }
                ]
            }
            // eslint-disable-next-line no-undef
            this.myChart = echarts.init(this.$refs.myEcharts)
            this.myChart.setOption(option)

            window.addEventListener('resize', function() {
                that.myChart.resize()
            })
        }
    }
}
</script>

<style scoped lang="scss">
.echarts {
    width: 100%;
    height: 100%;
}
.no-data {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 14px;
}
.echarts ::v-deep .el-loading-mask {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
