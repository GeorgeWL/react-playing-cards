import ICardSharedProps from '../../interfaces/CardSharedProps';
import CardBack, { ICardBackProps } from './CardBack';
import CardFront, { ICardFrontProps } from './CardFront';
import styles from './card.module.scss';
import classNames from 'classnames';

enum ECardSide {
    front = 'Front',
    back = 'Back'
}
interface IProps extends ICardSharedProps {
    backProps: ICardBackProps;
    frontProps: ICardFrontProps;
    visibleSide: ECardSide;
    onClick: () => void;
}

const stylesCardFlippedFront = styles['card-flipped-front'];
const stylesCardFlippedBack = styles['card-flipped-back'];

const Card = ({
    onClick,
    visibleSide = ECardSide.front,
    backProps,
    frontProps,
    style,
    className,
    backgroundImageUrl
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
        <CardFront {...frontProps} />
        <CardBack {...backProps} />
        <button onClick={onClick} title="Flip Card">
            Flip Card
        </button>
    </div>
);

export default Card;
