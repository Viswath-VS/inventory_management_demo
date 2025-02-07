import React from 'react';
import styles from './Navbar.module.scss'; // Make sure to create a CSS file for styling
import ToggleSwitch from '../ToggleSwitch';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setAdmin } from '@/store/reducers/user';

export const Navbar: React.FC = () => {
  const { admin } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  // const [isAdmin, setIsAdmin] = useState(admin);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAdmin(e.target.checked));
    // setIsAdmin(e.target.checked);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>Inventory Management</div>
      <div className={styles.navToggle}>
        <p>User</p>
        <ToggleSwitch id="admin" checked={admin} onChange={handleToggle} />
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
