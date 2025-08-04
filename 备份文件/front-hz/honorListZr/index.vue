<template>
  <view class="-container">
    <h2>231</h2>
    <pcCarousel
      :data="datalist"
      field="img"
      @selection="selection"
    ></pcCarousel>
    <view @click="createImg">生成图片</view>
    <view>
      <l-painter ref="painter">
        <l-painter-view
          css="background: #07c160; height: 120rpx; width: 120rpx; display: inline-block"
        ></l-painter-view>
        <l-painter-view
          css="background: #1989fa; height: 120rpx; width: 120rpx; border-top-right-radius: 60rpx; border-bottom-left-radius: 60rpx; display: inline-block; margin: 0 30rpx;"
          >2312</l-painter-view
        >
        <l-painter-view
          css="background: #ff9d00; height: 120rpx; width: 120rpx; border-radius: 50%; display: inline-block"
        ></l-painter-view>
      </l-painter>
    </view>
    <image :src="imgUrl" mode="scaleToFill" />
  </view>
</template>

<script setup>
  import { onLoad } from '@dcloudio/uni-app';
  import { ref } from 'vue';
  import pcCarousel from './../../uni_modules/pc-carousel/components/pc-carousel/pc-carousel.vue';
  const datalist = [
    {
      name: '图片1',
      img: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    },
    {
      name: '图片2',
      img: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    },
    {
      name: '图片3',
      img: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    },
    {
      name: '图片4',
      img: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    },
    {
      name: '图片5',
      img: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    },
    {
      name: '图片6',
      img: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    },
    {
      name: '图片7',
      img: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    },
    {
      name: '图片8',
      img: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    },
    {
      name: '图片9',
      img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
  ];
  const selection = () => {};
  const painter = ref();
  const imgUrl = ref('');
  const createImg = () => {
    console.log(4444,painter.value);
    painter.value.canvasToTempFilePathSync({
      fileType: 'jpg',
      // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
      pathType: 'url',
      quality: 1,
      success: res => {
        console.log(res.tempFilePath);
        imgUrl.value = res.tempFilePath;
        // 非H5 保存到相册
        uni.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function () {
            console.log('save success');
          },
        });
      },
    });
  };

  onLoad(() => {
    uni.setNavigationBarTitle({
      title: 'Page Title',
    });
  });
</script>

<style scoped lang="scss"></style>
