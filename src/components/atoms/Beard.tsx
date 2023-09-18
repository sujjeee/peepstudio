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
import { getBeards } from '@/components/atoms/beard/index'
import { usePeep } from '@/lib/context/PeepContext'

interface BeardsProps {

}

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Beards: React.FC<BeardsProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    const [beards, setBeards] = React.useState<ComponentData[]>([]);
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);

    React.useEffect(() => {
        const getBeardsArray = async () => {
            const fetchedBeards = await getBeards();
            setBeards(fetchedBeards);

            const randomIndex = Math.floor(Math.random() * fetchedBeards.length);
            const randomBeard = fetchedBeards[randomIndex];
            setPeepData("beard", randomBeard.code);
            setShowRadioGroup(true)
        };

        getBeardsArray();
    }, [data.refresh]);

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Beards
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {showRadioGroup && (
                    <RadioGroup
                        key={data.head}
                        defaultValue={data.beard}
                        className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {beards.map((beard, index) => (
                            <div key={index}>
                                <RadioGroupItem
                                    value={beard.code}
                                    id={beard.code}
                                    className="peer sr-only" />
                                <Label
                                    htmlFor={beard.code}
                                    className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    onClick={() => {
                                        setPeepData("beard", beard.code);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        overflow="hidden"
                                        viewBox="0 0 450 450"
                                        style={{ width: "100%", height: "100%" }}
                                        fill="none"
                                    >
                                        <g transform="translate(50, 150)" >
                                            {beard.component}
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

export default Beards
