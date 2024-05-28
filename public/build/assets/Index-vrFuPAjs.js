import { withCtx, createVNode, unref, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DghWZQhX.js";
import { Link } from "@inertiajs/vue3";
import { Inertia } from "@inertiajs/inertia";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const __default__ = {
  name: "LevelsIndex"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    levels: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const deleteLevel = async (id) => {
      if (confirm("Are you sure you want to delete this level?")) {
        await Inertia.delete(route("levels.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-[#353531] leading-tight"${_scopeId}>Levels</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-[#353531] leading-tight" }, "Levels")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.user.permissions.includes("read levels")) {
              _push2(`<section class="flex flex-col justify-center items-center m-3 gap-8"${_scopeId}>`);
              if (_ctx.$page.props.user.permissions.includes("create levels")) {
                _push2(`<article${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("levels.create"),
                  class: "bg-[#35AFAE] hover:bg-[#479d9d] text-white font-bold py-2 px-4 rounded"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Create Level`);
                    } else {
                      return [
                        createTextVNode("Create Level")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</article>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<article${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Level </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Score </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
              ssrRenderList(__props.levels.data, (level) => {
                _push2(`<tr${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="text-sm text-gray-900"${_scopeId}>${ssrInterpolate(level.name)}</div></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="text-sm text-gray-900"${_scopeId}>${ssrInterpolate(level.required_score)}</div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"${_scopeId}>`);
                if (_ctx.$page.props.user.permissions.includes("update levels")) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("levels.edit", level.id),
                    class: "text-indigo-600 hover:text-indigo-900 mr-4"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Edit`);
                      } else {
                        return [
                          createTextVNode("Edit")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$page.props.user.permissions.includes("delete levels")) {
                  _push2(ssrRenderComponent(unref(Link), {
                    onClick: ($event) => deleteLevel(level.id),
                    class: "text-red-600 hover:text-red-900"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Delete`);
                      } else {
                        return [
                          createTextVNode("Delete")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></article><article class="flex flex-row justify-between gap-40"${_scopeId}>`);
              if (__props.levels.current_page > 1) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.levels.prev_page_url,
                  class: "rounded"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Previus`);
                    } else {
                      return [
                        createTextVNode("Previus")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div${_scopeId}></div>`);
              }
              if (__props.levels.current_page < __props.levels.last_page) {
                _push2(ssrRenderComponent(unref(Link), {
                  href: __props.levels.next_page_url,
                  class: "rounded"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Next`);
                    } else {
                      return [
                        createTextVNode("Next")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div${_scopeId}></div>`);
              }
              _push2(`</article></section>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.$page.props.user.permissions.includes("read levels") ? (openBlock(), createBlock("section", {
                key: 0,
                class: "flex flex-col justify-center items-center m-3 gap-8"
              }, [
                _ctx.$page.props.user.permissions.includes("create levels") ? (openBlock(), createBlock("article", { key: 0 }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("levels.create"),
                    class: "bg-[#35AFAE] hover:bg-[#479d9d] text-white font-bold py-2 px-4 rounded"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Create Level")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])) : createCommentVNode("", true),
                createVNode("article", null, [
                  createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-50" }, [
                      createVNode("tr", null, [
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        }, " Level "),
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        }, " Score "),
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        }, " Actions ")
                      ])
                    ]),
                    createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.levels.data, (level) => {
                        return openBlock(), createBlock("tr", { key: level }, [
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(level.name), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                            createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(level.required_score), 1)
                          ]),
                          createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                            _ctx.$page.props.user.permissions.includes("update levels") ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: _ctx.route("levels.edit", level.id),
                              class: "text-indigo-600 hover:text-indigo-900 mr-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Edit")
                              ]),
                              _: 2
                            }, 1032, ["href"])) : createCommentVNode("", true),
                            _ctx.$page.props.user.permissions.includes("delete levels") ? (openBlock(), createBlock(unref(Link), {
                              key: 1,
                              onClick: ($event) => deleteLevel(level.id),
                              class: "text-red-600 hover:text-red-900"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Delete")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("article", { class: "flex flex-row justify-between gap-40" }, [
                  __props.levels.current_page > 1 ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: __props.levels.prev_page_url,
                    class: "rounded"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Previus")
                    ]),
                    _: 1
                  }, 8, ["href"])) : (openBlock(), createBlock("div", { key: 1 })),
                  __props.levels.current_page < __props.levels.last_page ? (openBlock(), createBlock(unref(Link), {
                    key: 2,
                    href: __props.levels.next_page_url,
                    class: "rounded"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Next")
                    ]),
                    _: 1
                  }, 8, ["href"])) : (openBlock(), createBlock("div", { key: 3 }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Levels/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
