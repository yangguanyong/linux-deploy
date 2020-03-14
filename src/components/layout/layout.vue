<template>
  <div class="layout">
    <div class="layout-head">
      <span>Logo</span>
      <el-dropdown class="username-wrap">
        <span class="el-dropdown-link">
          {{ userName }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          <el-dropdown-item @click.native="testOvertimeLogout">测试超时退出</el-dropdown-item>
          <el-dropdown-item @click.native="goSystem" v-if="isAdmin">管理后台</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="layout-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { testOvertimeLogout } from "@/api/user";
export default {
  name: "Layout",
  computed: {
    isAdmin() {
      if (this.$store.state.user.userInfo) {
        return this.$store.state.user.userInfo.type === 0; // 管理员
      } else {
        return false;
      }
    },
    userName() {
      return this.$store.state.user.userInfo.name || ""
    }
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    testOvertimeLogout() {
      testOvertimeLogout().then(() => {
      })
    },
    goSystem() {
      this.$router.push({
        name: "System"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "./../../assets/var";
.layout{
  min-width: 800px;
}
.layout-head {
  height: 40px;
  line-height: 40px;
  padding: 0px 20px;
  background: $main;
  color: white;
}
.username-wrap{
  float: right;
}
.el-dropdown-link{
  cursor: pointer;
  color: white;
}
.layout-body{
  width: 800px;
  margin: auto;
  margin-top: 10px;
}
</style>