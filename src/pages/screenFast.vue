<template>
    <div class="fast-screen">
        <Novnc :wsURL="url"></Novnc>
    </div>
</template>
<script>
import Novnc from './novnc'
export default {
    name: 'ScreenFast',
    components: {
        Novnc
    },
    data() {
        return {
            url: '10.18.3.106:9000'
        }
    },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>
.fast-screen{
    width:100vw;
    height:100vh;
}
</style>
