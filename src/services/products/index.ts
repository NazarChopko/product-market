import type { Products, Product } from '@/types/products';
import { AxiosResponse } from 'axios';
import { $authUrl } from '../config';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProductsSSR = async (
  skip: number = 0,
  sortBy: string,
  order: string,
  searchValue?: string
): Promise<Products> => {
  const query = new URLSearchParams();
  query.set('skip', String((skip - 1) * 10));
  query.set('limit', '10');
  if (sortBy) query.set('sortBy', sortBy);
  if (order) query.set('order', order);
  if (searchValue) query.set('q', searchValue);

  const response = searchValue
    ? await fetch(`${apiUrl}/products/search?${query.toString()}`, { cache: 'no-store' })
    : await fetch(`${apiUrl}/products?${query.toString()}`, { cache: 'no-store' });

  const data = await response.json();
  return data;
};

export const getProducts = async (page: number = 1): Promise<Products> => {
  const products = await fetch(`${apiUrl}/products?limit=${10}&skip=${(page - 1) * 10}`, { cache: 'no-store' });
  return products.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${apiUrl}/products/${id}`, { cache: 'no-store' });
  const data = await response.json();
  return data;
};

export const deleteProduct = async (id: number): Promise<Product & { isDeleted: boolean }> => {
  const response = await $authUrl.delete<null, AxiosResponse<Product & { isDeleted: boolean }>>(`/products/${id}`);
  return response.data;
};

export const addProduct = async (product: Partial<Product>): Promise<Product> => {
  const response = await $authUrl.post<Partial<Product>, AxiosResponse<Product>>(`/products/add`, product);
  return response.data;
};

export const updateProduct = async (product: Partial<Product>, id: number): Promise<Product> => {
  const response = await $authUrl.put<Partial<Product>, AxiosResponse<Product>>(`/products/${id}`, product);
  return response.data;
};
