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
    name: 'BrokenLine',
    props: ['chartData', 'isData'],
    data() {
        return {
            myChart: null,
            loading: true
        }
    },
    watch: {
        chartData: {
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
    methods: {
        init() {
            let that = this
            //
            var data = this.$deepCopy(this.chartData)
            let xData = []
            let legendData = []
            let series = []
            let colors = ['#eb2f96', '#1890ff', '#13c2c2', '#52c41a', '#722ed1', '#ed4014']
            if (data.length > 0) {
                xData = data.map(item => {
                    return item.day
                })
            }
            if (data[0] && data[0].list.length > 0) {
                data[0].list.forEach((item, index) => {
                    let names = []
                    let list = []
                    data.forEach((_item, _index) => {
                        list.push(_item.list[index].num)
                    })
                    legendData.push(item.name)
                    let obj = {
                        name: item.name,
                        type: 'line',
                        smooth: true, // true 为平滑曲线，false为直线
                        itemStyle: {
                            normal: {
                                color: colors[index],
                                lineStyle: {
                                    color: colors[index],
                                    width: 2
                                }
                            }
                        },
                        data: list
                    }
                    series.push(obj)
                })
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
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '5%',
                    top: '16%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xData,
                    axisLabel: {
                        color: '#8596a5'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#8596a5'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        color: '#8596a5'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#8596a5'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgb(38, 43, 85)'
                        }
                    }
                },
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
