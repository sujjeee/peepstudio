"use client"

import Face from '@/test/component/Face'
import Body from '@/test/component/Body'
import Beard from '@/test/component/Beard'
import Accessory from '@/test/component/Accessory'
import Color from '@/test/component/Color'
import {
    Card,
    CardContent,
} from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Head from '@/test/component/Head'
import React from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface EditAvatarProps {
    components: any
}

const EditAvatar: React.FC<EditAvatarProps> = ({ components }) => {

    return (

        <Tabs defaultValue="head" >
            <ScrollArea className='min-w-[400]'>
                <TabsList className="grid lg:w-full min-w-[450px] grid-cols-6 mb-4">
                    <TabsTrigger value="color">Color</TabsTrigger>
                    <TabsTrigger value="head">Head</TabsTrigger>
                    <TabsTrigger value="body">Body</TabsTrigger>
                    <TabsTrigger value="face">Face</TabsTrigger>
                    <TabsTrigger value="beard">Beard</TabsTrigger>
                    <TabsTrigger value="accessory">Accessory</TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <TabsContent value="color">
                <Color />
            </TabsContent>
            <TabsContent value="head">
                <Head heads={components.heads} />
            </TabsContent>
            <TabsContent value="body">
                <Body bodies={components.bodies} />
            </TabsContent>
            <TabsContent value="face">
                <Face faces={components.faces} />
            </TabsContent>
            <TabsContent value="beard">
                <Beard beards={components.beards} />
            </TabsContent>
            <TabsContent value="accessory">
                <Accessory masks={components.masks} glasses={components.glasses} />
            </TabsContent>
        </Tabs>

    )
}
export default EditAvatar