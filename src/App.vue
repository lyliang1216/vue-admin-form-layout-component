<script setup lang="ts">
import FormLayout from "../packages/FormLayout/index.vue";
defineOptions({
  name: "form-example",
});
</script>
<template>
  <div class="page-wrapper">
    <FormLayout fixedContentArea>
      <template #header> 头部 </template>
      我的表单部分
      <template #footer> 尾部 </template>
    </FormLayout>
  </div>
</template>

<style scoped>
.page-wrapper {
  width: 1200px;
  height: 400px;
}
</style>
