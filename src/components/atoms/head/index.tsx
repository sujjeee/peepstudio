const componentNames = [
    'Twists',
    'Twists2',
    'Pomp',
    'FlatTopLong',
    'GrayShort',
    'Cap',
    'Shaved2',
    'Bun',
    'Bun2',
    'Short4',
    'Short5',
    'Short6',
    'Short1',
    'Turban',
    'Afro',
    'GrayBun',
    'GrayMedium',
    'Cornrows2',
    'HatHip',
    'Long',
    'MediumBangs',
    'MediumBangs2',
    'LongBangs',
    'MediumBangs3',
    'Medium2',
    'Medium3',
    'Hijab',
    'Bangs2',
    'Short2',
    'Short3',
    'Bangs',
    'BantuKnots',
    'Bear',
    'Buns',
    'Cornrows',
    'Mohawk',
    'Mohawk2',
    'NoHair1',
    'NoHair3',
    'FlatTop',
    'Shaved1',
    'Shaved3',
    'NoHair2',
    'MediumStraight',
    'LongAfro',
    'LongCurly',
    'Medium1',
];

const createBodyComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        const firstTwoChars = componentName.slice(0, 2);
        const indexNumber = (index + 1).toString().padStart(2, '0');
        const code = `#H${firstTwoChars}${indexNumber}`;
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

export const getHeads = async () => {
    const components = await createBodyComponents();
    const heads = components;
    return heads;
};
