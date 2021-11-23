<template>
    <div style="width:100%;height:100%;position: relative;">
        <div class="ub ub-ac ub-pc no-data" v-if="isData">暂无数据</div>
        <div ref="myEcharts" class="echarts">

        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'Bar',
    props: ['chartData', 'isData'],
    data() {
        return {
            myChart: null,
            loading: true
        }
    },
    watch: {
        'chartData.data': {
            deep: true, // 深度监听
            handler(newVal) {
                console.log('newVal', newVal)
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
            handler(newVal) {
                if (newVal) {
                    this.loading = false
                }
            }
        }
    },
    mounted() {

    },
    methods: {
        init() {
            let that = this
            var data = this.$deepCopy(this.chartData)

            var colors = ['#3faaf5', '#fcaf17']
            let fontColor = ''; let axisLineColor = ''; let splitLineColor = ''
            fontColor = '#8596a5'
            axisLineColor = 'rgb(38, 43, 85)'
            splitLineColor = 'rgb(38, 43, 85)'
            let series = []
            let maxValue = 100
            if (data.data[1] && data.data[1].length > 0) {
                maxValue = data.data[1].sort((a, b) => {
                    return b - a
                })[0]
            }
            if (data.legend) {
                for (var i = 0; i < data.legend.length; i++) {
                    series.push({
                        name: data.legend[i],
                        yAxisIndex: i,
                        type: 'bar',
                        barMaxWidth: '50px',
                        itemStyle: {
                            color: colors[i]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: data.data[i]
                    })
                }
            }

            let option = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderColor: '#2b2b2b',
                    textStyle: {
                        color: '#fff'
                    }
                },
                colors: colors,
                legend: [
                    {
                        show: true,
                        orient: 'horizontal',
                        x: '2%',
                        y: '2%',
                        align: 'left',
                        data: [data.legend[0]],
                        itemWidth: 14,
                        itemHeight: 14,
                        icon: 'rect',
                        itemGap: 20, // 每条图例的距离
                        textStyle: {
                            color: colors[0],
                            fontSize: 12
                        },
                        nameTextStyle: {
                            color: colors[0]
                        }

                    },
                    {
                        show: true,
                        orient: 'horizontal',
                        x: '92%',
                        y: '2%',
                        align: 'left',
                        data: [data.legend[1]],
                        itemWidth: 14,
                        itemHeight: 14,
                        icon: 'rect',
                        itemGap: 20, // 每条图例的距离
                        textStyle: {
                            color: colors[1],
                            fontSize: 12
                        },
                        nameTextStyle: {
                            color: colors[1]
                        }

                    }
                ],
                grid: {
                    left: '2%',
                    right: '2%',
                    bottom: '2%',
                    top: '22%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: data.area,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: axisLineColor
                        }
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: fontColor
                        // rotate: 30
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [
                    {
                        type: 'value',
                        minInterval: 1,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: axisLineColor
                            }
                        },
                        axisLabel: {
                            formatter: '{value} 亿',
                            color: fontColor,
                            fontSize: 12
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: splitLineColor,
                                type: 'dashed'
                            }
                        }
                    },
                    {
                        type: 'value',
                        position: 'right',
                        minInterval: 1,
                        max: maxValue * 3,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: axisLineColor
                            }
                        },
                        axisLabel: {
                            formatter: '{value} 次',
                            color: fontColor,
                            fontSize: 12
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: splitLineColor,
                                type: 'dashed'
                            }
                        }
                    }
                ],
                series: series
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

<style scoped lang="less">
    .ub {
        display: flex;
        position: relative;
    }
    .ub-ac {
        align-items:center;
    }

    .ub-pc {
        justify-content:center;
    }
    .echarts {
        width: 100%;
        height: 100%;
    }
    .no-data{
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        color:#fff;
        font-size:14px;
    }
    .echarts ::v-deep .el-loading-mask{
        background-color:rgba(0,0,0,.5);
    }
</style>
