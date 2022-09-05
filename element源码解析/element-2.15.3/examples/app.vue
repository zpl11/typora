<template>
    <div id="app">
        <el-radio-group v-model="radio">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    import radio from '../packages/radio'
    export default {
        name: 'app',

        watch: {},

        methods: {},

        mounted() {},

        data () {
            return {
                radio: '1'
            };
        }
    };
</script>
<style lang="scss">
</style>
