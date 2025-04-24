<template> </template>

<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  // encodeURIComponent  decodeURIComponent   url加密解密
  // 模板重复语法
  // 无业务作用

  uni.setStorageSync('checkDetailData', item);
  uni.getStorageSync('checkDetailData', item);
  uni.removeStorageSync('storage_key');
  uni.navigateTo({ url: '../chooseSource/chooseSource' });
  uni.showToast({
    icon: 'none',
    title: unBookableInfo,
  });
  uni.navigateTo({
    url: `/checkAppt/checkDetail/checkDetail?type=${activeTab.value}`,
  });
  uni.setNavigationBarTitle({
    title: res.lang.checkAppt.title,
  });
  const props = defineProps({
    modelValue: Boolean,
  });
  const emit = defineEmits(['update:modelValue']);
  // 计算属性：双向绑定 modelValue
  const localValue = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
  });

  // 把代码转化为uni-app项目vue3版本语法 要求完整输出 请求放在onLoad里面 跳转使用uni.navigateTo 不可以改变class名称
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
