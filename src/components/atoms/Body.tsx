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
import { getBodies } from '@/components/atoms/body/index'
import { usePeep } from '@/lib/context/PeepContext'
import { Button } from '../ui/button'

interface BodyProps { }

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Body: React.FC<BodyProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    const [bodies, setBodies] = React.useState<ComponentData[]>([]);
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);

    React.useEffect(() => {
        const getBodiesArray = async () => {
            const fetchedBodies = await getBodies();
            const slicedHeads = fetchedBodies.slice(0, 27);
            setBodies(slicedHeads);

            const randomIndex = Math.floor(Math.random() * fetchedBodies.length);
            const randomBody = fetchedBodies[randomIndex];
            setPeepData("body", randomBody.code);
            setShowRadioGroup(true)
        };
        getBodiesArray();
    }, [data.refresh]);

    const handleAllPeeps = async () => {
        const fetchedHeads = await getBodies();
        setBodies(fetchedHeads)
    };
    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Body
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
                        key={data.head}
                        defaultValue={data.body}
                        className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {bodies.map((body, index) => (
                            <div key={index}>
                                <RadioGroupItem
                                    value={body.code}
                                    id={body.code}
                                    className="peer sr-only"
                                    onClick={() => {
                                        setPeepData("body", body.code);
                                    }}
                                />
                                <Label
                                    htmlFor={body.code}
                                    className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        overflow="hidden"
                                        viewBox="0 0 900 900"
                                        style={{ width: "100%", height: "100%" }}
                                        fill="none"
                                    >
                                        <g transform="translate(40, 100)" >
                                            {body.component}
                                        </g>
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

export default Body