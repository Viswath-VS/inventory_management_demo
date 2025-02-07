import StatCard from '@/components/StatCards';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import styles from './Home.module.scss';
import {
  selectTotalProducts,
  selectTotalCategories,
  selectTotalValue,
  selectOutOfStock,
} from '@/store/reducers/product';
import { useSelector } from 'react-redux';

export const HomeStatCards = () => {
  const totalProducts = useSelector(selectTotalProducts);
  const totalValue = useSelector(selectTotalValue);
  const totalCategoryValue = useSelector(selectTotalCategories);
  const outOfStock = useSelector(selectOutOfStock);

  return (
    <div className={styles['statCardContainer']}>
      <StatCard label="Total Products" icon={<ShoppingCartIcon />} value={String(totalProducts)} />
      <StatCard
        label="Total Store Value"
        icon={<CurrencyExchangeIcon />}
        value={String(totalValue)}
      />
      <StatCard
        label="Total Categories"
        icon={<CategoryIcon />}
        value={String(totalCategoryValue)}
      />
      <StatCard
        label="Out of Stocks"
        icon={<RemoveShoppingCartIcon />}
        value={String(outOfStock)}
      />
    </div>
  );
};
