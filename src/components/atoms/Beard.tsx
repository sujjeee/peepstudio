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

interface BeardsProps {

}

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Beards: React.FC<BeardsProps> = ({ }) => {
    const [beards, setBeards] = React.useState<ComponentData[]>([]);

    React.useEffect(() => {

        const getbeardsArray = async () => {
            const fetchedbeards = await getBeards();
            setBeards(fetchedbeards);
        };

        getbeardsArray();
    }, []);
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
                    {beards.map((body, index) => (
                        <div key={index}>
                            <RadioGroupItem value="card" id={`card-${index}`} className="peer sr-only" />
                            <Label
                                htmlFor={`card-${index}`}
                                className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="hidden"
                                    viewBox="0 0 300 300"
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

export default Beards
