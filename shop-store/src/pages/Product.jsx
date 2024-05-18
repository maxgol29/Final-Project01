import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import {MainNavbar, Footer, Banner3} from '../components/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import validation from '../LoginValidation';

const Product = () => {
  let array = []
  const {headphones, phones, speakers} = products
  const lists = [headphones, phones, speakers]
  lists.forEach(section => {
    section.forEach(product => {
        const productsWithDetails = product.color.map((color, index) => ({
            'id': product.id,
            'label': product.label,
            'color': color,
            'memory': product.memory,
            'price': product.price[0], 
            'images': product.images[index][0], 
            'discount': product.discount
        }));
        array = array.concat(productsWithDetails);
    });
});

  const { id } = useParams();
  const item = array.find(item => item.id === parseInt(id, 10)); 

  if (!item) return <p>Not Found</p>
  

  return (
    <>
      <MainNavbar />
      <div className='bg-gray-200'>
        <div className='flex flex-row border-b-2 border-stone-500 flex-nowrap justify-center w-10124 m-auto'>
          <div className='flex gap-0 flex-row flex-nowrap'>
            <div className='border-b-2 bg-white border-[1px] border-stone-500 w-[500px] my-32'>
              <div className='inline-block absolute left top-[23%]'>
                <span className='transition duration-500 hover:font-semibold ease-in-out'><a href='/'>Home</a> / </span>
                <span className='transition duration-300 hover:font-semibold ease-in-out'><a href='/shopAll'>All Products</a> / </span>
                <span className=''>{item.label}</span>
            </div>
              <img src={item.images} className='w-[500px] min-w-[500px] max-h-[500px]' />
            </div>
            <div className='flex flex-col justify-around my-32 mx-8 max-h-[500px] w-[400px] '>
              <div className='text-left'>
                <h1 className='text-4xl font-semibold'>{item.label}</h1>
                <h1 className='text-4xl font-semibold' style={{color: `${item.color}`}}>{item.color[0].charAt(0).toLocaleUpperCase()+item.color.slice(1)}</h1>
                <span>SKU: {item.id}</span>
              </div>
              <div className='w-full text-left'>
                {item.discount ? 
                  <div>
                    <p className='text-purple-700 text-4xl inline line-through font-semibold mr-6'>${item.price}.00</p>
                    <p className='text-purple-700 text-4xl inline font-semibold'>${parseFloat((item.price*0.8).toFixed(2))}</p>
                    {validation ? <p className='my-6 text-red-600 text-4xl font-semibold'><p className='text-black'>Price with Login Discount:</p> ${parseFloat((item.price*0.8*0.8).toFixed(2))}</p> : <p></p>}
                  </div> : 
                  <div>
                    <p className='text-purple-700 text-4xl font-semibold'>${item.price}.00</p>
                    {validation ? <p className='my-6 text-red-600 text-4xl font-semibold'><p className='text-black'>Price with Login Discount:</p> ${parseFloat((item.price*0.8*0.8).toFixed(2))}</p> : <p></p>}
                  </div>
                    }
            </div>
            <div>
              <label>Quantity</label>
              <input type='number'max={10} min={0} placeholder='0' className='w-[50px] outline-none h-8 m-4 rounded-lg text-center'></input>
              <div>
                <div className='flex flex-row'>
                  <button className='w-8/12 mb-4 bg-purple-700 transition duration-300 hover:bg-purple-950 ease-in-out rounded-full text-white h-[50px]'>Add to Cart</button>
                  <div className=''>
                    <FontAwesomeIcon icon={faHeart} fade style={{color: "#cf00eb", height: 40, marginBottom: 4, marginLeft: 50}} 
                      className='hover:'
                    />
                  </div>
                </div>
                <button className='w-full bg-black transition duration-300 hover:bg-gray-700 ease-in-out rounded-full text-white h-[50px]'>Buy</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        <div className='w-10/12 m-auto pb-40'>
          <h2 className='m-10'>Description</h2>
          <p className='text-xl'>&nbsp;&nbsp;&nbsp;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam laborum numquam voluptates voluptatem, amet non harum repellat accusamus ipsa earum consectetur, quo quidem natus assumenda! A dolor perspiciatis hic quisquam?</p>
          <br />
          <p className='text-xl'>&nbsp;&nbsp;&nbsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nam culpa nemo, hic non repellendus consequatur vel eius ipsam doloribus odio deleniti aut, facere assumenda, minima animi ea nostrum laudantium.</p>
          <div>
          </div>
        </div>
      </div>
      <Banner3 />
      <Footer />
    </>
  );
};

export default Product;