<template>
  <a-menu
    theme="dark"
    mode="inline"
    @click="handleMenuClick"
    :defaultSelectedKeys="defaultSelectedKeys"
    :defaultOpenKeys="defaultOpenKeys"
  >
    <a-sub-menu key="/dashboard/racf">
      <span slot="title">
        <a-icon type="safety" /><span>安全管理（RACF）</span>
      </span>
      <a-menu-item key="/dashboard/racf/demo">Demo</a-menu-item>
      <a-menu-item key="/dashboard/racf/user-demo">用户管理 Demo</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/dashboard/dfsms">
      <span slot="title">
        <a-icon type="hdd" /><span>存储管理（DFSMS）</span>
      </span>
      <!-- <a-menu-item key="2">Demo</a-menu-item> -->
    </a-sub-menu>
    <a-sub-menu key="/dashboard/catalog">
      <span slot="title">
        <a-icon type="inbox" /><span>目录管理（Catalog）</span>
      </span>
      <!-- <a-menu-item key="3">Demo</a-menu-item> -->
    </a-sub-menu>
    <a-sub-menu key="/dashboard/mvs">
      <span slot="title">
        <a-icon type="code" /><span>系统命令（MVS）</span>
      </span>
      <!-- <a-menu-item key="4">Demo</a-menu-item> -->
    </a-sub-menu>
    <a-sub-menu key="/dashboard/rexx">
      <span slot="title">
        <a-icon type="snippets" /><span>脚本语言（REXX）</span>
      </span>
      <!-- <a-menu-item key="5">Demo</a-menu-item> -->
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      defaultSelectedKeys: [this.$route.path],
      defaultOpenKeys: [
        this.$route.path
          .split("/")
          .slice(0, -1)
          .join("/")
      ]
    };
  },
  methods: {
    handleMenuClick(e) {
      this.$router.push(e.key);
    }
  }
};
</script>
