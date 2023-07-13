<script setup lang="ts">
defineOptions({
  name: "FormLayout",
});

interface ComponentProps {
  fixedContentArea?: boolean;
}

defineProps<ComponentProps>();
</script>

<template>
  <div class="form-wrapper">
    <div class="form-header">
      <slot name="header"></slot>
    </div>
    <div :class="'form-body' + (fixedContentArea ? ' fixed' : '')">
      <slot name="default"></slot>
    </div>
    <div class="form-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.form-header {
  height: 30px;
  border-bottom: 1px solid #f5f5f5;
}
.form-body {
  flex: 1;
}
.form-body.fixed {
  overflow-y: auto;
}
.form-footer {
  height: 30px;
  border-top: 1px solid #f5f5f5;
}
</style>
