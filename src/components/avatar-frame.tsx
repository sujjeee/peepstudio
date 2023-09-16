"use client"

import { usePeep } from '@/lib/context/PeepContext';
import React from 'react'
import { getBody } from '@/components/atoms/body/index'
import { getFaces } from '@/components/atoms/face/index'
import { getBeards } from '@/components/atoms/beard/index';
import { getHeads } from '@/components/atoms/head/index';


interface AvatarFrameProps { }

const AvatarFrame: React.FC<AvatarFrameProps> = ({ }) => {
    const { data } = usePeep();
    const [allData, setAllData] = React.useState<any>();

    React.useEffect(() => {
        const getComponents = async () => {
            const fetchedHead = await getHeads();
            const fetchedBodies = await getBody();
            const fetchedFaces = await getFaces();
            const fetchedBeard = await getBeards();

            const allFetchedData = [...fetchedHead, ...fetchedBodies, ...fetchedFaces, ...fetchedBeard];
            setAllData(allFetchedData);
        };

        getComponents();
    }, []);

    // console.log("all data?", allData)


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

    // console.log("selectedFaceComponent?", selectedFaceComponent)

    // // Retrieve the selectedOption for beard
    // const selectedBeardOption = data
    //     ? allData.find((option: any) => option.code === data.beard)
    //     : null;
    // const selectedBeardComponent = selectedBeardOption ? selectedBeardOption.component : null;

    return (
        <div id="avatar-parent"
            className="w-full sm:w-96 rounded-3xl bg-purple-100 overflow-hidden">
            <div id="avatar-wrapper" className="h-full w-full">
                <svg id="avatar" viewBox="0 0 1400 1400" xmlns="http://www.w3.org/2000/svg" overflow="hidden" style={{ width: "100%", height: "100%" }}>

                    <rect x="0" y="0" width="1400" height="1400" fill="transparent"></rect>
                    <g transform="translate(330, 150)">

                        <g id="body" transform="translate(-70, 530)">
                            {selectedBodyComponent}
                        </g>
                        <g id='head'>
                            {selectedHeadComponent}
                        </g>
                        <g id="face" transform="translate(310, 308)">
                            {selectedFaceComponent}
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )

}

export default AvatarFrame