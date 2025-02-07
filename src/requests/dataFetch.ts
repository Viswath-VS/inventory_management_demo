import { Product } from '@/store/reducers/product';
import { baseUrl } from '@/config/base';

export type ApiResponse = {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response: Response = await fetch(baseUrl + '/inventory');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse[] = await response.json();
  // Normalize the API data using the product name as id
  return data.map((item, key) => ({
    id: key,
    name: item.name,
    category: item.category,
    value: parseFloat(item.value.replace('$', '')),
    quantity: item.quantity,
    price: parseFloat(item.price.replace('$', '')),
    disabled: false,
  }));
};
