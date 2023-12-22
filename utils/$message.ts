import type { MessageParams } from "element-plus";

// 此处导出后`.js`、`.ts`、`.vue`无需引入即可使用$message
export default function (options?: MessageParams) {
  return ElMessage(options);
}
