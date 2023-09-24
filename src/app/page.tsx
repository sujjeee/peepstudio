"use client"

import React from 'react'
import { usePeep } from '@/lib/context/PeepContext'
import { getBodies } from '@/components/atoms/body/index'
import { getHeads } from '@/components/atoms/head/index'
import { getFaces } from '@/components/atoms/face/index'
import { getBeards } from '@/components/atoms/beard/index'
import { getAccessories } from '@/components/atoms/accessory/index'
import { getMasks } from '@/components/atoms/mask'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { skins } from '@/components/atoms/Color'
import AvatarFrame from '@/components/AvatarFrame'
import Editor from '@/components/buttons/Editor'
import EditAvatar from '@/components/EditAvatar'

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
    const [
      fetchedBodies,
      fetchedHeads,
      fetchedFaces,
      fetchedBeards,
      fetchedAccessories,
      fetchedMasks
    ] = await Promise.all([
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
    <main className={cn("relative grid h-screen px-2 lg:px-0 md:container",
      {
        "lg:grid-cols-3": data.edit
      })}>
      <section className={cn("flex justify-center items-center py-6",
        {
          "lg:justify-end lg:items-start": data.edit
        })}>
        <div className='relative w-full sm:w-auto '>
          <AvatarFrame />
          <div className='absolute top-0 right-0'>
            <Editor data={componentData} />
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
              <EditAvatar data={componentData} />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}