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

interface HeadProps { }


type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Head: React.FC<HeadProps> = ({ }) => {
    const { setPeepData, data } = usePeep()
    const [heads, setHeads] = React.useState<ComponentData[]>([]);
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);
    const [showAll, setShowAll] = React.useState(false);

    React.useEffect(() => {
        const getHeadArray = async () => {
            const fetchedHeads = await getHeads();
            // const slicedHeads = fetchedHeads.slice(0, 27);
            setHeads(fetchedHeads);

            const randomIndex = Math.floor(Math.random() * fetchedHeads.length);
            const randomHead = fetchedHeads[randomIndex];
            setPeepData("head", randomHead.code);
            setShowRadioGroup(true);
        };
        getHeadArray();
    }, [data.refresh]);

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Heads
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
                        key={data.head}
                        defaultValue={data.head}
                        className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {heads.map((head, index) => (
                            (showAll || index < 27) ? (
                                <div key={index}>
                                    <RadioGroupItem
                                        value={head.code}
                                        id={head.code}
                                        className="peer sr-only"
                                        onClick={() => {
                                            setPeepData("head", head.code);
                                        }} />
                                    <Label
                                        htmlFor={head.code}
                                        className="w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            overflow="hidden"
                                            viewBox="0 0 700 700"
                                            style={{ width: "100%", height: "100%" }}
                                            fill="none"
                                        >
                                            <g transform="translate(120, 100)">
                                                {head.component}
                                            </g>
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

export default Head