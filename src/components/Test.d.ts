import Vue, { VNode } from 'vue';

declare class Test extends Vue {
  $slots: {
    '': VNode[];
  }
}

export default Test;
