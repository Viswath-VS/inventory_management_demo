/* eslint-disable @typescript-eslint/no-explicit-any */
export type DataTableProps = {
  headers: string[];
  data: Record<string, any>[];
  actionsEnabled?: boolean;
};

export type TableProps<T> = {
  headers: (keyof T)[];
  data: T[];
  actionsEnabled?: boolean;
  getRowId: (row: T) => number;
  isRowDisabled?: (row: T) => boolean;
  onEdit?: (row: T) => void;
  onToggleDisable?: (id: number) => void;
  onDelete?: (id: number) => void;
};
