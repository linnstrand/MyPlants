import { Water, Light } from './constants';

export class Plant {
    name: String;
    alias: String;
    latin: String;
    light: Light;
    water: Water;
    care: string;
    _id?: string;
}
