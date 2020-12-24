<template>
  <div class="about">
      <el-button type="success" @click="goPage">成功按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 3,
    };
  },
  methods: {
    goPage() {
      this.$router.push('/about/detail');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
