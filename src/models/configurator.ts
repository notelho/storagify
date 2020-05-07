import * as defaults from '../utils/default-configuration';
import Storagify from "./storagify";
import Encoder from "./encoder";

export abstract class Configurator {

	protected readonly encoder = new Encoder(defaults.developmentKey);

	public abstract update(instance: Storagify, key: string, value: string, timestamp: number): void;

	public abstract when(instance: Storagify, key: string): Date | null;

}

export default Configurator;
