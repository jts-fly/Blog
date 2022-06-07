<template>

  <el-menu :router="true" class="el-menu-vertical-demo" :default-active="defaultActive"
           @open="handleOpen" @close="handleClose" :collapse="isCollapse">

    <!-- 问卷管理 -->
    <el-menu-item index="/surveys">
      <i class="el-icon-document"></i>
      <span slot="title">问卷管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>

	export default {
		name: "Menu",
		computed: {
	      defaultActive(){
	        let path = this.$route.path;
	        return path;
	      },
		},
		data() {
			return {}
		},
		methods: {
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
	        handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	}
</script>

<style scoped> 
</style>
