import Face from '@/components/atoms/Face'
import Head from '@/components/atoms/Head'
import Beard from '@/components/atoms/Beard'
import AvatarFrame from '@/components/avatar-frame'
import Body from '@/components/atoms/Body'
import TestFrame from '@/test/TestFrame'
import Skins from '@/components/atoms/Skins'

export default function Home() {
  return (
    <main className='relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container'>
      <section className='hidden lg:flex justify-end items-start py-6 '>
        <TestFrame />
      </section>
      <section className='lg:col-span-2 flex flex-col items-center py-6 lg:px-20 gap-6 h-screen '>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
          <Skins />
          <Head />
          <Body />
          <Face />
          <Beard />
        </div>
      </section>
    </main>
  )
}
