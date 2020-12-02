import Button from './components/button';

const components = {
  Button,
};

const install = function (Vue, options = {}) {
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
  });

  // Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
