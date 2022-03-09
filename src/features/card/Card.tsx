import classNames from 'classnames';
import { ReactNode } from 'react';
import ICardSharedProps from '../../interfaces/CardSharedProps';
import styles from './card.module.scss';
import CardBack, { ICardBackProps } from './CardBack';
import CardFront from './CardFront';

enum ECardSide {
    front = 'Front',
    back = 'Back'
}
interface IProps extends ICardSharedProps {
    /**
     * Cannot have background image and pattern at same time, background image will overwrite
     */
    backProps: ICardBackProps;
    visibleSide: ECardSide;
    onClick: () => void;
    children: ReactNode;
}

const stylesCardFlippedFront = styles['card-flipped-front'];
const stylesCardFlippedBack = styles['card-flipped-back'];

/**
 * Card with front and back side
 * @returns
 */
const Card = ({
    onClick,
    visibleSide = ECardSide.front,
    backProps,
    style,
    className,
    backgroundImageUrl,
    children
}: IProps) => (
    <div
        style={{
            ...style,
            backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`
        }}
        className={classNames(
            styles.card,
            visibleSide === ECardSide.front
                ? stylesCardFlippedFront
                : stylesCardFlippedBack,
            className
        )}
    >
        <CardFront>{children}</CardFront>
        <CardBack {...backProps} />
        <button onClick={onClick} title="Flip Card">
            Flip Card
        </button>
    </div>
);

export default Card;
