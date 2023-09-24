"use client"

import Face from '@/components/atoms/Face'
import Head from '@/components/atoms/Head'
import Beard from '@/components/atoms/Beard'
import AvatarFrame from '@/components/avatar-frame'
import Body from '@/components/atoms/Body'
import TestFrame from '@/test/TestFrame'
import Colors from '@/components/atoms/Colors'
import Accessory from '@/components/atoms/Accessory'
import { cn } from '@/lib/utils'
import { usePeep } from '@/lib/context/PeepContext'

export default function Home() {
  const { data } = usePeep()
  return (
    <main className={cn("relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container",
      {
        "lg:grid-cols-0": !data.edit
      }
    )}>
      <section className={cn("flex justify-end items-start py-6",
        {
          "justify-center items-center": !data.edit
        }
      )}>
        <TestFrame />
      </section>
      <section className={cn("lg:col-span-2 flex flex-col items-center py-6 lg:px-20 gap-6 h-screen",
        {
          "hidden": !data.edit
        })}>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
          <Colors />
          <Head />
          <Body />
          <Face />
          <Beard />
          <Accessory />
        </div>
      </section>
    </main>
  )

  //   <main className={cn("relative grid h-screen px-2 lg:px-0 md:container",
  //       {
  //         "lg:grid-cols-3": edit
  //       }
  //     )}>
  //       <section className='flex justify-center items-center py-6 '>
  //         <TestFrame />
  //       </section>
  //       <section className='lg:col-span-2 flex flex-col items-center py-6 lg:px-20 gap-6 h-screen '>
  //         <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
  //           <Colors />
  //           <Head />
  //           <Body />
  //           <Face />
  //           <Beard />
  //           <Accessory />
  //         </div>
  //       </section>
  //     </main>
}
