import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import React from 'react'

async function  Shopnow ()  {
    const res=  await client.fetch(`*[_type=="product"]{
        title,
        description,
        productImage,
        price,
        tags,
        discountPercentage,
        isNew
        }[0...8]`)
    console.log(res)
  return (
    <div>
      <div>
        {
            res.map((item:any)=>{
            return(
                <div>
                     <img src={urlFor(item.productImage).url()} alt={item.title} width={300} height={300}/>
                    <h1>{item.title}</h1>
                    <p className='text-sm items-center'>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.tags}</p>
                    <p>{item.discountPercentage}</p>
                    <p>{item.isNew}</p>
                    
                   </div>
                
            )
            })
        }
      </div>
    </div>
  )
}

export default Shopnow
