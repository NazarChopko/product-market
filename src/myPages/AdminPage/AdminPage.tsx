import useHandleProducts from '@/hooks/useHandleProducts';
import ProductCard from '@/components/Product/Product';
import ClientPagination from '@/shared/ClientPagination';

import FileInput from '@/shared/FileInput';

import FormInput from '@/shared/FormInput';
import Button from '@/shared/Button/Button';

const AdminPage = () => {
  const {
    handleAddProduct,
    handleDeleteProduct,
    total,
    products,
    isChoosenFile,
    handleChangeValue,
    handleChangePage,
    user,
    value,
    page,
    onChangeChooseStatus,
    mode,
    toggleEditMode,
    cancelMode,
    handleEditProduct
  } = useHandleProducts();

  const isAddMode = mode === 'add';

  return (
    <main className="flex flex-col items-center justify-center  px-[20px] gap-2">
      <form className="flex justify-center items-end gap-3  p-[20px]">
        <FileInput
          name="image"
          labelText="Choose image"
          onChange={handleChangeValue}
          isChoosen={isChoosenFile}
          onChangeChooseStatus={onChangeChooseStatus}
        />
        <FormInput labelText="Title" name="title" value={value.title} onChange={handleChangeValue} />
        <FormInput labelText="Price" name="price" type="number" value={value.price} onChange={handleChangeValue} />
        <Button onClick={isAddMode ? handleAddProduct : handleEditProduct}>{isAddMode ? 'Add' : 'Edit'}</Button>
        <Button onClick={cancelMode}>Cancel</Button>
      </form>

      <div>
        {products.length ? (
          <ul className="flex justify-center items-stretch  flex-wrap gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  image={product.images[0]}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  isAdmin={user?.username}
                  onDelete={handleDeleteProduct}
                  onEdit={toggleEditMode}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center pt-[30px] text-[36px]">No products</div>
        )}
      </div>
      <ClientPagination items={total} currentPage={page} onChangePage={handleChangePage} itemsPerPage={10} />
    </main>
  );
};

export default AdminPage;
