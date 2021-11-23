<template>
    <div class="statistic-wrapper">
        <div class="title">{{title}}</div>
        <div class="icon-box"><i :class="[icon]" :style="{'color':iconColor}"></i></div>
        <div class="times">缴款{{times}}次</div>
        <div class="amount">总金额{{amount}}元</div>
    </div>
</template>

<script>
export default {
    name: 'Statistic',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        iconColor: {
            type: String,
            default: ''
        },
        times: {
            type: Number,
            default: 0
        },
        amount: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
.statistic-wrapper{
    min-width: 50px;
    padding:20px;
    background-color: #ffffff;
    border-radius:4px;
    .title{
        font-size:18px;
        font-weight: 600;
    }
    .times,.amount{
        font-size:16px;
        color:#333;
        line-height: 30px;
    }
}
.icon-box{
    height:30px;
    text-align: center;
    padding:15px 0 10px;
    i{
        font-size:30px;
    }
}
</style>
