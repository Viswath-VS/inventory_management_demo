import { DataTable as Table, Modal, Loader, Error } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { memo, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/dataFetch';
import {
  deleteProduct,
  editProduct,
  Product,
  setProducts,
  toggleDisable,
} from '@/store/reducers/product';
import { HomeStatCards } from './HomeStatCards';
import styles from './Home.module.scss';
import TextField from '@/components/TextField';

const Home = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isAdmin = useSelector((state: RootState) => state.user.admin);
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const { data, error, isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 3600000, // 1 hour in milliseconds
  });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleToggleDisable = (id: number) => {
    dispatch(toggleDisable(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleSaveEdit = () => {
    if (!editingProduct?.category) {
      alert('Category is required');
      return;
    }
    dispatch(editProduct(editingProduct));
    setIsModalOpen(false);
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingProduct) {
      const validatedValue = (() => {
        switch (name) {
          case 'quantity':
          case 'price':
          case 'value':
            return Number(value) || 0;
          default:
            return value;
        }
      })();
      setEditingProduct((prev) => (prev ? ({ ...prev, [name]: validatedValue } as Product) : null));
    }
  };

  const handleClose = () => setIsModalOpen(false);

  if (isLoading) return <Loader />;
  if (error) return <Error message="An error occurred. Please try again later." />;
  return (
    <main className={styles['homeContainer']}>
      <HomeStatCards />
      <Table
        headers={['name', 'category', 'value', 'quantity', 'price']}
        data={products}
        getRowId={(row) => row.id}
        isRowDisabled={(row) => row.disabled ?? false}
        onEdit={handleEdit}
        onToggleDisable={handleToggleDisable}
        onDelete={handleDelete}
        actionsEnabled={isAdmin}
      />
      {isModalOpen && (
        <Modal
          title="Edit Product"
          subtitle={`${editingProduct?.name}`}
          onClose={handleClose}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        >
          <div className={styles.modalContent}>
            <TextField
              label="Category"
              value={editingProduct?.category}
              name="category"
              onChange={handleChanges}
            />
            <TextField
              label="Quantity"
              value={editingProduct?.quantity}
              name="quantity"
              onChange={handleChanges}
              type="number"
            />
            <TextField
              label="Price"
              value={editingProduct?.price}
              name="price"
              onChange={handleChanges}
              type="number"
            />
            <TextField
              label="Value"
              value={editingProduct?.value}
              name="value"
              onChange={handleChanges}
              type="number"
            />
          </div>
        </Modal>
      )}
    </main>
  );
};

export default memo(Home);
