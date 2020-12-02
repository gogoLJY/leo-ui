<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <!--  
      <i :class="icon" v-if="icon && !loading" />
    -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const prefix = 'leo-btn';

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: Boolean,
    round: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        prefix,
        this.type ? `${prefix}-${this.type}` : '',
        this.size ? `${prefix}-${this.size}` : '',
        {
          'is-disabled': this.disabled,
          'is-round': this.round,
        },
      ];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('on-click', event);
    },
  },
};
</script>
