

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function Shopnow() {
    const res = await client.fetch(`*[_type=="product"]{
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
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Shop Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Array.isArray(res) && res.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <Link href={`/shopnow/${item.price}`}>
                            <Image 
                                src={urlFor(item.productImage).url()} 
                                alt={item.title} 
                                width={300} 
                                height={300} 
                                className="w-full h-64 object-cover"
                            />
                        </Link>
                        <div className="p-4">
                            <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-lg font-bold text-blue-600">${item.price}</p>
                                {item.discountPercentage && (
                                    <p className="text-sm text-red-500 font-medium">{item.discountPercentage}% Off</p>
                                )}
                            </div>
                            {item.isNew && <span className="text-sm font-semibold text-green-500">New Arrival</span>}
                            <p className="text-xs text-gray-500 mt-1">{item.tags?.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shopnow
