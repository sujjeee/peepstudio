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

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Face: React.FC<FaceProps> = ({ }) => {
    const { setPeepData } = usePeep()
    const [faces, setFaces] = React.useState<ComponentData[]>([]); // State to store the bodies array

    React.useEffect(() => {
        // Call the async function to get the bodies array
        const getBodiesArray = async () => {
            const fetchedBodies = await getFaces();
            setFaces(fetchedBodies); // Set the bodies array in the component's state
        };
        // Call the function to fetch the bodies array
        getBodiesArray();
    }, []);
    console.log("faces?", setFaces)

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Face
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <RadioGroup defaultValue="card" className="grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-2 mx-auto">
                    {faces.map((face, index) => (
                        <div key={index}>
                            <RadioGroupItem
                                value={face.name}
                                id={face.name}
                                className="peer sr-only"
                                onClick={() => {
                                    setPeepData("face", face.code);
                                }} />
                            <Label
                                htmlFor={face.name}
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
            </CardContent>
        </Card>
    )
}

export default Face