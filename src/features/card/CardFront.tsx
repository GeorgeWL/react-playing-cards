import classNames from 'classnames';
import { ReactNode } from 'react';
import ICardSharedProps from '../../interfaces/CardSharedProps';
import styles from './card.module.scss';

interface ICardFrontProps extends ICardSharedProps {
    children: ReactNode;
}

/**
 * Front side of Card
 */
const CardFront = ({
    style,
    className,
    backgroundImageUrl,
    children
}: ICardFrontProps) => (
    <div
        style={{
            ...style,
            backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`
        }}
        className={classNames(styles['card-front'], className)}
    >
        CardFront {children}
    </div>
);

export default CardFront;
