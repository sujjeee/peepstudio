type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};

interface PeepData {
    x_axis: number
    y_axis: number
    scale: number
    edit: boolean
    refresh: boolean
    skinColor: string;
    hairColor: string;
    beardColor: string;
    frameColor: string;
    head: string;
    body: string;
    face: string;
    beard: string;
    mask: string;
    accessory: string;
}

interface AllComponentData {
    bodies: ComponentData[];
    heads: ComponentData[];
    faces: ComponentData[];
    beards: ComponentData[];
    glasses: ComponentData[];
    masks: ComponentData[];
}