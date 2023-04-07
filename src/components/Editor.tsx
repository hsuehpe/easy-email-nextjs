import React from "react";
import {
  BlockManager,
  BasicType,
  AdvancedType,
} from "@hsuehpe/easy-email-core";
import { EmailEditor, EmailEditorProvider } from "@hsuehpe/easy-email-editor";
import { ExtensionProps, SimpleLayout } from "@hsuehpe/easy-email-extensions";

import "@hsuehpe/easy-email-editor/lib/style.css";
import "@hsuehpe/easy-email-extensions/lib/style.css";

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme-purple/css/arco.css";

const initialValues = {
  subject: "Welcome to Easy-email",
  subTitle: "Nice to meet you!",
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};

export default function Editor() {
  return (
    <EmailEditorProvider
      data={initialValues}
      height={"calc(100vh - 72px)"}
      autoComplete
      dashed={false}
      onUploadImage={async (data) => {
        console.log(data);
        return "https://arco.design/images/logo.svg";
      }}
    >
      {({ values }) => {
        return (
          <SimpleLayout defaultShowLayer={false} showSourceCode={false}>
            <EmailEditor />
          </SimpleLayout>
        );
      }}
    </EmailEditorProvider>
  );
}
