// ✅ Enum สำหรับ InputText (Ant Design Input)
export enum EnumAntdInputSize {
  Small = "small",
  Middle = "middle",
  Large = "large",
}

export enum EnumAntdInputStatus {
  Error = "error",
  Warning = "warning",
  Success = "success", // custom state ที่อาจใช้ร่วมกับ style
}

export enum EnumAntdInputVariant {
  Outlined = "outlined", // default
  Filled = "filled",
  Borderless = "borderless",
}

export enum EnumAntdInputType {
  Text = "text",
  Password = "password",
  Email = "email",
  Number = "number",
  Search = "search",
  Tel = "tel",
  Url = "url",
}

export enum EnumAntdInputIconPosition {
  Prefix = "prefix",
  Suffix = "suffix",
}
