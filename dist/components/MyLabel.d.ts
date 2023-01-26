/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * This is the message to show
     */
    label: string;
    /**
     * This is the size of the description
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Set true if you want the label all capitals
     */
    allCaps?: boolean;
    /**
     * Set type color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Set custom color
     */
    customColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, customColor, }: MyLabelProps) => JSX.Element;
