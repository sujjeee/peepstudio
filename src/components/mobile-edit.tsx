// "use client"

// import React, { FC } from 'react'
// import { Button } from "@/components/ui/button"
// import { Drawer } from "vaul"
// import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
// import EditAvtar from '@/test/EditAvatar'

// interface MobileEditProps {
//     components: any
// }

// interface SkinsProps { }

// const MobileEdit: FC<MobileEditProps> = ({ components }) => {
//     return (
//         <div className="fixed inset-x-0 bottom-0 p-4 z-10 flex justify-center items-center backdrop-blur-sm ">
//             <Drawer.Root>
//                 <DrawerTrigger asChild>
//                     <Button className="rounded-full max-w-[350px] w-full tracking-wide overflow-y-auto" >
//                         Preview page
//                     </Button>
//                 </DrawerTrigger>
//                 <DrawerContent className="h-[60%] pb-2">
//                     <div className='p-4 pt-10'>
//                         <EditAvtar components={components} />
//                     </div>
//                 </DrawerContent>
//             </Drawer.Root>
//         </div>
//     )
// }

// export default MobileEdit