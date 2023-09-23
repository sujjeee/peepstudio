"use client"

import Face from '@/test/component/Face'
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

export default function Home() {

    const { data, setPeepData } = usePeep()

    const [componentData, setComponentData] = React.useState<{
        bodies: ComponentData[];
        heads: ComponentData[];
        faces: ComponentData[];
        beards: ComponentData[];
        glasses: ComponentData[];
        masks: ComponentData[];
    }>({
        bodies: [],
        heads: [],
        faces: [],
        beards: [],
        glasses: [],
        masks: [],
    });

    React.useEffect(() => {
        const getBodiesArray = async () => {
            const [fetchedBodies, fetchedHeads, fetchedFaces, fetchedBeards, fetchedAccessories, fetchedMasks] = await Promise.all([
                getBodies(),
                getHeads(),
                getFaces(),
                getBeards(),
                getAccessories(),
                getMasks(),
            ]);

            setComponentData({
                bodies: fetchedBodies,
                heads: fetchedHeads,
                faces: fetchedFaces,
                beards: fetchedBeards,
                glasses: fetchedAccessories,
                masks: fetchedMasks,
            });

            const getRandomIndex = (componentArray: ComponentData[]) => {
                return Math.floor(Math.random() * componentArray.length);
            };

            const fetchedArrays = [fetchedBodies, fetchedHeads, fetchedFaces, fetchedBeards, fetchedAccessories];
            const keys = ["body", "head", "face", "beard", "accessory"];
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const fetchedArray = fetchedArrays[i];
                const randomElement = fetchedArray[getRandomIndex(fetchedArray)];
                setPeepData(key as keyof PeepData, randomElement.code);
            }

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
                        <Head heads={componentData.heads} />
                        <Body bodies={componentData.bodies} />
                        <Face faces={componentData.faces} />
                        <Beard beards={componentData.beards} />
                        <Accessory masks={componentData.masks} glasses={componentData.glasses} />
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
                                    <Head heads={componentData.heads} />
                                </TabsContent>
                                <TabsContent value="body">
                                    <Body bodies={componentData.bodies} />
                                </TabsContent>
                                <TabsContent value="face">
                                    <Face faces={componentData.faces} />
                                </TabsContent>
                                <TabsContent value="beard">
                                    <Beard beards={componentData.beards} />
                                </TabsContent>
                                <TabsContent value="accessory">
                                    <Accessory masks={componentData.masks} glasses={componentData.glasses} />
                                </TabsContent>
                            </Tabs>

                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}
