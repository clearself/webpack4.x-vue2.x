<template>
    <section class="card mr entrance">
        <h2 class="card-title">今日小区通行记录</h2>

        <Slider :list="list" />
    </section>
</template>

<script>
/**
 * +----------------------------------------------------------------------
 * | 「e家宜业」 —— 助力物业服务升级，用心服务万千业主
 * +----------------------------------------------------------------------
 * | Copyright (c) 2020~2021 https://www.chowa.com All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed 未经许可不能去掉「e家宜业」和「卓瓦科技」相关版权
 * +----------------------------------------------------------------------
 * | Author: jixuecong@chowa.cn
 * +----------------------------------------------------------------------
 */

import Slider from './slider'

export default {
    name: 'EntranceChart',
    // props: {
    //     detail: {
    //         type: Object,
    //         default: () => {
    //             return {
    //                 entrance_current_day_log: [],
    //                 elevator_current_day_log: [],
    //                 park_current_day_log: []
    //             }
    //         }
    //     }
    // },
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.renderList()
    },
    methods: {
        renderList() {
            const list = []
            for (let i = 0; i < 20; i++) {
                list.push({
                    name: '访客记录',
                    local: '测试',
                    created_at: '2021-09-10 12:00:00'
                })
            }

            this.list = list
        }
    },
    components: {
        Slider
    },
    watch: {
        detail: {
            deep: true,
            handler() {
                this.renderList()
            }
        }
    }
}
</script>

<style lang="less">
.entrance {
    height:40vh;
    margin-bottom: 18px;
}
</style>
