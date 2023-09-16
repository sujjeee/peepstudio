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

// Define an async function to create the components array
const createBeardComponents = async () => {
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
export const getBeards = async () => {
    const components = await createBeardComponents();
    // Create the bodies array with the generated components
    const beards = components;
    return beards;
};