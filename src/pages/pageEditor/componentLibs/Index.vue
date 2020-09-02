<template>
    <div>
        <p class="page-title">组件库</p>
        <ul class="scrollbar-wrapper">
            <li v-for="(item, index) in componentsList" :key="index" class="clearfix">
                <div class="components-lib-title">
                    <p>{{item.title}}</p>
                </div>
                <div v-if="item.components && item.components.length">
                    <div class="components-lib-item" v-for="(k,i) in item.components" :key="i">
                        <div>
                            <i :class="k.icon" />
                        </div>
                        <p>{{k.title}}</p>
                    </div>
                </div>
                <div v-else class="components-lib-footer">
                    <p>待完善...</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import eleConfig from '../../editor/ele-config'

export default {
    data() {
        return {
            componentsList: eleConfig,
        }
    },
}
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0);
}
.scrollbar-wrapper{
    height: 90vh;
    overflow: auto;
    padding: 8px;
}
.clearfix{
    clear: both;
}
.components-lib-item {
    color: #424242;
    text-align: center;
    background: #f4f4f4;
    width: 80px;
    float: left;
    padding: 6px 0;
    margin: 5px;
    border: 1px solid #dddddd;
    font-size: 12px;
    cursor: pointer;
}
.page-title {
    text-align: center;
}
.components-lib-title {
    margin: 16px 10px;
}
.components-lib-footer{
        padding-top: 20px;
    font-size: 14px;
    text-align: center;
}
</style>