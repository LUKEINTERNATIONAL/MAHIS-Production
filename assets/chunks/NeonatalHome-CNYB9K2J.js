import { v as defineComponent, P as createBlock, A as openBlock, D as withCtx, B as createVNode, G as unref, aF as IonContent, bu as IonPage } from './vendor-CJ5LqAxe.js';
import { T as Toolbar, _ as _export_sfc } from '../index-B5D0YMnm.js';
import { L as LandingPage } from './LandingPage-BghWz7Fs.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NeonatalHome",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(LandingPage)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const NeonatalHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-052dae1c"]]);

export { NeonatalHome as default };
