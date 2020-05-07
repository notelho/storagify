import Configurator from "./configurator";
import Storagify from "./storagify";
import getFrom from "../utils/get-from";

export class ConfiguratorProduction extends Configurator {

	constructor() {
		super();
	}

	public update(instance: Storagify, key: string, value: string, timestamp: number): void {

		const { calls, convertor, } = getFrom(instance);

		const encryptedValue = convertor.createProductionValue(instance, value, timestamp);

		const encryptedKey = convertor.createProductionKey(instance, key);

		calls.setItem(encryptedKey, encryptedValue);

	}

	public when(instance: Storagify, key: string): Date | null {

		const { encoder, calls, convertor } = getFrom(instance);

		const encryptedKey = encoder.encodeDES(key);

		const encryptedValue = calls.getItem(encryptedKey);

		if (encryptedValue) {

			const decryptedValue = encoder.decodeAES(encryptedValue);

			const { timestamp } = convertor.split(decryptedValue);

			return new Date(timestamp);

		} else {

			return null;

		}

	}

}

export default ConfiguratorProduction;
