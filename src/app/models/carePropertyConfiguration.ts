import {VisibleState } from "./visibleState";

export interface CarePropertyConfiguration {
    propertyType: string | null;
    visibleState: VisibleState;
    isValidationEnable: boolean;
    displayName: string | null;
    required: boolean;
    regularExpression: string | null;
    minLength: number | null;
    maxLength: number | null;
    requiredMessage: string | null;
}