import Card from '../../features/card/Card';

export default {
    title: 'Card/Card',
    component: Card,
    argTypes: {},
    args: {
        /**
         * Cannot have background image and pattern at same time, background image will overwrite
         */
        backProps: {
            backgroundImageUrl: 'https://placekitten.com/600/800',
            patternName: 'wavy'
        },
        visibleSide: 'Front'
    }
};

const Template = args => <Card {...args} />;

export const Primary = Template.bind({});
