const componentNames = [
    'Awe',
    'Blank',
    'Calm',
    'Cheeky',
    'Concerned',
    'ConcernedFear',
    'Contempt',
    'Cute',
    'Cyclops',
    'Driven',
    'EatingHappy',
    'Shoking',
    'EyesClosed',
    'Fear',
    'Hectic',
    'LovingGrin1',
    'LovingGrin2',
    'Monster',
    'Old',
    'Rage',
    'Serious',
    'Smile',
    'SmileBig',
    'SmileLOL',
    'SmileTeethGap',
    'Solemn',
    'Suspicious',
    'Tired',
    'VeryAngry',
    'WithMaskSmile',
    'WithMaskClam',
    'WithMaskCheers'
];

const createFaceComponents = async () => {
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

export const getFaces = async () => {
    const components = await createFaceComponents();
    const faces = components;
    return faces;
};