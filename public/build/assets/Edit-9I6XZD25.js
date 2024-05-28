import { mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DghWZQhX.js";
import { _ as _sfc_main$2 } from "./Form-BahOAKoT.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./FormSection-Bagb16Ak.js";
import "./SectionTitle-4i2p8f-X.js";
import "./TextInput-DgxY96_7.js";
import "./InputLabel-Cnda-O0w.js";
import "./PrimaryButton-RlSpMaQb.js";
const __default__ = {
  name: "LevelEdit"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    level: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.level.name,
      required_score: props.level.required_score
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Edit Level" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-[#353531] leading-tight"${_scopeId}>Update Level</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-[#353531] leading-tight" }, "Update Level")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="flex flex-col justify-center items-center m-3 gap-8"${_scopeId}><article${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              updating: true,
              form: unref(form),
              onSubmit: ($event) => unref(form).put(_ctx.route("levels.update", __props.level.id))
            }, null, _parent2, _scopeId));
            _push2(`</article></section>`);
          } else {
            return [
              createVNode("section", { class: "flex flex-col justify-center items-center m-3 gap-8" }, [
                createVNode("article", null, [
                  createVNode(_sfc_main$2, {
                    updating: true,
                    form: unref(form),
                    onSubmit: ($event) => unref(form).put(_ctx.route("levels.update", __props.level.id))
                  }, null, 8, ["form", "onSubmit"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Levels/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
