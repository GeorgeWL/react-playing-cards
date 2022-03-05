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
    isometricTiles = 'isometric-tiles'
}

export interface ICardBackProps extends ICardSharedProps {
    patternName: EPatterns;
    patternPrimaryColor?: string;
    patternSecondaryColor?: string;
    patternOpacity: number;
}

/**
 * Back Side of Card
 * @returns
 */
const CardBack = ({
    style,
    className,
    patternName,
    patternPrimaryColor,
    patternSecondaryColor,
    patternOpacity
}: ICardBackProps) => (
    <div
        title="card back"
        style={{
            ...style,
            ['--pattern-primary-color' as never]:
                patternPrimaryColor ?? '#444cf7',
            ['--pattern-secondary-color' as never]:
                patternSecondaryColor ?? '#f8ff37',
            ['--pattern-opacity' as never]:
                (patternOpacity >= 0 &&
                    patternOpacity <= 100 &&
                    patternOpacity) ??
                0.8
        }}
        className={classNames(
            styles['card-back'],
            patternName && styles[`card-back-pattern--${patternName}`],
            className
        )}
    />
);

export default CardBack;
