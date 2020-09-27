<template>
  <body class="HolyGrail">
    <header>
      <h1>Django VueJs Template</h1>
    </header>
    <div class="el-scrollbar__view">
      <div class="page-container page-component">
        <div class="page-component__nav el-scrollbar">
          <div class="el-scrollbar__wrap" style="margin-bottom: -17px;margin-right: -17px;">
            <el-row class="tac" style="overflow:auto">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">
                        <el-link href="#/">首页</el-link>
                      </el-menu-item>
                      <el-menu-item index="1-2">
                        <el-link href="#/messages">Django Rest</el-link>
                      </el-menu-item>
                      <el-menu-item index="1-3">
                        <el-link href="#/1">test页面</el-link>
                      </el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                  </el-menu-item>
                </el-menu>
            </el-row>
          </div>
          <div class="el-scrollbar__bar is-vertical"></div>
        </div>
        <div class="page-component__content">
          <router-view/>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
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


<style>

.page-component.page-container {
    padding: 0;
}
.page-component {
    box-sizing: border-box;
    height: 100%;
}
.page-container {
    padding-top: 55px;
}
.container, .page-container {
    width: 1440px;
    padding: 0;
    margin: 0 auto;
}

.page-component .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top .3s;
}
.el-scrollbar {
    overflow: hidden;
    position: relative;
}

.page-component .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
}

.page-component .page-component__nav>.el-scrollbar__wrap {
    height: 100%;
    overflow-x: auto;
}

//左侧滚轮
.el-scrollbar__bar.is-vertical {
    width: 5px;
    top: 2px;
}
.el-scrollbar__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity .12s ease-out;
}
.el-scrollbar__bar.is-vertical>div {
    width: 100%;
}
.el-scrollbar__thumb {
    /* position: relative; */
    display: block;
    width: 0;
    height: 0;
    cursor: pointer;
    border-radius: inherit;
    background-color: rgba(144,147,153,.3);
    transition: background-color .3s;
}

div {
    display: block;
}

header,
footer {
  flex: 1;
  text-align: center;
}


  .el-table .warning-row {
    background: #E6A23C;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
