/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CandidateResponseSchema } from '../models/CandidateResponseSchema';
import type { NewCandidateSchema } from '../models/NewCandidateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CandidatesService {
    /**
     * Create a new candidate
     * @returns CandidateResponseSchema Candidate created successfully
     * @throws ApiError
     */
    public static postApiCandidates({
        formData,
    }: {
        formData: NewCandidateSchema,
    }): CancelablePromise<CandidateResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/candidates',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Get all candidates
     * @returns CandidateResponseSchema Successful operation
     * @throws ApiError
     */
    public static getApiCandidates(): CancelablePromise<Array<CandidateResponseSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/candidates',
        });
    }
    /**
     * Get all candidates
     * @returns CandidateResponseSchema Successful operation
     * @throws ApiError
     */
    public static getApiCandidatesPosition({
        id,
    }: {
        /**
         * ID of the position to retrieve
         */
        id: string,
    }): CancelablePromise<Array<CandidateResponseSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/candidates/position/{id}',
            path: {
                'id': id,
            },
        });
    }
}
