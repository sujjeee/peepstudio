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
import { Settings } from 'lucide-react';

export default function TestFrame() {
    const { data, edit } = usePeep();
    const [allData, setAllData] = React.useState<any>();

    React.useEffect(() => {
        const getComponents = async () => {
            const fetchedHead = await getHeads();
            const fetchedBodies = await getBodies();
            const fetchedFaces = await getFaces();
            const fetchedBeard = await getBeards();
            const fetchedAccessories = await getAccessories();
            const fetchedMasks = await getMasks();

            const allFetchedData = [...fetchedHead, ...fetchedBodies, ...fetchedFaces, ...fetchedBeard, ...fetchedAccessories, ...fetchedMasks];
            setAllData(allFetchedData);
        };

        getComponents();
    }, []);


    const selectedHeadOption = data && allData
        ? allData.find((option: any) => option.code === data.head)
        : null;
    const selectedHeadComponent = selectedHeadOption ? selectedHeadOption.component : null;

    const selectedBodyOption = data && allData
        ? allData.find((option: any) => option.code === data.body)
        : null;
    const selectedBodyComponent = selectedBodyOption ? selectedBodyOption.component : null;

    const selectedFaceOption = data && allData
        ? allData.find((option: any) => option.code === data.face)
        : null;
    const selectedFaceComponent = selectedFaceOption ? selectedFaceOption.component : null;

    const selectedBeardOption = data && allData
        ? allData.find((option: any) => option.code === data.beard)
        : null;
    const selectedBeardComponent = selectedBeardOption ? selectedBeardOption.component : null;

    const selectedAccessoryOption = data && allData
        ? allData.find((option: any) => option.code === data.accessory)
        : null;
    const selectedAccessoryComponent = selectedAccessoryOption ? selectedAccessoryOption.component : null;

    const selectedMaskOption = data && allData
        ? allData.find((option: any) => option.code === data.mask)
        : null;
    const selectedMaskComponent = selectedMaskOption ? selectedMaskOption.component : null;

    return (
        <div className='flex flex-col w-full sm:w-96 gap-4'>
            <div id="avatar-parent" className="w-full sm:w-96 rounded-md overflow-hidden shadow-sm" style={{ background: data.frameColor }}>
                <div id="avatar-wrapper" className=" relative h-full w-full">
                    <svg viewBox="0 0 1400 1400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="person" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(100, 100)">
                            <g id="body" transform="translate(147.000000, 575.000000)">
                                {selectedBodyComponent}
                            </g>
                            <g id="top" transform="translate(0,10)">
                                <g id="head" transform="translate(372.000000, 150.000000)">
                                    {selectedHeadComponent}
                                </g>
                                <g id="face" transform="translate(531.000000, 336.000000)" fill="#000000">
                                    {selectedFaceComponent}
                                </g>
                                <g id="beard/*-None" transform="translate(494.999934, 487.999659)">
                                    {selectedBeardComponent}
                                </g>
                                <g id="mask/*-None" transform="translate(400.999934, 420.999659)">
                                    {selectedMaskComponent}
                                </g>
                                <g id="accessory/*-None" transform="translate(419.000000, 391.000000)">
                                    {selectedAccessoryComponent}
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className='absolute top-2 right-2 backdrop-blur '>
                        <div
                            onClick={edit}
                            className='shrink-0 p-2 h-8 w-8 text-center backdrop-blur-3xl rounded-full cursor-pointer'>
                            <Settings className='h-4 w-4 text-gray-500 hover:text-gray-800  ' />
                        </div>
                    </div>
                </div>
            </div>
            <RandomData />
        </div>
    )
}
