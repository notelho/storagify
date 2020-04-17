import * as defaults from './configuration-defaults';
import WorkerType from "./worker-type";

export interface ConfigurationItem {

    n: defaults.ItemName;

    t: defaults.ItemTimestamp;

    w: WorkerType;

}

export default ConfigurationItem;