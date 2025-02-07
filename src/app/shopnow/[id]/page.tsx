import React from 'react'
import {client} from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

async function ProDetail({params}:{params:{id:string}}) {
    
    const data =  await client.fetch(`*[_type=="product"]{
            title,
            description,
            productImage,
            price,
            tags,
            discountPercentage,
            isNew
            }[0...8]`)

          const item= data.find((item:any)=>item.price== Number(params.id))
  return (
    <div>
        <div className='flex justify-center items-center'>
                    <Link href={`/shopnow/${item.price}`}>
                            <Image 
                                src={urlFor(item?.productImage).url()} 
                                alt={item.title} 
                                width={300} 
                                height={300} 
                                className="w-[500px] h-[500px] object-cover"
                            />
                        </Link>
                        </div>
                    <h1 className='font-bold text-5xl text-center mt-6'>{item?.title}</h1>
                    <p className='text-sm items-center ml-20 mr-20 mt-6 '>{item?.description}</p>
                    <p className='font-bold text-2xl ml-20 mr-20'>${item?.price}</p>
                    <p className="text-xs text-gray-500 ml-20 mr-20 mt-1">{item?.tags ?.join(', ')}</p>
                    <p  className="text-sm text-red-500 ml-20 mr-20 font-medium">{item?.discountPercentage}</p>
                    <p className="text-sm text-red-500 ml-20 mr-20 font-medium">{item?.isNew}</p>

                </div>
            )
    
  
}

export default ProDetail
