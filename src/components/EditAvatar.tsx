import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    ScrollArea,
    ScrollBar
} from '@/components/ui/scroll-area'
import Body from '@/components/atoms/Body'
import Beard from '@/components/atoms/Beard'
import Accessory from '@/components/atoms/Accessory'
import Color from '@/components/atoms/Color'
import Head from '@/components/atoms/Head'
import Face from '@/components/atoms/Face'

interface EditAvatarProps {
    data: AllComponentData
}
const EditAvatar: React.FC<EditAvatarProps> = ({ data }) => {
    const { bodies, heads, faces, beards, glasses, masks } = data;
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
                <Head heads={heads} />
            </TabsContent>
            <TabsContent value="body">
                <Body bodies={bodies} />
            </TabsContent>
            <TabsContent value="face">
                <Face faces={faces} />
            </TabsContent>
            <TabsContent value="beard">
                <Beard beards={beards} />
            </TabsContent>
            <TabsContent value="accessory">
                <Accessory masks={masks} glasses={glasses} />
            </TabsContent>
        </Tabs>
    )
}
export default EditAvatar