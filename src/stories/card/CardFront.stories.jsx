import styles from '../../features/card/card.module.scss';
import CardFront from '../../features/card/CardFront';

const Wrapper = ({ children }) => (
    <div
        style={{ transform: 'translateY(0px) rotateY(0deg)' }}
        className={styles.card}
    >
        {children}
    </div>
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card/CardFront',
    component: CardFront,
    decorators: [
        Story => (
            <Wrapper>
                <Story />
            </Wrapper>
        )
    ]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <CardFront {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
