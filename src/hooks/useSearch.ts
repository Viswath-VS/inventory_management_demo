import { Product } from '@/store/reducers/product';

export type searchType = {
  data: Product[];
  searchQuery: string;
};
export const useSearch = ({ data, searchQuery }: searchType): Product[] => {
  const filteredData = data.filter((items) => {
    return items.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return filteredData;
};
