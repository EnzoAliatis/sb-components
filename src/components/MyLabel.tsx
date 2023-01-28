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

const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color,
  customColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size}  text-${color}  ${allCaps && 'allCaps'}`}  style={{ color: customColor }}>
      {label}
    </span>
  );
};

export default MyLabel