"use client"

import Face from '@/test/component/Face'
import AvatarFrame from '@/components/avatar-frame'
import Body from '@/test/component/Body'
import Beard from '@/test/component/Beard'
import Accessory from '@/test/component/Accessory'
import Color, { skins } from '@/test/component/Color'
import TestFrame from '@/test/TestFrame'
import { usePeep } from '@/lib/context/PeepContext'
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
import { getBodies } from '@/components/atoms/body/index'
import { getHeads } from '@/components/atoms/head/index'
import { getFaces } from '@/components/atoms/face/index'
import { getBeards } from '@/components/atoms/beard/index'
import { getAccessories } from '@/components/atoms/accessory/index'
import { getMasks } from '@/components/atoms/mask'

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};

export default function Home() {

    const { data, setPeepData } = usePeep()
    const [bodies, setBodies] = React.useState<ComponentData[]>([]);
    const [heads, setHeads] = React.useState<ComponentData[]>([]);
    const [faces, setFaces] = React.useState<ComponentData[]>([]);
    const [beards, setBeards] = React.useState<ComponentData[]>([]);
    const [glasses, setGlasses] = React.useState<ComponentData[]>([]);
    const [masks, setMasks] = React.useState<ComponentData[]>([]);
    const [skinColor, setSkinColor] = React.useState<ComponentData[]>([]);

    React.useEffect(() => {
        const getBodiesArray = async () => {
            const fetchedBodies = await getBodies();
            const fetchedHeads = await getHeads();
            const fetchedFaces = await getFaces();
            const fetchedBeards = await getBeards();
            const fetchedAccessories = await getAccessories();
            const fetchedMasks = await getMasks();
            setHeads(fetchedHeads);
            setBodies(fetchedBodies);
            setFaces(fetchedFaces);
            setBeards(fetchedBeards);
            setGlasses(fetchedAccessories);
            setMasks(fetchedMasks);

            const randomHeadIndex = Math.floor(Math.random() * fetchedBodies.length);
            const randomBodyIndex = Math.floor(Math.random() * fetchedHeads.length);
            const randomFaceIndex = Math.floor(Math.random() * fetchedFaces.length);
            const randomBeardIndex = Math.floor(Math.random() * fetchedBeards.length);
            const randomGlassesIndex = Math.floor(Math.random() * fetchedAccessories.length);
            const randomSkinColorIndex = Math.floor(Math.random() * skins.length);
            const randomBody = fetchedBodies[randomHeadIndex];
            const randomHead = fetchedHeads[randomBodyIndex];
            const randomFace = fetchedFaces[randomFaceIndex];
            const randomBeard = fetchedBeards[randomBeardIndex];
            const randomGlasses = fetchedAccessories[randomGlassesIndex];
            const randomSkinColor = skins[randomSkinColorIndex];
            setPeepData("body", randomBody.code);
            setPeepData("head", randomHead.code);
            setPeepData("face", randomFace.code);
            setPeepData("beard", randomBeard.code);
            setPeepData("accessory", randomGlasses.code);
            setPeepData("skinColor", randomSkinColor);
        };
        getBodiesArray();
    }, [data.refresh]);
    return (
        <main className="relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container">
            <section className="flex justify-end items-start py-6">
                <TestFrame />
            </section>
            <section className="lg:col-span-2 flex flex-col items-center py-6 lg:px-20 gap-6 h-screen">
                <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
                    <div className='hidden'>
                        <Head heads={heads} />
                        <Body bodies={bodies} />
                        <Face faces={faces} />
                        <Beard beards={beards} />
                        <Accessory masks={masks} glasses={glasses} />
                        <Color />
                    </div>
                    <Card className='w-full rounded-md p-6'>
                        <CardContent className="grid gap-4 p-0">
                            <Tabs defaultValue="head" >
                                <TabsList className="grid w-full grid-cols-6 mb-4">
                                    <TabsTrigger value="color">Color</TabsTrigger>
                                    <TabsTrigger value="head">Head</TabsTrigger>
                                    <TabsTrigger value="body">Body</TabsTrigger>
                                    <TabsTrigger value="face">Face</TabsTrigger>
                                    <TabsTrigger value="beard">Beard</TabsTrigger>
                                    <TabsTrigger value="accessory">Accessory</TabsTrigger>
                                </TabsList>
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

                        </CardContent>
                    </Card>
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
