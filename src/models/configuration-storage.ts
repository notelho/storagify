import ConfigurationItem from "./configuration-item";
import ConfigurationEnvironment from "./configuration-environment";

export interface ConfigurationStorage {

    env: ConfigurationEnvironment;

    its: ConfigurationItem[];

}

export default ConfigurationStorage;