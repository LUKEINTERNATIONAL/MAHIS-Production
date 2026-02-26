import { D as DemographicBar } from './DemographicBar-CGTqonb3.js';
import { T as Toolbar } from '../index-xu6JaY4K.js';
import { s as defineComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, F as unref, aG as IonContent, bK as IonCard, bu as IonPage } from './vendor-DpSS1aB1.js';
import { G as GoBack } from './GoBack-8CAyjMnT.js';
import { O as OPDDiagnosis } from './OPDDiagnosis-uHG1n9Ff.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Diagnosis",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(Toolbar),
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createVNode(DemographicBar),
              createVNode(GoBack, {
                title: "Diagnosis",
                url: "/patient-profile",
                name: "Back to Profile"
              }),
              createVNode(unref(IonCard), { style: { "max-width": "80vw", "margin": "0 auto", "margin-top": "10px" } }, {
                default: withCtx(() => [
                  createVNode(OPDDiagnosis)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
