<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo-img">
          <img src="./assets/logo.png" alt="力比科技">
        </div>
      </el-header>
      <el-container>
        <div class="nav-menu">
          <div class="collapse-menu" @click="collapseOpen"><i :class="elIconName"></i></div>
          <el-aside :width="collapse ? '64px' : '200px'">
            <el-menu
            class="el-menu-vertical-demo"
            unique-opened
            router
            :collapse-transition="false"
            :collapse='collapse'
            :default-active="path"
            background-color="#515A6E"
            text-color="#fff"
            active-text-color="#2d8cf0">
            <template  v-for="(item) in allMenus">
              <!-- v-if判断循环的值对象是否有children 有的才是二级菜单 -->
              <el-menu-item v-if="!item.children" :index="item.url" :key="item.name">
                <i class="iconfont" :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>

              <el-submenu class="child-item"  v-else :index="item.url" :key="item.name">
                <template slot="title">
                  <i class="iconfont" :class="item.icon"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                  v-for="childItem in item.children"
                  :key="childItem.name" :index="childItem.url">
                  {{childItem.title}}
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </el-menu>
          </el-aside>
        </div>
          <el-main>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="item in breadCrumbs"
                :key="item.url"
                :to="{ path: item.url }">
                {{item.title}}
              </el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      collapse: false,
      elIconName: 'el-icon-s-fold',
      breadcrumb: [],
      allMenus: [
        {
          url: '/home',
          icon: 'el-icon-user-solid',
          name: '1',
          title: '首页',
        },
        {
          title: '玩家数据',
          name: '2',
          url: '/about',
          icon: 'el-icon-star-on',
          children: [
            {
              url: '/about',
              name: '2-1',
              title: '新增用户',
            },
            {
              url: '/activeuser',
              name: '2-2',
              title: '活跃用户',
            },
            {
              url: '/retained-analysis',
              name: '2-3',
              title: '留存分析',
            },
          ],
        },
        {
          url: '/payment',
          icon: 'el-icon-info',
          name: '3',
          title: '支付统计',
        },
        {
          title: '基础维护',
          name: '4',
          url: '/package-maintain',
          icon: 'el-icon-info',
          children: [
            {
              url: '/package-maintain',
              name: '4-1',
              title: '数据关系处理',
            },
          ],
        },
      ],
      breadArr: [],
    };
  },
  methods: {
    collapseOpen() {
      this.collapse = !this.collapse;
      if (!this.collapse) {
        this.elIconName = 'el-icon-s-fold';
      } else {
        this.elIconName = 'el-icon-s-unfold';
      }
    },
  },
  computed: {
    path() {
      if (this.$route.path.includes('/about')) {
        return '/about';
      }
      return this.$route.path;
    },
    breadCrumbs() {
      const { meta, fullPath } = this.$route;
      const currentBreadcrumb = { title: meta.title, url: fullPath };
      if (meta.parents) {
        const routeArr = [];
        meta.parents.forEach((item) => {
          routeArr.push({ title: item.title, url: item.path });
        });
        routeArr.push(currentBreadcrumb);
        return routeArr;
      }
      return [currentBreadcrumb];
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
      .el-container{
            .nav-menu{
              position: relative;
              .collapse-menu{
                  font-size: 30px;
                  font-weight: 700;
                  position: absolute;
                  top: 10px;
                  left: 100%;
                  cursor: pointer;
              }
            }
            height: 100%;
            .el-header{
              display: flex;
              align-items: center;
              height: 65px!important;
              background-color: #515A6E;
              border-bottom: 1px solid rgba(0,0,0,.2);
              .logo-img{
                height: 45px;
                display: flex;
                img{
                  height: 100%;
                }
              }
            }
          }
        .el-aside{
          height: 100%;
          background: #515A6E;
        }
        .el-menu{
          border-right: none!important;
        }
        .child-item{
          .el-menu-item {
            background: #363e4f!important;
            &.is-active{
              background: #2d8cf0!important;
              color: #fff!important;
            }
          }
        }
        .is-active{
              background: #2d8cf0!important;
              color: #fff!important;
        }
        .el-menu-item-group{
            .el-menu-item-group__title{
              display: none;
            }
        }
      .iconfont{
        margin-right: 8px;
      }
      .el-main{
        padding-top: 50px!important;
        padding-left: 50px!important;
      }
      .el-breadcrumb{
        margin-bottom: 30px;
      }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
