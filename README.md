# vue-admin-form-layout-component

后台系统表单页面结构

## 安装

```
npm i vue-admin-form-layout-component
```

## 使用

```
import { FormLayout } from "vue-admin-form-layout-component";

<FormLayout title="标题">
    <form>
        表单内容
    </form>>
    <template #footer>
        <button>取消</button>
        <button>保存</button>
    </template>
</FormLayout>
```
