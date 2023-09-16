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

// Define an async function to create the components array
const createFaceComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        // Extract the first two characters from the component name
        const firstTwoChars = componentName.slice(0, 2);

        // Create a unique index with leading zeros
        const indexNumber = (index + 1).toString().padStart(2, '0');

        // Combine the first two characters and index to create the code
        const code = `#${firstTwoChars}${indexNumber}`;

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
export const getFaces = async () => {
    const components = await createFaceComponents();
    // Create the bodies array with the generated components
    const faces = components;
    return faces;
};