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
export interface UserProfile {
    name: string;
    technicianId?: string;
    isTechnician: boolean;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface PrintableGuide {
    id: string;
    title: string;
    content: string;
    contentType: ContentType;
    file: ExternalBlob;
}
export interface http_header {
    value: string;
    name: string;
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
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface ChatMessage {
    id: bigint;
    content: string;
    timestamp: bigint;
    threadId: string;
    isTechnician: boolean;
    senderId: Principal;
}
export interface Appointment {
    status: AppointmentStatus;
    appointmentTimestamp: bigint;
    submissionTimestamp: bigint;
    homeAddress: string;
    caller: Principal;
}
export interface ContentSection {
    id: string;
    title: string;
    content: string;
    contentType: ContentType;
    images: Array<ExternalBlob>;
}
export enum AppointmentStatus {
    completed = "completed",
    confirmed = "confirmed",
    pendingConfirmation = "pendingConfirmation"
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
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addTechnician(id: string, businessName: string, address: string, city: string, phoneNumber: string, serviceArea: Array<bigint>, specialties: string, zipCode: bigint, state: string, latitude: number, longitude: number): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    confirmAppointment(appointmentCaller: Principal): Promise<void>;
    fetchZipCodeBoundary(zipCode: bigint, stateAbbr: string): Promise<string>;
    getActiveTechniciansForChat(): Promise<Array<string>>;
    getAllGuides(): Promise<Array<PrintableGuide>>;
    getAllSections(): Promise<Array<ContentSection>>;
    getAppointments(): Promise<Array<Appointment>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getGuide(id: string): Promise<PrintableGuide | null>;
    getGuidesByContentType(contentType: ContentType): Promise<Array<PrintableGuide>>;
    getMessagesForThread(threadId: string): Promise<Array<ChatMessage>>;
    getSection(id: string): Promise<ContentSection | null>;
    getSectionsByContentType(contentType: ContentType): Promise<Array<ContentSection>>;
    getTechniciansByZip(zipCode: bigint): Promise<Array<Technician>>;
    getThreadList(): Promise<Array<string>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    sendMessage(isTechnician: boolean, content: string, threadId: string): Promise<void>;
    submitAppointment(appointmentTimestamp: bigint, homeAddress: string): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
}
