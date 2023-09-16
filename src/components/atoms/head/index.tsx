const componentNames = [
    'Afro.tsx',
    'Bangs.tsx',
    'Bangs2.tsx',
    'BantuKnots.tsx',
    'Bear.tsx',
    'Bun.tsx',
    'Bun2.tsx',
    'Buns.tsx',
    'Cornrows.tsx',
    'Cornrows2.tsx',
    'FlatTop.tsx',
    'FlatTopLong.tsx',
    'GrayBun.tsx',
    'GrayMedium.tsx',
    'GrayShort.tsx',
    'HatBeanie.tsx',
    'HatHip.tsx',
    'Hijab.tsx',
    'Long.tsx',
    'LongAfro.tsx',
    'LongBangs.tsx',
    'LongCurly.tsx',
    'Medium1.tsx',
    'Medium2.tsx',
    'Medium3.tsx',
    'MediumBangs.tsx',
    'MediumBangs2.tsx',
    'MediumBangs3.tsx',
    'MediumStraight.tsx',
    'Mohawk.tsx',
    'Mohawk2.tsx',
    'NoHair1.tsx',
    'NoHair2.tsx',
    'NoHair3.tsx',
    'Pomp.tsx',
    'Shaved1.tsx',
    'Shaved2.tsx',
    'Shaved3.tsx',
    'Short1.tsx',
    'Short2.tsx',
    'Short3.tsx',
    'Short4.tsx',
    'Short5.tsx',
    'Short6.tsx',
    'Turban.tsx',
    'Twists.tsx',
    'Twists2.tsx',
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
