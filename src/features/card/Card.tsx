import IStyleProps from '../../interfaces/IStyleProps';
import CardBack, { ICardBackProps } from './CardBack';
import CardFront from './CardFront';

interface IProps extends IStyleProps {
    backProps: ICardBackProps;
    flipped: boolean;
    onClick: () => void;
}

const Card = ({ onClick, flipped, backProps }: IProps) => (
    <div className={`card-flippable${flipped ? ' card-flipped' : ''}`}>
        <CardBack {...backProps} />
        <CardFront />
        <button onClick={onClick}>Flip Card</button>
    </div>
);

export default Card;
