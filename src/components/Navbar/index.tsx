import React, { useState } from 'react';
import styles from './Navbar.module.scss'; // Make sure to create a CSS file for styling
import ToggleSwitch from '../ToggleSwitch';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
export const Navbar: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(e.target.checked);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>Inventory Management</div>
      <div className={styles.navToggle}>
        <p>User</p>
        <ToggleSwitch id="admin" checked={isAdmin} onChange={handleToggle} />
        <p>Admin</p>
      </div>
      <div className={styles.navLogout}>
        <IconButton>
          <LogoutIcon />
        </IconButton>
      </div>
    </nav>
  );
};
