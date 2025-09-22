// Enum สำหรับ AntD Select

// โหมดของ Select
export enum EnumAntdSelectMode {
  DEFAULT = "default",      // โหมดปกติ
  MULTIPLE = "multiple",    // เลือกหลายค่า
  TAGS = "tags",            // เลือกหลายค่าแบบสร้าง tag ใหม่ได้
}

// ขนาดของ Select
export enum EnumAntdSelectSize {
  SMALL = "small",
  MIDDLE = "middle",
  LARGE = "large",
}

// สถานะของ Select
export enum EnumAntdSelectStatus {
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success", // custom, AntD ไม่มี default, ใช้ร่วม Form.Item validateStatus
}

// Option filter property (ใช้สำหรับ filterOption)
export enum EnumAntdSelectOptionFilterProp {
  LABEL = "label",
  VALUE = "value",
  CHILDREN = "children",
}
