import { createContext, useContext, useState } from "react";

interface PeepContextType {
    data: PeepData;
    setPeepData: (name: keyof PeepData, value: number | string) => void;
    refreshData: () => void;
    toggleEdit: () => void;
}

const PeepContext = createContext<PeepContextType | undefined>(undefined);

export const PeepContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [data, setData] = useState<PeepData>({
        x_axis: 0,
        y_axis: 0,
        scale: 1,
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

    const setPeepData = (name: keyof PeepData, value: number | string) => {
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
    const toggleEdit = () => {
        setData((prevState) => ({
            ...prevState,
            edit: !prevState.edit,
        }));
    };

    const contextValue: PeepContextType = {
        data,
        setPeepData,
        refreshData,
        toggleEdit,
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