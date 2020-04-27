import Storagify from "../models/storagify";
import describer from "./describer";
import getFrom from "./get-from";

export function returner(instance: Storagify, action: string, callback?: Function): any {

    describer(instance, action);

    if (callback) {

        let applicationCallback: any;

        try {

            applicationCallback = callback();

            if (applicationCallback) {

                const { parser } = getFrom(instance);

                const parsed = parser.apply(applicationCallback);

                return parsed;

            }

        } catch (error) {

            // thrower

            console.error(error);

        }

        return applicationCallback;

    }

}

export default returner;