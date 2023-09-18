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

// Define an async function to create the components array
const createAccessoryComponents = async () => {
    const components = await Promise.all(componentNames.map(async (componentName, index) => {
        // Extract the first two characters from the component name
        const firstTwoChars = componentName.slice(0, 2);

        // Create a unique index with leading zeros
        const indexNumber = (index + 1).toString().padStart(2, '0');

        // Combine the first two characters and index to create the code
        const code = `#A${firstTwoChars}${indexNumber}`;

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
export const getAccessories = async () => {
    const components = await createAccessoryComponents();
    // Create the bodies array with the generated components
    const accessory = components;
    return accessory;
};