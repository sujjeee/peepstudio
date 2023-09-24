const componentNames = [
    'None',
    'Chin',
    'Full',
    'Full2',
    'Full3',
    'Full4',
    'Goatee1',
    'Goatee2',
    'Moustache1',
    'Moustache2',
    'Moustache3',
    'Moustache4',
    'Moustache5',
    'Moustache6',
    'Moustache7',
    'Moustache8',
    'Moustache9',
];

const createBeardComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        const firstTwoChars = componentName.slice(0, 2);
        const indexNumber = (index + 1).toString().padStart(2, '0');
        const code = `#${firstTwoChars}${indexNumber}`;
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

export const getBeards = async () => {
    const components = await createBeardComponents();
    const beards = components;
    return beards;
};