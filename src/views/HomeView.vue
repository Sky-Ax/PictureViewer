<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <main>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div class="mt-10">
      <el-card style="max-width: 480px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
      </el-card>
    </div>
  </main>
</template>
