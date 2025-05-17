import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

function App() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
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
        <div className='flex items-center space-x-3'>
          <Button className='bg-indigo-700 hover:bg-indigo-800'>Submit</Button>
          <Button className='bg-gray-300 hover:bg-gray-400'>Cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
