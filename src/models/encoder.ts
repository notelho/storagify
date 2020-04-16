export abstract class Encoder {

    abstract when(str: string): Date;

    abstract hash(str: string): string;

    abstract value(str: string): string;

    abstract encode(str: string, timestamp?: number): string;

    abstract decode(str: string): string;

}

export default Encoder;