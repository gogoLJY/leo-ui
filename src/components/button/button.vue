<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <i class="leo-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const prefix = 'leo-btn';

export default {
  name: 'LeoCard',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
    circle: Boolean,
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
          'is-loading': this.loading,
          'is-round': round,
          'is-circle': circle,
        },
      ];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
