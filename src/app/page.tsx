import Face from '@/components/atoms/Face'
import Head from '@/components/atoms/Head'
import FacialHair from '@/components/atoms/FacialHair'
import AvatarFrame from '@/components/avatar-frame'

export default function Home() {
  return (
    <main className='relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container'>
      <section className='hidden lg:flex justify-end items-start py-6 '>
        <AvatarFrame />
      </section>
      <section className='lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen '>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
          <Face />
          <FacialHair />
          <Head />
        </div>
      </section>
    </main>
  )
}
