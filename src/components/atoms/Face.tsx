"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { getFaces } from '@/components/atoms/face/index'
import { usePeep } from '@/lib/context/PeepContext'


interface FaceProps { }

const Face: React.FC<FaceProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    const [faces, setFaces] = React.useState<ComponentData[]>([]);
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);
    const [showAll, setShowAll] = React.useState(false);

    React.useEffect(() => {
        const getFacesArray = async () => {
            const fetchedFaces = await getFaces();
            setFaces(fetchedFaces);

            const randomIndex = Math.floor(Math.random() * fetchedFaces.length);
            const randomFace = fetchedFaces[randomIndex];
            setPeepData("face", randomFace.code);
            setShowRadioGroup(true)
        };
        getFacesArray();
    }, [data.refresh]);

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Faces
                    <button
                        onClick={() => {
                            setShowAll(!showAll)
                        }}
                        className='text-blue-700 text-sm font-medium hover:text-blue-900'>
                        {showAll ? 'Show less' : 'View all'}
                    </button>
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {showRadioGroup && (
                    <RadioGroup
                        key={data.face}
                        defaultValue={data.face}
                        className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {faces.map((face, index) => (
                            (showAll || index < 27) ? (
                                <div key={index}>
                                    <RadioGroupItem
                                        value={face.code}
                                        id={face.code}
                                        className="peer sr-only"
                                        onClick={() => {
                                            setPeepData("face", face.code);
                                        }} />
                                    <Label
                                        htmlFor={face.code}
                                        className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            overflow="hidden"
                                            viewBox="0 0 300 300"
                                            style={{ width: "100%", height: "100%" }}
                                            fill="none"
                                            className=" flex justify-center items-center"
                                        >
                                            {face.component}
                                        </svg>
                                    </Label>
                                </div>
                            ) : null
                        ))}
                    </RadioGroup>
                )}
            </CardContent>
        </Card>
    )
}

export default Face