// Enum สำหรับ AntD InputNumber
export enum EnumAntdInputNumberSize {
  SMALL = "small",
  MIDDLE = "middle",
  LARGE = "large",
}

export enum EnumAntdInputNumberStatus {
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success", // custom, AntD ไม่มีตรงนี้ default, แต่ใช้ theme หรือ style ได้
}

export enum EnumAntdInputNumberStep {
  ONE = 1,
  TEN = 10,
  HUNDRED = 100,
  CUSTOM = -1, // ใช้เป็น flag ถ้าจะกำหนด step เอง
}

export enum EnumAntdInputNumberParser {
  NONE = "none",       // ไม่มี parser
  REMOVE_COMMA = "removeComma", // ลบ comma
  CUSTOM = "custom",   // custom function
}

export enum EnumAntdInputNumberFormatter {
  NONE = "none",
  ADD_COMMA = "addComma",   // ใส่ comma
  CUSTOM = "custom",        // custom function
}
