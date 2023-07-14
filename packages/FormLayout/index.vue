<script lang="ts" setup>
import { nextTick, onMounted, ref, useSlots } from "vue";

const slots = useSlots();

type FormLayoutProps = {
  title?: string;
  fixedContentArea?: boolean;
};

const props = defineProps<FormLayoutProps>();

const formLayoutRef = ref<HTMLElement | null>(null);
const formLayoutHeaderRef = ref<HTMLElement | null>(null);
const formLayoutFooterRef = ref<HTMLElement | null>(null);
const height = ref<number>(0);

onMounted(() => {
  if (props.fixedContentArea) {
    nextTick(() => {
      height.value =
        formLayoutRef.value!.offsetHeight -
        formLayoutHeaderRef.value!.offsetHeight -
        (slots.footer ? formLayoutFooterRef.value!.offsetHeight : 0);
    });
  }
});
</script>

<template>
  <div class="form-layout" ref="formLayoutRef">
    <div class="header" ref="formLayoutHeaderRef">
      <template v-if="!slots.header && title">
        {{ title }}
      </template>
      <slot name="head" v-else></slot>
    </div>
    <div
      :class="'form' + (fixedContentArea ? ' fixed' : '')"
      :style="{ height: height ? height + 'px' : 'auto' }"
    >
      <slot name="default"></slot>
    </div>
    <div class="footer" v-if="slots.footer" ref="formLayoutFooterRef">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.form-layout {
  height: 100%;
}
.header {
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 32px;
}
.form {
  max-width: 800px;
  margin-right: 50px;
}
.form.fixed {
  overflow-y: auto;
}
.footer {
  margin-top: 32px;
  border-top: 1px solid #f5f5f5;
  padding-top: 16px;
  padding-bottom: 32px;
}
</style>
