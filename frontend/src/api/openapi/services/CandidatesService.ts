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
        requestBody,
    }: {
        requestBody: NewCandidateSchema,
    }): CancelablePromise<CandidateResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/candidates',
            body: requestBody,
            mediaType: 'application/json',
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
     * Delete a candidate by ID
     * @returns CandidateResponseSchema Candidate deleted successfully
     * @throws ApiError
     */
    public static deleteApiCandidates({
        id,
    }: {
        /**
         * ID of the candidate to delete
         */
        id: number,
    }): CancelablePromise<CandidateResponseSchema> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/candidates/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all candidates
     * @returns CandidateResponseSchema Successful operation
     * @throws ApiError
     */
    public static getApiCandidatesPosition({
        id,
        status,
    }: {
        /**
         * ID of the position to retrieve
         */
        id: string,
        status?: 'hired' | 'candidate',
    }): CancelablePromise<Array<CandidateResponseSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/candidates/position/{id}',
            path: {
                'id': id,
            },
            query: {
                'status': status,
            },
        });
    }
}
