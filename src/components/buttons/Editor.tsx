'use client'

import React, { FC } from 'react'
import useWindowSize from "@/hooks/useWindowSize";
import { Drawer } from "vaul"
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Settings } from "lucide-react";
import { usePeep } from "@/lib/context/PeepContext";
import EditAvatar from '../EditAvatar';

interface EditorProps {
    data: AllComponentData
}

const Editor: FC<EditorProps> = ({ data }) => {
    const { toggleEdit } = usePeep();
    const { isDesktop } = useWindowSize();
    return (
        <>
            {
                isDesktop
                    ? (
                        <div
                            onClick={toggleEdit}
                            className='shrink-0 p-2 h-8 w-8 text-center hover:backdrop-blur-3xl rounded-full cursor-pointer z-50'>
                            <Settings className='h-4 w-4 text-gray-800 ' />
                        </div>
                    ) : (
                        <>
                            <Drawer.Root>
                                <DrawerTrigger asChild>
                                    <div
                                        className='shrink-0 p-2 h-8 w-8 text-center hover:backdrop-blur-3xl rounded-full cursor-pointer'>
                                        <Settings className='h-4 w-4 text-gray-800 z-50 ' />
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent className="h-[60%] pb-2">
                                    <div className='p-4 pt-10'>
                                        <EditAvatar data={data} />
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