import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContentSection {
    id: string;
    title: string;
    content: string;
    contentType: ContentType;
    images: Array<ExternalBlob>;
}
export interface PrintableGuide {
    id: string;
    title: string;
    content: string;
    contentType: ContentType;
    file: ExternalBlob;
}
export interface Technician {
    id: string;
    serviceArea: Array<bigint>;
    latitude: number;
    city: string;
    businessName: string;
    zipCode: bigint;
    state: string;
    longitude: number;
    address: string;
    specialties: string;
    phoneNumber: string;
}
export enum ContentType {
    mouse = "mouse",
    bedBugs = "bedBugs",
    scorpion = "scorpion",
    cockroach = "cockroach",
    hornetWasp = "hornetWasp",
    venomousSnake = "venomousSnake",
    mosquito = "mosquito"
}
export interface backendInterface {
    addTechnician(id: string, businessName: string, address: string, city: string, phoneNumber: string, serviceArea: Array<bigint>, specialties: string, zipCode: bigint, state: string, latitude: number, longitude: number): Promise<void>;
    getAllGuides(): Promise<Array<PrintableGuide>>;
    getAllSections(): Promise<Array<ContentSection>>;
    getGuide(id: string): Promise<PrintableGuide | null>;
    getGuidesByContentType(contentType: ContentType): Promise<Array<PrintableGuide>>;
    getSection(id: string): Promise<ContentSection | null>;
    getSectionsByContentType(contentType: ContentType): Promise<Array<ContentSection>>;
    getTechniciansByZip(zipCode: bigint): Promise<Array<Technician>>;
}
