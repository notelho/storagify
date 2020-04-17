import ConfigurationItem from "./configuration-item";
import StorageEnvironment from "./storage-environment";

export interface StorageConfiguration {

    itn: ConfigurationItem[];

    env: StorageEnvironment;

}

export default StorageConfiguration;