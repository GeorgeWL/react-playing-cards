import classNames from 'classnames';
import { ReactChildren } from 'react';
import ICardSharedProps from '../../interfaces/CardSharedProps';
import styles from './card.module.scss';

export interface ICardFrontProps extends ICardSharedProps {
    corner?: ReactChildren;
}

/**
 * Front side of Card
 */
const CardFront = ({
    style,
    className,
    backgroundImageUrl
}: ICardFrontProps) => (
    <div
        style={{
            ...style,
            backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`
        }}
        className={classNames(styles['card-front'], className)}
    >
        CardFront
    </div>
);

export default CardFront;
