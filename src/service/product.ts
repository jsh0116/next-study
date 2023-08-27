import path from 'path';
import { promises as fs } from 'fs';
import { Product } from '@/model/product';

export const getProducts = async (): Promise<Product[]> => {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export const getProduct = async (id: string): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find(product => product.id === id);
}