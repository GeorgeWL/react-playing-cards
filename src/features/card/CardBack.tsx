import classNames from 'classnames';
import ICardSharedProps from '../../interfaces/CardSharedProps';
import styles from './card.module.scss';

const wavyStyle = {
    backgroundColor: '#e5e5f7',
    opacity: 0.8,
    backgroundImage:
        ' repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 )'
};

enum EPatterns {
    wavy = 'Wavy'
}
export interface ICardBackProps extends ICardSharedProps {
    pattern?: EPatterns;
}

/**
 * Back Side of Card
 * @returns
 */
const CardBack = ({
    style,
    className,
    backgroundImageUrl
}: ICardBackProps): JSX.Element => (
    <div
        style={{
            ...style,
            backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`
        }}
        className={classNames(styles['card-back'], className)}
    >
        CardBack
    </div>
);

export default CardBack;
