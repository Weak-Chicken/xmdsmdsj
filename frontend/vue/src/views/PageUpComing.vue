<template>
  <div class="pageUpComing">
    <div class="test">
      {{ test_data }}
    </div>
  </div>
</template>

<script>
import DataProvider from '@/components/utils/DataProvider.js';

export default {
  name: 'pageupcoming',

  data() {
    return {
      test_data: DataProvider.data_provider_tester(process.env.NODE_ENV),
    }
  },
}
</script>

<style scoped>

</style>
