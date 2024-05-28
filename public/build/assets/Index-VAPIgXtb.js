import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DghWZQhX.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const __default__ = {
  name: "RolesIndex"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    roles: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-[#353531] leading-tight"${_scopeId}>Roles</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-[#353531] leading-tight" }, "Roles")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.user.permissions.includes("read roles")) {
              _push2(`<section class="flex flex-col justify-center items-center m-3 gap-8"${_scopeId}><article${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Role </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
              ssrRenderList(__props.roles.data, (role) => {
                _push2(`<tr${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="text-sm text-gray-900"${_scopeId}>${ssrInterpolate(role.name)}</div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table><p class="mt-8"${_scopeId}> &quot;Creation, editing, and deletion of Roles is not implemented in this version.&quot; </p></article></section>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.$page.props.user.permissions.includes("read roles") ? (openBlock(), createBlock("section", {
                key: 0,
                class: "flex flex-col justify-center items-center m-3 gap-8"
              }, [
                createVNode("article", null, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        }, " Role ")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.roles.data, (role) => {
                        return openBlock(), createBlock("tr", { key: role }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(role.name), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("p", { class: "mt-8" }, ' "Creation, editing, and deletion of Roles is not implemented in this version." ')
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
