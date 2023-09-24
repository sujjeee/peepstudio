'use client'

import React, { FC } from 'react'
import useWindowSize from "@/hooks/useWindowSize";
import { Drawer } from "vaul"
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import EditAvtar from '@/test/EditAvatar'
import { Settings } from "lucide-react";
import { usePeep } from "@/lib/context/PeepContext";
import { Button } from './ui/button';

interface EditorProps {
    components: any
}

const Editor: FC<EditorProps> = ({ components }) => {
    const { toggleEdit } = usePeep();
    const { isDesktop } = useWindowSize();

    return (
        <>
            {
                isDesktop
                    ? (
                        <div
                            onClick={toggleEdit}
                            className='shrink-0 p-2 h-8 w-8 text-center backdrop-blur-3xl rounded-full cursor-pointer z-50'>
                            <Settings className='h-4 w-4 text-gray-800 hover:text-gray-600  ' />
                        </div>
                    ) : (
                        <>

                            <Drawer.Root>
                                <DrawerTrigger asChild>
                                    <div
                                        className='shrink-0 p-2 h-8 w-8 text-center backdrop-blur-3xl rounded-full cursor-pointer'>
                                        <Settings className='h-4 w-4 text-gray-800 hover:text-gray-600 z-50 ' />
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent className="h-[60%] pb-2">
                                    <div className='p-4 pt-10'>
                                        <EditAvtar components={components} />
                                    </div>
                                </DrawerContent>
                            </Drawer.Root >

                        </>
                    )
            }
        </>
    )
}

export default Editor