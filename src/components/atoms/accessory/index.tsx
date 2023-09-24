const componentNames = [
    'None',
    'Eyepatch',
    'Glasses',
    'Glasses2',
    'Glasses3',
    'Glasses4',
    'Glasses5',
    'Sunglasses',
    'Sunglasses2',
];

const createAccessoryComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        const firstTwoChars = componentName.slice(0, 2);
        const indexNumber = (index + 1).toString().padStart(2, '0');
        const code = `#A${firstTwoChars}${indexNumber}`;
        const { default: DynamicComponent } = await import(`./${componentName}`);
        const component = <DynamicComponent />;
        const componentData = {
            code,
            component,
            name: componentName,
        } as const;
        return componentData;
    }));
    return components;
};

export const getAccessories = async () => {
    const components = await createAccessoryComponents();
    const accessory = components;
    return accessory;
};