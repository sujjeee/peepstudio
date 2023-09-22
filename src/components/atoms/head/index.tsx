const componentNames = [
    'Twists',
    'Twists2',
    'Pomp',
    'FlatTopLong',
    'GrayShort',
    'HatBeanie',
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

// Define an async function to create the components array
const createBodyComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        // Extract the first two characters from the component name
        const firstTwoChars = componentName.slice(0, 2);

        // Create a unique index with leading zeros
        const indexNumber = (index + 1).toString().padStart(2, '0');

        // Combine the first two characters and index to create the code
        const code = `#H${firstTwoChars}${indexNumber}`;

        // Import the component based on the componentName
        const { default: DynamicComponent } = await import(`./${componentName}`);

        // Instantiate the component
        const component = <DynamicComponent />;

        // Define the component data
        const componentData = {
            code,
            component,
            name: componentName,
        } as const; // Type assertion here

        return componentData;
    }));

    return components;
};

// Call the async function to create the components and bodies arrays
export const getHeads = async () => {
    const components = await createBodyComponents();
    // Create the bodies array with the generated components
    const heads = components;
    return heads;
};
