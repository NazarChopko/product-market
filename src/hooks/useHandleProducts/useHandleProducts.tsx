import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorUser } from '@/redux/selectors/userSelector';
import { getProducts, deleteProduct, addProduct, updateProduct } from '@/services/products';
import { toast } from 'react-toastify';
import type { Product } from '@/types/products';

type Mode = 'edit' | 'add';
type CustomProduct = {
  title: string;
  price: number;
  id: number;
  images: string[];
  description: string;
  category: string;
};

const useHandleProducts = () => {
  const [products, setProducts] = useState<(Product | CustomProduct)[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const { user } = useSelector(selectorUser);
  const [isChoosenFile, setIsChoosenFile] = useState(false);
  const [mode, setMode] = useState<Mode>('add');
  const [editedItemId, setEditedItemId] = useState<number | null>(null);
  const [value, setValue] = useState<Pick<Product, 'title' | 'price' | 'images'>>({
    title: '',
    price: 0,
    images: []
  });

  useEffect(() => {
    const getListOfProducts = async () => {
      try {
        const productList = await getProducts(page + 1);
        setProducts(productList.products);
        setTotal(productList.total);
      } catch (error) {
        console.log(error);
        toast.error('Somethink went wrong when getting products!');
      }
    };

    getListOfProducts();
  }, [page]);

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      if (id >= 195) {
        setProducts((prev) => prev.filter((product) => product.id !== id));
      } else {
        const deleteAction = await deleteProduct(id);
        if (deleteAction.isDeleted) {
          setProducts((prev) => prev.filter((product) => product.id !== deleteAction.id));
        }
      }
      setPage(0);
      toast.success('Product was deleted!');
    } catch (error) {
      console.log(error);
      toast.error('Somethink went wrong when deleting product!');
    }
  };

  const handleAddProduct = async () => {
    try {
      if (!value.price || !value.title || !value.images[0]) {
        return toast.error('Each field must be filled!');
      }
      const product = await addProduct({
        ...value
      });
      const productsCopy = [...products];
      productsCopy.pop();
      setProducts(() => [product, ...productsCopy]);
      setValue({ title: '', price: 0, images: [] });
      onChangeChooseStatus(false);
    } catch (error) {
      console.log(error);
      toast.error('Somethink went wrong when adding product!');
    }
  };

  const handleEditProduct = async () => {
    try {
      if (editedItemId) {
        if (editedItemId < 195) {
          const updatedProduct = await updateProduct(value, editedItemId);
          setProducts((prev) =>
            prev.map((product) => {
              return product.id === updatedProduct.id ? updatedProduct : product;
            })
          );
        } else {
          const findMyProduct = products.find((product) => product.id === editedItemId);
          if (findMyProduct) {
            setProducts((prev) =>
              prev.map((product) =>
                product.id === editedItemId
                  ? {
                      title: value.title,
                      id: editedItemId,
                      price: value.price,
                      images: [findMyProduct.images[0]],
                      description: '',
                      category: ''
                    }
                  : product
              )
            );
          }
        }

        setValue({ title: '', price: 0, images: [] });
        cancelMode();
        toast.success('Product was updated!');
      }
    } catch (error) {
      console.log(error);
      toast.error('Somethink went wrong when updating product!');
    }
  };

  const toggleEditMode = (id: number) => {
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      setValue(() => ({ title: findProduct.title, price: findProduct.price, images: [findProduct.images[0]] }));
      setEditedItemId(id);
      setMode('edit');
    }
  };
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, type: 'file' | 'text' = 'text') => {
    if (type !== 'text') {
      const imageUrl = e.target.files && URL.createObjectURL(e.target.files[0]);
      setValue((prev) => ({ ...prev, images: [imageUrl as string] }));
    }
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeChooseStatus = (status: boolean) => {
    setIsChoosenFile(status);
  };

  const cancelMode = () => {
    if (mode === 'edit') {
      setValue({ title: '', price: 0, images: [] });
      setMode('add');
      onChangeChooseStatus(false);
      setEditedItemId(null);
    }
  };

  return {
    products,
    handleDeleteProduct,
    isChoosenFile,
    value,
    user,
    total,
    handleChangeValue,
    handleAddProduct,
    handleChangePage,
    page,
    onChangeChooseStatus,
    toggleEditMode,
    mode,
    cancelMode,
    handleEditProduct
  };
};

export default useHandleProducts;
