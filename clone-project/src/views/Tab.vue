<template>
  <div>
    <ul>
      <li v-for="(tab, index) in tabList" :key="index" :class="{'active': activeTab == index}">
        <a href="#" @click.prevent="activeTab = index">
          {{tab}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabList: [
        'tab1',
        'tab2',
        'tab3',
        'tab4'
      ]
    }
  }
}
</script>

<style scoped>

</style>
