/// <reference types="react" />
import { Position } from '../../types';
export interface EdgeAnchorProps {
    className?: string;
    position: Position;
    centerX: number;
    centerY: number;
    radius?: number;
}
export declare const EdgeAnchor: ({ className, position, centerX, centerY, radius }: EdgeAnchorProps) => JSX.Element;
