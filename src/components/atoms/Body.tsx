"use client"

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { getBody } from '@/components/atoms/body/index'
import { usePeep } from '@/lib/context/PeepContext'

interface BodyProps { }

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Body: React.FC<BodyProps> = ({ }) => {
    const { setPeepData } = usePeep()
    const [bodies, setBodies] = React.useState<ComponentData[]>([]); // State to store the bodies array

    React.useEffect(() => {
        // Call the async function to get the bodies array
        const getBodiesArray = async () => {
            const fetchedBodies = await getBody();
            setBodies(fetchedBodies); // Set the bodies array in the component's state
        };
        // Call the function to fetch the bodies array
        getBodiesArray();
    }, []);
    // console.log("bodies?", bodies)

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Body
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <RadioGroup defaultValue="card" className="grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-2 mx-auto">
                    {bodies.map((body, index) => (
                        <div key={index}>
                            <RadioGroupItem
                                value={body.name}
                                id={body.name}
                                className="peer sr-only"
                                onClick={() => {
                                    setPeepData("body", body.code);
                                }}
                            />
                            <Label
                                htmlFor={body.name}
                                className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="hidden"
                                    viewBox="0 0 818 769"
                                    style={{ width: "100%", height: "100%" }}
                                    fill="none"
                                >
                                    {body.component}
                                    {/* <Tee1 /> */}
                                </svg>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    )
}

export default Body