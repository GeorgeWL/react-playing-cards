import styles from '../../features/card/card.module.scss';
import CardBack from '../../features/card/CardBack';

const Wrapper = ({ children }) => (
    <div
        style={{ transform: 'translateY(0px) rotateY(180deg)' }}
        className={styles.card}
    >
        {children}
    </div>
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card/CardBack',
    component: CardBack,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    decorators: [
        Story => (
            <Wrapper>
                <Story />
            </Wrapper>
        )
    ]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <CardBack {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    backgroundImageUrl: 'https://placekitten.com/600/800'
};
