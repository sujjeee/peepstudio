import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
    const imageCount = 50;
    // Create an array of JSX elements using map
    const images = Array.from({ length: imageCount }, (_, index) => (
        <img
            key={index}
            className="w-full mb-5 rounded-md"
            src={`https://source.unsplash.com/random/${index}`}
            alt={`Image ${index}`}
        />
    ));
    return (
        <main className='container max-w-6xl'>
            <div className=' py-8'>
                <Button>Signin to upload</Button>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-4 ">
                {images}
            </div>
        </main>
    )
}
