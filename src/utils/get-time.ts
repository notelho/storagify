export function getTime(timestamp?: Date | number): number {

	let date: Date = new Date();

	if (timestamp) {
		date = new Date(timestamp);
	}

	return date.getTime();
}

export default getTime; 
