import type { IProduct } from "../interfaces";
import { textSlice } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <div className='max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col'>
      <Image imageUrl={imageURL} altText={title} className='mb-2 rounded-md' />

      <h3 className='font-bold text-lg'>{title}</h3>
      <p className='text-gray-600'>{textSlice(description)}</p>
      <div className='flex items-center my-4 space-x-2'>
        <span className='w-5 h-5 bg-indigo-600 rounded-full cursor-pointer'></span>
      </div>

      <div className='flex items-center justify-between'>
        <span className='text-gray-800 font-bold'>${price}</span>
        <Image
          imageUrl={category.imageURL}
          altText={category.name}
          className='w-5 h-5 rounded-full object-bottom'
        />
      </div>

      <div className='flex items-center justify-between space-x-2 mt-5'>
        <Button
          className='bg-indigo-700 hover:bg-indigo-800'
          width='w-full'
          onClick={() => {}}
        >
          Edit
        </Button>
        <Button
          className='bg-[#c2344d] hover:bg-red-800'
          width='w-full'
          onClick={() => {}}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
