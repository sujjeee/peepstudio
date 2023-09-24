const componentNames = [
    'None',
    'MedicalMask',
    'Respirator',
];

const createMaskComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        const firstTwoChars = componentName.slice(0, 2);
        const indexNumber = (index + 1).toString().padStart(2, '0');
        const code = `#M${firstTwoChars}${indexNumber}`;
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

export const getMasks = async () => {
    const components = await createMaskComponents();
    const mask = components;
    return mask;
};