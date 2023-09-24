"use client"

import React from 'react'
import { usePeep } from '@/lib/context/PeepContext';
import { getBodies } from '@/components/atoms/body/index'
import { getFaces } from '@/components/atoms/face/index'
import { getBeards } from '@/components/atoms/beard/index';
import { getHeads } from '@/components/atoms/head/index';
import { getAccessories } from '@/components/atoms/accessory/index';
import { getMasks } from '@/components/atoms/mask/index';
import RandomData from '@/components/buttons/RandomData';
import { Loader } from 'lucide-react';

export default function AvatarFrame() {
    const { data, } = usePeep();
    const [allData, setAllData] = React.useState<ComponentData[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getComponents = React.useCallback(async () => {
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
        const allFetchedData = [
            ...fetchedBodies,
            ...fetchedHeads,
            ...fetchedFaces,
            ...fetchedBeards,
            ...fetchedAccessories,
            ...fetchedMasks,
        ];
        setAllData(allFetchedData);
        setIsLoading(false);
    }, [])

    React.useEffect(() => {
        getComponents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function getSelectedComponent(
        key: keyof PeepData,
        allData: ComponentData[] | undefined,
        data: PeepData | undefined) {
        if (!allData || !data) {
            return null;
        }

        const selectedOption = allData.find((option) => option.code === data[key]);
        return selectedOption ? selectedOption.component : null;
    }

    const selectedHeadComponent = getSelectedComponent("head", allData, data);
    const selectedBodyComponent = getSelectedComponent("body", allData, data);
    const selectedFaceComponent = getSelectedComponent("face", allData, data);
    const selectedBeardComponent = getSelectedComponent("beard", allData, data);
    const selectedAccessoryComponent = getSelectedComponent("accessory", allData, data);
    const selectedMaskComponent = getSelectedComponent("mask", allData, data);

    return (
        <div className='flex flex-col w-full sm:w-96 gap-4 h-full'>
            <div
                id="avatar-parent"
                className="w-full sm:w-96 rounded-md overflow-hidden shadow-sm" >
                <div
                    id="avatar-wrapper"
                    className="relative h-full w-full"
                    style={{ background: data.frameColor }}>
                    <svg
                        viewBox="0 0 1400 1400"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g
                            id="position"
                            transform={`translate(${data.x_axis}, ${data.y_axis}) scale(${data.scale})`} >
                            <g
                                id="person"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                                transform="translate(100, 100)">
                                <g
                                    id="midBody"
                                    transform="translate(147.000000, 575.000000)">
                                    {selectedBodyComponent}
                                </g>
                                <g
                                    id="upperBody"
                                    transform="translate(0,10)">
                                    <g
                                        id="head"
                                        transform="translate(372.000000, 150.000000)">
                                        {selectedHeadComponent}
                                    </g>
                                    <g
                                        id="face"
                                        transform="translate(531.000000, 336.000000)"
                                        fill="#000000">
                                        {selectedFaceComponent}
                                    </g>
                                    <g
                                        id="beard/*-None"
                                        transform="translate(494.999934, 487.999659)">
                                        {selectedBeardComponent}
                                    </g>
                                    <g
                                        id="mask/*-None"
                                        transform="translate(400.999934, 420.999659)">
                                        {selectedMaskComponent}
                                    </g>
                                    <g
                                        id="accessory/*-None"
                                        transform="translate(419.000000, 391.000000)">
                                        {selectedAccessoryComponent}
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    {isLoading &&
                        <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full '>
                            <Loader className='animate-spin h-12 w-12' />
                        </div>
                    }
                </div>
            </div>
            <RandomData />
        </div>
    )
}
