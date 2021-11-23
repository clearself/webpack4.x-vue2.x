<template>
    <section class="card mr online">
        <h2 class="card-title">今日小区通行记录</h2>

        <Slider :list="list" />
    </section>
</template>

<script>

import Slider from './slider'

export default {
    name: 'OnLine',
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
.online {
    height:46vh;
}
</style>
