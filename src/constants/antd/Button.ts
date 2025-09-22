// ประเภทของปุ่ม (Button Type)
export enum EnumAntdButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DASHED = 'dashed',
  LINK = 'link',
  TEXT = 'text',
}

// รูปแบบ (Variant / State พิเศษ)
export enum EnumAntdButtonVariant {
  SOLID = 'solid',     // ปกติ (ค่า default)
  OUTLINE = 'outline', // ghost
  DANGER = 'danger',   // danger = true
}

// สีของปุ่ม (AntD ใช้ theme token แต่เราทำ mapping ไว้ได้)
export enum EnumAntdButtonColor {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

// ขนาดของปุ่ม
export enum EnumAntdButtonSize {
  LARGE = 'large',
  MIDDLE = 'middle',
  SMALL = 'small',
}

// ไอคอนที่ใช้ในปุ่ม (customize ได้ตาม project)
// ที่นิยมใช้กับ @ant-design/icons
export enum EnumAntdButtonIcon {
  PLUS = 'plus',
  EDIT = 'edit',
  DELETE = 'delete',
  SEARCH = 'search',
  DOWNLOAD = 'download',
  UPLOAD = 'upload',
  ARROW_RIGHT = 'arrow-right',
  ARROW_LEFT = 'arrow-left',
  SAVE = 'save',
  CLOSE = 'close',
  CHECK = 'check',
}

// ตำแหน่งของไอคอน
export enum EnumAntdButtonIconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

// การขยายเต็มความกว้าง (block)
export enum EnumAntdButtonBlock {
  TRUE = 'true',
  FALSE = 'false',
}

// สถานะโหลด
export enum EnumAntdButtonLoading {
  TRUE = 'true',
  FALSE = 'false',
}

// การปิดการใช้งาน
export enum EnumAntdButtonDisabled {
  TRUE = 'true',
  FALSE = 'false',
}

// Shape ของปุ่ม
export enum EnumAntdButtonShape {
  DEFAULT = 'default',
  CIRCLE = 'circle',
  ROUND = 'round',
}
