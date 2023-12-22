// 请注意：如果在此新导出了别的函数或方法，就要重新运行 pnpm dev 以便让Nuxt生成类型。具体看：https://nuxt.com.cn/docs/guide/directory-structure/composables#%E7%B1%BB%E5%9E%8B

// 此处导出后`.js`、`.ts`、`.vue`无需引入即可使用下面导出的hooks或utils
export {
  useECharts,
  useDraggable,
  useWatermark,
  useDark,
  useScrollTo,
  useLoader,
  useCopyToClipboard,
  useGlobal,
  debounce,
  isClient
} from "@pureadmin/utils";
