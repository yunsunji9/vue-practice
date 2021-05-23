<template>
  <div class="quick-menu-area">
    <ul class="list-menu">
      <li v-for="menu in quickmenu" :key="menu.id">
        <a href="#">
          <img :src="menu.imgUrl" alt=""/>
          <span class="title">{{ menu.bannerTitle }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'quickmenu'
  ]
}
</script>
