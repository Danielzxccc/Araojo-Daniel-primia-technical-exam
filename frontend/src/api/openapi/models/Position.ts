/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Position = {
    /**
     * The ID of the position
     */
    id: number;
    /**
     * The title of the position
     */
    title: string;
    /**
     * The description of the position
     */
    description: string;
    /**
     * The start of the salary range for the position
     */
    salary_range_start: number;
    /**
     * The end of the salary range for the position
     */
    salary_range_end: number;
    /**
     * Indicates whether the position is currently hiring
     */
    is_hiring: boolean;
    candidates: string;
};

