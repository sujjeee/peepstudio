const componentNames = [
    'BlazerBlackTee',
    'ButtonShirt1',
    'ButtonShirt2',
    'Coffee',
    'Device',
    'Dress',
    'Explaining',
    'Gaming',
    'GymShirt',
    'Hoodie',
    'Jacket',
    'JacketPolkaDots',
    'Killer',
    'Macbook',
    'Paper',
    'PointingUp',
    'PoloandSweater',
    'ShirtandCoat',
    'SportyTee',
    'StripedPocketTee',
    'StripedTee',
    'Sweater',
    'SweaterDots',
    'Tee1',
    'Tee2',
    'TeeArmsCrossed',
    'TeeSelena',
    'ThunderTShirt',
    'Turtleneck',
    'Whatever',
];


const createBodyComponents = async () => {
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

export const getBodies = async () => {
    const components = await createBodyComponents();
    const bodies = components;
    return bodies;
};