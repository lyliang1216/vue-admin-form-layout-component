<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, useSlots } from "vue";

const slots = useSlots();

type FormLayoutProps = {
  title?: string;
  fixedContentArea?: boolean;
  width?: string | number;
  maxWidth?: string | number;
};

const props = withDefaults(defineProps<FormLayoutProps>(), {
  width: "800px",
  maxWidth: "100%",
});

const formLayoutRef = ref<HTMLElement | null>(null);
const formLayoutHeaderRef = ref<HTMLElement | null>(null);
const formLayoutFooterRef = ref<HTMLElement | null>(null);
const height = ref<number>(0);

const _width = computed(() =>
  /[%px]/.test(props.width.toString()) ? props.width : props.width + "px"
);
const _maxWidth = computed(() =>
  /[%px]/.test(props.maxWidth.toString())
    ? props.maxWidth
    : props.maxWidth + "px"
);

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
      <slot name="header" v-else></slot>
    </div>
    <div
      :class="
        'form-layout-content' + (fixedContentArea ? ' fixed-content-area' : '')
      "
      :style="{ height: height ? height + 'px' : 'auto' }"
    >
      <div class="form-content" :style="{ width: _width, maxWidth: _maxWidth }">
        <slot name="default"></slot>
      </div>
    </div>
    <div class="footer" v-if="slots.footer" ref="formLayoutFooterRef">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.form-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 32px;
}
.form-layout-content {
  flex: 1;
}
.form-layout-content.fixed-content-area {
  overflow-y: auto;
}
.form-content {
  padding-left: 50px;
  box-sizing: border-box;
}
.footer {
  margin-top: 32px;
  border-top: 1px solid #f5f5f5;
  padding-top: 16px;
  padding-bottom: 32px;
}
</style>
