import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";

function App() {
  const [Product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  let [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div className='mb-4' key={input.id}>
      <label
        htmlFor={input.id}
        className='text-sm font-medium mb-2 text-gray-400'
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={""}
        onChange={onchangeHandler}
      />
    </div>
  ));

  return (
    <main className='container mx-auto'>
      <Button className='bg-indigo-700 hover:bg-indigo-800' onClick={open}>
        Add
      </Button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md-gap-4 '>
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title='Add a New Product'>
        <div className='space-y-3'>{renderFormInputs}</div>
        <div className='flex items-center space-x-3'>
          <Button className='bg-indigo-700 hover:bg-indigo-800'>Submit</Button>
          <Button className='bg-gray-300 hover:bg-gray-400'>Cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
