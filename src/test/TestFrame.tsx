"use client"

import { usePeep } from '@/lib/context/PeepContext';
import React from 'react'
import { getBodies } from '@/components/atoms/body/index'
import { getFaces } from '@/components/atoms/face/index'
import { getBeards } from '@/components/atoms/beard/index';
import { getHeads } from '@/components/atoms/head/index';


export default function TestFrame() {
    const { data } = usePeep();
    const [allData, setAllData] = React.useState<any>();

    React.useEffect(() => {
        const getComponents = async () => {
            const fetchedHead = await getHeads();
            const fetchedBodies = await getBodies();
            const fetchedFaces = await getFaces();
            const fetchedBeard = await getBeards();

            const allFetchedData = [...fetchedHead, ...fetchedBodies, ...fetchedFaces, ...fetchedBeard];
            setAllData(allFetchedData);
        };

        getComponents();
    }, []);

    console.log("all data?", allData)


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

    console.log("selectedBeardComponent", selectedBeardComponent)
    return (
        <div id="avatar-parent"
            className="w-full sm:w-96 rounded-3xl bg-purple-100 overflow-hidden">
            <div id="avatar-wrapper" className="h-full w-full">
                <svg viewBox="0 0 1400 1400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="person" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(100, 100)">
                        <g id="body" transform="translate(147.000000, 585.000000)">
                            {selectedBodyComponent}
                        </g>
                        <g id="head" transform="translate(372.000000, 180.000000)">
                            {selectedHeadComponent}
                        </g>
                        <g id="face" transform="translate(531.000000, 366.000000)" fill="#000000">
                            {selectedFaceComponent}
                        </g>
                        <g id="beard/*-None" transform="translate(494.999934, 517.999659)">
                            {selectedBeardComponent}
                        </g>
                        <g id="accessories/*-None" transform="translate(419.000000, 421.000000)"></g>
                    </g>
                </svg>
            </div>
        </div>
    )
}
