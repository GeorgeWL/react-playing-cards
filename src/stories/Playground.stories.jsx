import dracula from 'prism-react-renderer/themes/dracula';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import Button from '../features/inputs/Button';

const scope = { Button };

const code = `
  <Button primary>
    Text
  </Button>
`;

const Playground = () => (
    <LiveProvider code={code} scope={scope} theme={dracula}>
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row'
            }}
        >
            <LiveError />
            <div
                style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <label style={{ margin: '10px', width: '100%' }}>
                    Preview:
                </label>
                <LivePreview />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <label style={{ margin: '10px', width: '100%' }}>Editor:</label>
                <LiveEditor style={{ position: 'relative', margin: '10px' }} />
            </div>
        </div>
    </LiveProvider>
);

export default {
    title: 'Playground',
    component: Playground
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Playground {...args} />;

export const Primary = Template.bind({});
