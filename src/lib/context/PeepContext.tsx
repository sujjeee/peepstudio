import { createContext, useContext, useState } from "react";

// Define the shape of your Peep data
interface PeepData {
    edit: boolean
    refresh: boolean
    skinColor: string;
    hairColor: string;
    beardColor: string;
    frameColor: string;
    head: string;
    body: string;
    face: string;
    beard: string;
    mask: string;
    accessory: string;
}

// Define a type for your context
interface PeepContextType {
    data: PeepData;
    setPeepData: (name: keyof PeepData, value: string) => void;
    refreshData: () => void;
    edit: () => void;
}

// Create the PeepContext
const PeepContext = createContext<PeepContextType | undefined>(undefined);

// Create the PeepContextProvider component
export const PeepContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [data, setData] = useState<PeepData>({
        edit: false,
        refresh: false,
        skinColor: "#D08B5B",
        hairColor: '#000000',
        beardColor: '#000000',
        frameColor: '#F3E8FF',
        head: "#HBu09",
        body: "#Ja12",
        face: "#Ca03",
        beard: "",
        mask: "",
        accessory: "",
    });

    const setPeepData = (name: keyof PeepData, value: string) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const refreshData = () => {
        setData((prevState) => ({
            ...prevState,
            refresh: !prevState.refresh,
        }));
    };
    const edit = () => {
        setData((prevState) => ({
            ...prevState,
            edit: !prevState.edit,
        }));
    };

    const contextValue: PeepContextType = {
        data,
        setPeepData,
        refreshData,
        edit,
    };

    return (
        <PeepContext.Provider value={contextValue}>
            {children}
        </PeepContext.Provider>
    );
};

export const usePeep = () => {
    const context = useContext(PeepContext);
    if (context === undefined) {
        throw new Error('usePeep must be used within a PeepContextProvider');
    }
    return context;
};