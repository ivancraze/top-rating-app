import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ children, arrow = 'none', appearance, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(className, styles.button, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
            })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};