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
import { getHeads } from '@/components/atoms/head/index'
import { usePeep } from '@/lib/context/PeepContext'


interface HeadProps {

}


type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Head: React.FC<HeadProps> = ({ }) => {
    const { setPeepData } = usePeep()
    const [heads, setHeads] = React.useState<ComponentData[]>([]); // State to store the bodies array

    React.useEffect(() => {
        // Call the async function to get the bodies array
        const getBodiesArray = async () => {
            const fetchedBodies = await getHeads();
            setHeads(fetchedBodies); // Set the bodies array in the component's state
        };
        // Call the function to fetch the bodies array
        getBodiesArray();
    }, []);
    console.log("Heads?", setHeads)

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    head
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <RadioGroup defaultValue="card" className="grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-2 mx-auto">
                    {heads.map((head, index) => (
                        <div key={index}>
                            <RadioGroupItem
                                value={head.name}
                                id={head.name}
                                className="peer sr-only"
                                onClick={() => {
                                    setPeepData("head", head.code);
                                }} />
                            <Label
                                htmlFor={head.name}
                                className="w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="hidden"
                                    viewBox="0 0 700 700"
                                    style={{ width: "100%", height: "100%" }}
                                    fill="none"
                                >
                                    <g transform="translate(120, 100)" >
                                        {head.component}
                                    </g>
                                </svg>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    )
}

export default Head