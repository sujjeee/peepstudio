import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className='flex flex-col justify-center items-center h-screen px-2'>
            <div className='flex flex-col max-w-[400px] w-full space-y-4'>
                <Skeleton className="h-[400px] w-full rounded-lg" />
                <div className=' flex w-full gap-3'>
                    <Skeleton className="h-[50px] w-full rounded-lg " />
                    <Skeleton className="h-[50px] w-full rounded-lg" />
                </div>
            </div>
        </div>
    )
}