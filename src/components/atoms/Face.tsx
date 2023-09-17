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
import { Button } from '../ui/button'

interface FaceProps { }

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Face: React.FC<FaceProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    const [faces, setFaces] = React.useState<ComponentData[]>([]);
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);

    React.useEffect(() => {
        const getFacesArray = async () => {
            const fetchedFaces = await getFaces();
            const slicedHeads = fetchedFaces.slice(0, 27);
            setFaces(slicedHeads);

            const randomIndex = Math.floor(Math.random() * fetchedFaces.length);
            const randomFace = fetchedFaces[randomIndex];
            setPeepData("face", randomFace.code);
            setShowRadioGroup(true)
        };
        getFacesArray();
    }, []);

    const handleAllPeeps = async () => {
        const fetchedHeads = await getFaces();
        setFaces(fetchedHeads)
    };

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Face
                    <Button variant={'ghost'} onClick={handleAllPeeps} className='text-blue-700'>
                        View all &rarr;
                    </Button>
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {showRadioGroup && (
                    <RadioGroup
                        defaultValue={data.face}
                        className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {faces.map((face, index) => (
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
                        ))}
                    </RadioGroup>
                )}
            </CardContent>
        </Card>
    )
}

export default Face