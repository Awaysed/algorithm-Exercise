<template>
  <Loading :showAlert="loadingFlag"></Loading>
</template>

<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import {} from '@/resource/reservation.js';
  import { getSpecImgUrl } from '@/settings/app';
  import { openPdfUrl } from '@/utils/dsbridge';
  import { navigateConsult } from "@/utils/dsbridge";
  import Loading from '@/components/Loading/Loading.vue';
  const loadingFlag = ref(false);
  // /doctor
  // 模板重复语法
  openPdfUrl({
    url: pdfUrl,
  });

  //业务
  import { initLanguage } from '@/utils/languageUtils';

  onLoad(options => {
    // initOptions(options);
    initLanguage().then(res => {
      content.value = res;
      uni.setNavigationBarTitle({
        title: res.lang.checkAppt.title,
      });
    });
  });
  // 把代码转化为uni-app项目vue3版本语法 要求完整输出 请求放在onLoad里面 跳转使用uni.navigateTo 不可以改变class名称
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
