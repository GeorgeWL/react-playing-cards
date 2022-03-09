import classNames from 'classnames';
import ICardSharedProps from '../../interfaces/CardSharedProps';
import styles from './card.module.scss';

enum EPatterns {
    wavy = 'wavy',
    rhombus = 'rhombus',
    zigZag = 'zig-zag',
    zigZag3d = 'zig-zag3d',
    diagonalStripesThinRightLeft = 'diagonal-stripes-thin-right-left',
    diagonalStripesThinLeftRight = 'diagonal-stripes-thin-left-right',
    diagonalStripesWideRightLeft = 'diagonal-stripes-wide-right-left',
    diagonalStripesWideLeftRight = 'diagonal-stripes-wide-left-right',
    graphPaper = 'graph-paper',
    linedPaperHorizontal = 'lined-paper-horizontal',
    linedPaperVertical = 'lined-paper-vertical',
    squaresPaper = 'squares-paper',
    stripesVertical = 'stripes-vertical',
    stripesHorizontal = 'stripes-horizontal',
    squareTiles = 'square-tiles',
    isometricTiles = 'isometric-tiles',
    dots = 'dots'
}

export interface ICardBackProps extends ICardSharedProps {
    /**
     * Cannot have background image and pattern at same time, background image will overwrite
     */
    patternName: EPatterns;
    /**
     * will have to switch to styled-components to use these, remove for now
     */
    // patternPrimaryColor?: string;
    // patternSecondaryColor?: string;
    // patternOpacity: number;
}

/**
 * Back Side of Card
 * @returns
 */
const CardBack = ({
    style,
    className,
    patternName,
    backgroundImageUrl
}: ICardBackProps) => (
    <div
        title="card back"
        style={{
            ...style,
            backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`,
            opacity: backgroundImageUrl && 1,
            backgroundPosition: backgroundImageUrl && 'center center',
            backgroundSize: backgroundImageUrl && 'cover'
        }}
        className={classNames(
            styles['card-back'],
            !backgroundImageUrl &&
                patternName &&
                styles[`card-back-pattern--${patternName}`],
            className
        )}
    />
);

export default CardBack;
