import Button from '../components/button';
import '../../lib/styles/index.css';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @on-click="onClick" v-bind="$props">primary</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};
