import { Directive, DirectiveBinding, VNode } from "vue";

export const typeshow: Directive<HTMLElement> = {
  mounted: (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) => {
    console.log(el, binding, vnode);
    const {arg, value} = binding;
    let isShow = value.includes(arg);
    if (isShow) return;
    el.parentNode && el.parentNode.removeChild(el); 
  },
} 