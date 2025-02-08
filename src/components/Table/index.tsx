import styles from './Table.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TableProps } from './types';

/* eslint-disable */
export const DataTable = <T extends {}>({
  headers,
  data,
  actionsEnabled = true,
  getRowId,
  isRowDisabled,
  onEdit,
  onToggleDisable,
  onDelete,
}: TableProps<T>) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={String(header)}>{String(header).toUpperCase()}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const rowId = getRowId(row);
            const disabled = isRowDisabled ? isRowDisabled(row) : false;
            return (
              <tr key={rowId} className={disabled ? styles.disabledRow : ''}>
                {headers.map((header) => (
                  <td key={String(header)}>{(row as any)[header]}</td>
                ))}
                {
                  <td className={styles.actionCell}>
                    {onEdit && (
                      <button
                        disabled={disabled || !actionsEnabled}
                        onClick={() => onEdit(row)}
                        className={`${styles.actionButton} ${disabled || !actionsEnabled ? styles.disabled : ''}`}
                      >
                        <EditIcon />
                      </button>
                    )}
                    {onToggleDisable && (
                      <button
                        onClick={() => onToggleDisable(rowId)}
                        disabled={!actionsEnabled}
                        className={`${styles.actionButton} ${!actionsEnabled ? styles.disabled : ''}`}
                      >
                        {disabled ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </button>
                    )}
                    {onDelete && (
                      <button
                        disabled={disabled || !actionsEnabled}
                        onClick={() => onDelete(rowId)}
                        className={`${styles.actionButton} ${disabled || !actionsEnabled ? styles.disabled : ''}`}
                      >
                        <DeleteIcon />
                      </button>
                    )}
                  </td>
                }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
