/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewPositionSchema } from '../models/NewPositionSchema';
import type { Position } from '../models/Position';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PositionsService {
    /**
     * Get positions
     * @returns Position List of positions
     * @throws ApiError
     */
    public static getApiPositions({
        isHiring = 'true',
    }: {
        /**
         * Filter positions by hiring status (optional)
         */
        isHiring?: string,
    }): CancelablePromise<Array<Position>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/positions',
            query: {
                'is_hiring': isHiring,
            },
        });
    }
    /**
     * Create a new position
     * @returns Position Position created successfully
     * @throws ApiError
     */
    public static postApiPositions({
        requestBody,
    }: {
        requestBody: NewPositionSchema,
    }): CancelablePromise<Position> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/positions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
