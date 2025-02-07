import React from 'react';
import styles from './Table.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
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
                  <td key={String(header)}>
                    {/* Assumes row[header] exists. You can adjust if you need more custom behavior */}
                    {(row as any)[header]}
                  </td>
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

interface Item {
  name: string;
  category: string;
  price: number;
  quantity: number;
  value: number;
}

const inventoryData: Item[] = [
  { name: 'Bluetooth headset', category: 'Electronic', price: 5, quantity: 5, value: 25 },
  { name: 'Edifier M450D', category: 'Electronic', price: 5, quantity: 0, value: 0 },
  { name: 'Sony 4K 65 inch Ultra TV', category: 'Electronic', price: 50, quantity: 17, value: 850 },
  { name: 'Samsung 85 inch TV', category: 'Electronic', price: 600, quantity: 50, value: 30000 },
  { name: 'Samsung s24 ultra', category: 'Phone', price: 50, quantity: 0, value: 0 },
];

export const Table: React.FC = () => {
  return (
    <div className={styles['table-container']}>
      <table className={styles['inventory-table']}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.value}</td>
              <td className={styles['actions']}>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
