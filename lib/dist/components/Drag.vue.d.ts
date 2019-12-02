import DragMixin from "../mixins/DragMixin";
export default class Drag extends DragMixin {
    /**
     * Tag to be used as root of this component. Defaults to div.
     */
    tag: string | object;
    readonly showDragImage: import("vue/types/vnode").NormalizedScopedSlot;
    readonly clazz: {
        'drag-in': boolean;
        'drag-out': boolean;
    };
}