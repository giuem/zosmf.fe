<template>
  <a-menu
    theme="dark"
    mode="inline"
    @click="handleMenuClick"
    :defaultSelectedKeys="defaultSelectedKeys"
    :defaultOpenKeys="defaultOpenKeys"
  >
    <a-sub-menu v-for="menu in menuConfig" :key="'/dashboard/' + menu.path">
      <span slot="title">
        <a-icon :type="menu.icon" /><span>{{ menu.name }}</span>
      </span>
      <a-menu-item
        v-for="submenu in menu.children"
        :key="'/dashboard/' + menu.path + '/' + submenu.path"
      >
        {{ submenu.name }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import menuConfig from "@/menu";

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
      ],
      menuConfig
    };
  },
  methods: {
    handleMenuClick(e) {
      this.$router.push(e.key);
    }
  }
};
</script>
