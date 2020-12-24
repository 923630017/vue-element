<template>
    <div>
        <el-button type="success" @click="goPage">成功按钮</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: 3,
      url: 'www.baidu.com',
    };
  },
  methods: {
    goPage() {
      this.$router.push(`/about/detail/edit/${this.id}/${this.url}`);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
