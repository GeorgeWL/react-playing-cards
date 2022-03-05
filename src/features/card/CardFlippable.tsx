import IStyleProps from '../../interfaces/IStyleProps';
import CardBack, { ICardBackProps } from './CardBack';
import CardFront from './CardFront';

interface IProps extends IStyleProps {
    backProps: ICardBackProps;
    flipped: boolean;
    onClick: () => void;
}

const CardFlippable = ({ onClick, flipped, backProps }: IProps) => {
    return (
        <button
            onClick={onClick}
            className={`card-flippable${flipped ? ' card-flipped' : ''}`}
        >
            <CardBack {...backProps} />
            <CardFront />
        </button>
    );
};

export default CardFlippable;
