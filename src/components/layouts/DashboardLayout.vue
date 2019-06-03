<template>
  <a-layout class="layout">
    <a-layout-sider
      class="sidebar"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo"><span>z/OSMF</span></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="display: flex; background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown style="margin-left: auto; margin-right: 1em;">
          <a>ST013</a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "DashBoardLayout",
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  color: #fff;
  margin: 16px;
  text-align: center;

  span {
    line-height: 32px;
  }
}

.layout {
  min-height: 100vh;
}

.sidebar {
  height: 100vh;
  overflow: hidden;
}
</style>
