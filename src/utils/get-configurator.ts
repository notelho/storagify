import Storagify from "../models/storagify";
import Configurator from "../models/configurator";

export function getConfigurator(instance: Storagify): Configurator {

    const env = instance["[[environment]]"];

    if (env.development) {
        return instance[`[[development]]`].config;
    }

    return instance[`[[production]]`].config;
}

export default getConfigurator;