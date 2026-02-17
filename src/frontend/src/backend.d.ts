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
export interface PrintableGuide {
    id: string;
    title: string;
    content: string;
    contentType: ContentType;
    file: ExternalBlob;
}
export interface QuizQuestion {
    id: string;
    question: string;
    explanation: string;
    section: QuizSectionType;
    correctAnswerIndex: bigint;
    options: Array<string>;
}
export interface QuizResult {
    section: QuizSectionType;
    score: bigint;
    totalQuestions: bigint;
    completedQuestions: bigint;
}
export interface ContentSection {
    id: string;
    title: string;
    content: string;
    contentType: ContentType;
    images: Array<ExternalBlob>;
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
export enum QuizSectionType {
    habitatsHabits = "habitatsHabits",
    identifyBedBugs = "identifyBedBugs",
    treatmentPreparation = "treatmentPreparation",
    prevention = "prevention"
}
export interface backendInterface {
    calculateQuizResult(userAnswers: Array<string>, sectionType: QuizSectionType): Promise<QuizResult>;
    getAllGuides(): Promise<Array<PrintableGuide>>;
    getAllQuizQuestions(): Promise<Array<QuizQuestion>>;
    getAllSections(): Promise<Array<ContentSection>>;
    getGuide(id: string): Promise<PrintableGuide | null>;
    getGuidesByContentType(contentType: ContentType): Promise<Array<PrintableGuide>>;
    getQuestionById(questionId: string): Promise<QuizQuestion | null>;
    getQuizQuestionsBySection(sectionType: QuizSectionType): Promise<Array<QuizQuestion>>;
    getSection(id: string): Promise<ContentSection>;
    getSectionsByContentType(contentType: ContentType): Promise<Array<ContentSection>>;
}
