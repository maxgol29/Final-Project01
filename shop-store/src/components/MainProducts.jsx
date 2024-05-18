import React from 'react'
import { products } from '../data'
import { useEffect, useState } from 'react'
import { Spin } from 'antd';
import Product from '../pages/Product'
import { Link } from 'react-router-dom';

function setElectricProduct() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}

const MainProducts = ({sections, name}) => {
    let array = [];
    const [loading, setloading] = useState(false)
    const lists = sections

    useEffect(() => {
        async function preload() {
            setloading(true)
            const {} = await setElectricProduct()
            setloading(false)
        }
        preload()
    }, [])

    if(loading) {
        return (
            <>
                <Spin className='m-auto w-full'/>
            </>
        )
    }

    lists.forEach(section => {
        section.forEach(product => {
            const productsWithDetails = product.color.map((color, index) => ({
                'id': product.id,
                'label': product.label,
                'color': color,
                'price': product.price[0], 
                'images': product.images[index][0], 
                'discount': product.discount
            }));
            array = array.concat(productsWithDetails);
        });
    });

    const shuffleArray = array.slice();
    for(let i = shuffleArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]]
    }

  return (
        <div className='w-full'>
        <h2 className='w-3/4 mb-12 ml-24'>{name}</h2>
        <p className='mb-8 mx-24'>{array.length} products</p>
        <div className='flex flex-wrap flex-row justify-center'>       
            {shuffleArray.map((item, index) => (
                <div>
                    {item.discount ? <p className='bg-red-600 m-8 rounded-full px-6 py-2 text-white text-center absolute z-20'>Sale</p> : <p className='absolute'></p>}
                    <div className='max-w-[352px] w-[352px] h-[500px] bg-white flex flext-col flex-wrap justify-evenly  border-2 border-gray-500 m-1 mb-10'>
                        <div className='bg-white p-10'>
                            <img className='w-[200px] transition duration-300 hover:scale-[1.20] ease-in-out' src={item.images}/>
                        </div>
                        <div className='text-center'>
                            <h1 className='p-4 text-2xl'>{item.label}</h1>
                            {item.discount ? 
                            <div className=''>

                                <p className='text-purple-700 text-2xl inline m-4 line-through font-semibold'>${item.price}.00</p>
                                <p className='text-purple-700 text-2xl inline font-semibold'>${parseFloat((item.price*0.8).toFixed(2))}</p>
                            </div> : 
                                <p className='text-purple-700 text-2xl font-semibold'>${item.price}.00</p>
                            }
                            <button className='bg-purple-500 w-[150px] m-auto h-[50px] rounded-full my-6 text-white transition duration hover:bg-purple-950 ease-in-out'>
                                <Link to={`/item/${item.id}`}>Buy</Link>
                                </button> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainProducts
