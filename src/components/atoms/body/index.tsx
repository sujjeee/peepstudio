
// Define an array of component names
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

// Define an async function to create the components array
const createBodyComponents = async () => {
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
export const getBody = async () => {
    const components = await createBodyComponents();
    // Create the bodies array with the generated components
    const bodies = components;
    return bodies;
};