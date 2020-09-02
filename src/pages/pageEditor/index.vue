<template>
    <el-row style="background: #fff;">
        <el-col :span="1" class="editor editor-side-bar" v-model="activeSideBar">
            <el-tabs tab-position="left" style="height: 100vh;">
                <template  v-for="(item, index) in sidebarMenus">
                    <el-tab-pane :name="item.value"  :key="index">
                        <el-tooltip slot="label" effect="dark" class="item" :content="item.label" placement="right">
                            <i :class="item.elementUiIcon"></i>
                        </el-tooltip>
                    </el-tab-pane>
                </template>
            </el-tabs>
        </el-col>
        <el-col class="editor" :span="3" style="width: 206px;">
            <componentLibs />
        </el-col>
        <el-col class="editor" :span="11" style="background: #ddd">333</el-col>
        <!-- <el-col class="editor" :span="8">444</el-col> -->
    </el-row>
</template>

<script>
import componentLibs from './componentLibs/Index'
export default {
    data() {
        return {
            activeSideBar: 'componentLibs',
            sidebarMenus: [
                {
						label: '组件列表',
						value: 'componentLibs',
						elementUiIcon: 'el-icon-s-operation'
					},
					{
						label: '页面管理',
                        pageMode: 'h5',
						value: 'pageManage',
						elementUiIcon: 'el-icon-document'
					},
					{
						label: '模板库',
						value: 'templateLibs',
						elementUiIcon: 'el-icon-files'
					}
            ]
        }
    },
    components: {
        componentLibs,
    }
}
</script>

<style lang="scss" scoped>
.editor{
    height: 100vh;
    // border: 1px solid #000;
}
.editor-side-bar{
    width: 56px;
}
</style>