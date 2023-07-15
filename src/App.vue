<script setup lang="ts">
defineOptions({
  name: "form-example",
});
</script>
<template>
  <div class="out">
    <div class="page-wrapper">
      <FormLayout fixedContentArea>
        <template #header>头部</template>
        <Button>aa</Button>
        <div v-for="i in 100" :key="i">{{ i }}</div>
        <template #footer>尾部</template>
      </FormLayout>
    </div>
  </div>
</template>

<style scoped>
.out {
  width: 1200px;
  height: 400px;
}
.page-wrapper {
  width: 100%;
  height: 100%;
}
</style>
