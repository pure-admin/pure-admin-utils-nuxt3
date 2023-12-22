<script setup lang="ts">
const { $echarts } = useGlobal<GlobalPropertiesApi>();

isClient &&
  console.log(
    "%c$echarts===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    $echarts
  );
</script>

<template>
  <div></div>
</template>
