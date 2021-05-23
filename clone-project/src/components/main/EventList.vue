<template>
  <div class="event-list-area">
    <ul class="event-list">
      <li v-for="item in eventlist" :key="item.id">
        <a :href="item.linkUrl">{{item.bannerTitle}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'eventlist'
  ]
}
</script>
