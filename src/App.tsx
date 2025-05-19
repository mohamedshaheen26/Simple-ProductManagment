import { useState, type FormEvent } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { validateProduct } from "./Validations";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  /* State */
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [Product, setProduct] = useState<IProduct>(defaultProduct);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /* Handlers */
  const open = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    if (!isSubmitted) return;

    let errorMessage = "";

    switch (name) {
      case "title":
        if (value.trim().length < 10 || value.trim().length > 80) {
          errorMessage = "Title must be between 10 and 80 characters.";
        }
        break;
      case "description":
        if (value.trim().length < 10 || value.trim().length > 200) {
          errorMessage = "Description must be between 10 and 200 characters.";
        }
        break;
      case "imageURL":
        if (!value.trim()) {
          errorMessage = "Image URL is required.";
        }
        break;
      case "price":
        if (!/^\d+(\.\d{1,2})?$/.test(value) || parseFloat(value) <= 0) {
          errorMessage = "Price must be a valid positive number.";
        }
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsSubmitted(true);

    const { title, description, imageURL, price } = Product;

    const errors = validateProduct({
      title,
      description,
      imageURL,
      price,
    });

    const isValid =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!isValid) {
      setErrors(errors);
      return;
    }

    console.log("Product submitted:", Product);

    setProduct(defaultProduct);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
    });
    setIsSubmitted(false);
    closeModal();
  };

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
        value={Product[input.name]}
        onChange={onchangeHandler}
      />
      <ErrorMsg message={errors[input.name]} />
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
        <form className='space-y-3' onSubmit={onSubmitHandler}>
          {renderFormInputs}
          <div className='flex items-center space-x-3'>
            <Button className='bg-indigo-700 hover:bg-indigo-800'>
              Submit
            </Button>
            <Button
              className='bg-gray-300 hover:bg-gray-400'
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
