<script setup lang="ts">
import FormLayout from "../packages/formLayout/FormLayout.vue";
defineOptions({
  name: "form-example",
});
</script>
<template>
  <div class="out">
    <FormLayout title="头部" fixed-content-area width="500px">
      <div v-for="i in 100" :key="i">{{ i }}</div>
      <template #footer>尾部</template>
    </FormLayout>
  </div>
</template>

<style scoped>
.out {
  width: 100vw;
  height: 100vh;
}
</style>
