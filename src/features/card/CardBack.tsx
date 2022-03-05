import IStyleProps from '../../interfaces/IStyleProps';

export interface ICardBackProps extends IStyleProps {
    backgroundImage?: string;
}

/**
 * Back Side of Card
 * @param {object} param.style
 * @param {string} param.className
 * @returns
 */
const CardBack = ({
    style,
    className,
    backgroundImage
}: ICardBackProps): JSX.Element => (
    <div style={{ ...style, backgroundImage }} className={className}>
        CardBack
    </div>
);

export default CardBack;
