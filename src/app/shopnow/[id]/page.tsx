import React from 'react'
import {client} from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'

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
    <div >
                   
                    <h1>{item?.title}</h1>
                    <p className='text-sm items-center'>{item?.description}</p>
                    <p>{item?.price}</p>
                    <p>{item?.tags}</p>
                    <p>{item?.discountPercentage}</p>
                    <p>{item?.isNew}</p>

                </div>
            )
    
  
}

export default ProDetail
