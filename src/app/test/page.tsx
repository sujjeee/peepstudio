"use client"

import TestFrame from '@/test/TestFrame'
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
import { getBodies } from '@/components/atoms/body/index'
import { getHeads } from '@/components/atoms/head/index'
import { getFaces } from '@/components/atoms/face/index'
import { getBeards } from '@/components/atoms/beard/index'
import { getAccessories } from '@/components/atoms/accessory/index'
import { getMasks } from '@/components/atoms/mask'
import EditAvtar from '@/test/EditAvatar'
import { Card, CardContent } from '@/components/ui/card'
import { skins } from '@/test/component/Color'
import Editor from '@/components/Editor'
import { cn } from '@/lib/utils'

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

    const getBodiesArray = React.useCallback(async () => {
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

        const randomIndex = Math.floor(Math.random() * skins.length);
        const randomSkinColor = skins[randomIndex];
        setPeepData("skinColor", randomSkinColor);

    }, [data.refresh]);

    React.useEffect(() => {
        getBodiesArray();
    }, [getBodiesArray]);

    return (
        // <div className='flex justify-center items-center h-screen p-6 bg-red-600'>
        //     <div className='relative w-full max-h-[500px] h-full bg-slate-700 flex justify-center items-center'>
        //         {/* <TestFrame /> */}
        //         frmas
        //         <div className='absolute top-0 right-0'>
        //             editor
        //             {/* <Editor components={componentData} /> */}
        //         </div>
        //     </div>
        // </div>
        <main className={cn("relative grid h-screen px-2 lg:px-0 md:container",
            {
                "lg:grid-cols-3": data.edit
            })}>
            <section className={cn("flex justify-center items-center py-6",
                {
                    "lg:justify-end lg:items-start": data.edit

                })}>
                <div className='relative w-full sm:w-auto '>
                    <TestFrame />
                    <div className='absolute top-0 right-0'>
                        <Editor components={componentData} />
                    </div>
                    <div className='absolute -bottom-[100px] text-center w-full'>
                        <div className="flex-1 text-sm leading-loose text-muted-foreground">
                            Built by{" "}
                            <a
                                href="https://twitter.com/sujjeeee"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold transition-colors hover:text-foreground"
                            >
                                Sujjeee
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </section>
            <section className={cn("lg:col-span-2 hidden flex-col items-center py-6 lg:px-20 gap-6 h-screen",
                {
                    "md:flex": data.edit
                })}>
                <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
                    <Card className='w-full rounded-md p-6'>
                        <CardContent className="grid gap-4 p-0">
                            <EditAvtar components={componentData} />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
        // <main className="relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container">
        //     <section className="flex justify-center items-center lg:justify-end lg:items-start py-6">
        //         <div className='relative w-full sm:w-auto '>
        //             <TestFrame />
        //             <div className='absolute top-0 right-0'>
        //                 <Editor components={componentData} />
        //             </div>
        //         </div>
        //     </section>
        //     <section className="lg:col-span-2 hidden md:flex flex-col items-center py-6 lg:px-20 gap-6 h-screen">
        //         <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
        //             <Card className='w-full rounded-md p-6'>
        //                 <CardContent className="grid gap-4 p-0">
        //                     <EditAvtar components={componentData} />
        //                 </CardContent>
        //             </Card>
        //         </div>
        //     </section>
        // </main>
    )
}