import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FormSection-Bagb16Ak.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./TextInput-DgxY96_7.js";
import { _ as _sfc_main$2 } from "./InputLabel-Cnda-O0w.js";
import { _ as _sfc_main$5 } from "./PrimaryButton-RlSpMaQb.js";
const __default__ = {
  name: "LevelsForm"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    form: {
      type: Object,
      required: true
    },
    updating: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["submit"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onSubmitted: ($event) => _ctx.$emit("submit")
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.updating ? "Update Level" : "Create New Level")}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.updating ? "Update Level" : "Create New Level"), 1)
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.updating ? "Update the level details" : "Fill in the details of the new level")}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.updating ? "Update the level details" : "Fill in the details of the new level"), 1)
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Level Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              autocomplete: "name",
              class: "mt-1 block",
              modelValue: __props.form.name,
              "onUpdate:modelValue": ($event) => __props.form.name = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: _ctx.$page.props.errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "required_score",
              value: "Required Score"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              type: "text",
              autocomplete: "required_score",
              class: "mt-1 block",
              modelValue: __props.form.required_score,
              "onUpdate:modelValue": ($event) => __props.form.required_score = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: _ctx.$page.props.errors.required_score,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "" }, [
                  createVNode(_sfc_main$2, {
                    for: "name",
                    value: "Level Name"
                  }),
                  createVNode(_sfc_main$3, {
                    type: "text",
                    autocomplete: "name",
                    class: "mt-1 block",
                    modelValue: __props.form.name,
                    "onUpdate:modelValue": ($event) => __props.form.name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: _ctx.$page.props.errors.name,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", null, [
                  createVNode(_sfc_main$2, {
                    for: "required_score",
                    value: "Required Score"
                  }),
                  createVNode(_sfc_main$3, {
                    type: "text",
                    autocomplete: "required_score",
                    class: "mt-1 block",
                    modelValue: __props.form.required_score,
                    "onUpdate:modelValue": ($event) => __props.form.required_score = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: _ctx.$page.props.errors.required_score,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              loading: _ctx.$page.props.processing,
              class: "mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.updating ? "Update Level" : "Create Level")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.updating ? "Update Level" : "Create Level"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                loading: _ctx.$page.props.processing,
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.updating ? "Update Level" : "Create Level"), 1)
                ]),
                _: 1
              }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Levels/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
