export interface TrainCharacteristic {
    speed: number;
    force: number;
    engineAmperage: number;
}

export interface Train {
    name: string;
    description: string;
    characteristics: TrainCharacteristic[];
}

export const fetchTrains = async (): Promise<Train[]> => {
    const response = await fetch("/gistfile1.json");
    return await response.json();
};
