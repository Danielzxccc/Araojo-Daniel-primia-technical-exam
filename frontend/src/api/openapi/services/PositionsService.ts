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
    /**
     * Get position by ID
     * @returns Position Position retrieved successfully
     * @throws ApiError
     */
    public static getApiPositions1({
        id,
    }: {
        /**
         * ID of the position to retrieve
         */
        id: string,
    }): CancelablePromise<Position> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/positions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete position by ID
     * @returns Position Position deleted successfully
     * @throws ApiError
     */
    public static deleteApiPositions({
        id,
    }: {
        /**
         * ID of the position to retrieve
         */
        id: string,
    }): CancelablePromise<Position> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/positions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update position details
     * @returns Position Position details updated successfully
     * @throws ApiError
     */
    public static putApiPositions({
        id,
        requestBody,
    }: {
        /**
         * ID of the position to update
         */
        id: string,
        requestBody: NewPositionSchema,
    }): CancelablePromise<Position> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/positions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
