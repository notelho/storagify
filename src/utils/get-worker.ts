import Storagify from "../models/storagify";
import Worker from "../models/worker";

export function getWorker(instance: Storagify): Worker {

    const env = instance["[[environment]]"];

    if (env.development) {
        return instance[`[[development]]`];
    }

    return instance[`[[production]]`];
}

export default getWorker;