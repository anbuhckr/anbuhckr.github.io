(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405], {
    48312: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
        return r(40063)
      }])
    },
    40063: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        __N_SSG: function () {
          return e_
        },
        default: function () {
          return eH
        }
      });
      var a = r(85893),
        l = r(67294),
        s = r(61162),
        n = r(9008),
        o = r.n(n);
      let i = e => {
          let {
            initialState: t
          } = e, [r, a] = (0, l.useReducer)((e, r) => {
            if (!r.type) return {
              ...e,
              [r.field]: r.value
            };
            if ("reset" === r.type) return t;
            throw Error()
          }, t);
          return (0, l.useMemo)(() => ({
            state: r,
            dispatch: a
          }), [r, a])
        },
        d = e => {
          let t = e;
          return t.prompt || (t = {
            ...t,
            prompt: t.prompt || ""
          }), t.temperature || (t = {
            ...t,
            temperature: t.temperature || 1
          }), t.folderId || (t = {
            ...t,
            folderId: t.folderId || null
          }), t.messages || (t = {
            ...t,
            messages: t.messages || []
          }), t
        },
        c = e => Array.isArray(e) ? e.reduce((e, t) => {
          try {
            t.prompt || (t.prompt = ""), t.temperature || (t.temperature = 1), t.folderId || (t.folderId = null), t.messages || (t.messages = []), e.push(t)
          } catch (e) {
            console.warn("error while cleaning conversations' history. Removing culprit", e)
          }
          return e
        }, []) : (console.warn("history is not an array. Returning an empty array."), []),
        u = (e, t) => {
          let r = t.map(t => t.id === e.id ? e : t);
          return x(e), m(r), {
            single: e,
            all: r
          }
        },
        x = e => {
          localStorage.setItem("selectedConversation", JSON.stringify(e))
        },
        m = e => {
          localStorage.setItem("conversationHistory", JSON.stringify(e))
        },
        p = e => {
          localStorage.setItem("folders", JSON.stringify(e))
        },
        h = e => {
          localStorage.setItem("prompts", JSON.stringify(e))
        };
      var f = r(86501);
      let g = (0, l.createContext)(void 0);
      var v = r(58081),
        b = r(80519),
        w = r(32666),
        y = r(35569),
        j = r(71641);
      let k = e => {
          let {
            prompts: t,
            activePromptIndex: r,
            onSelect: l,
            onMouseOver: s,
            promptListRef: n
          } = e;
          return (0, a.jsx)("ul", {
            ref: n,
            className: "z-10 max-h-52 w-full overflow-scroll rounded border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-neutral-500 dark:bg-[#343541] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]",
            children: t.map((e, t) => (0, a.jsx)("li", {
              className: "".concat(t === r ? "bg-gray-200 dark:bg-[#202123] dark:text-black" : "", " cursor-pointer px-3 py-2 text-sm text-black dark:text-white"),
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), l()
              },
              onMouseEnter: () => s(t),
              children: e.name
            }, e.id))
          })
        },
        C = e => {
          let {
            prompt: t,
            variables: r,
            onSubmit: s,
            onClose: n
          } = e, [o, i] = (0, l.useState)(r.map(e => ({
            key: e,
            value: ""
          })).filter((e, t, r) => r.findIndex(t => t.key === e.key) === t)), d = (0, l.useRef)(null), c = (0, l.useRef)(null), u = (e, t) => {
            i(r => {
              let a = [...r];
              return a[e].value = t, a
            })
          }, x = () => {
            if (o.some(e => "" === e.value)) {
              alert("Please fill out all variables");
              return
            }
            s(o.map(e => e.value)), n()
          };
          return (0, l.useEffect)(() => {
            let e = e => {
              d.current && !d.current.contains(e.target) && n()
            };
            return window.addEventListener("click", e), () => {
              window.removeEventListener("click", e)
            }
          }, [n]), (0, l.useEffect)(() => {
            c.current && c.current.focus()
          }, []), (0, a.jsx)("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
            onKeyDown: e => {
              "Enter" !== e.key || e.shiftKey ? "Escape" === e.key && n() : (e.preventDefault(), x())
            },
            children: (0, a.jsxs)("div", {
              ref: d,
              className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
              role: "dialog",
              children: [(0, a.jsx)("div", {
                className: "mb-4 text-xl font-bold text-black dark:text-neutral-200",
                children: t.name
              }), (0, a.jsx)("div", {
                className: "mb-4 text-sm italic text-black dark:text-neutral-200",
                children: t.description
              }), o.map((e, t) => (0, a.jsxs)("div", {
                className: "mb-4",
                children: [(0, a.jsx)("div", {
                  className: "mb-2 text-sm font-bold text-neutral-200",
                  children: e.key
                }), (0, a.jsx)("textarea", {
                  ref: 0 === t ? c : void 0,
                  className: "mt-1 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                  style: {
                    resize: "none"
                  },
                  placeholder: "Enter a value for ".concat(e.key, "..."),
                  value: e.value,
                  onChange: e => u(t, e.target.value),
                  rows: 3
                })]
              }, t)), (0, a.jsx)("button", {
                className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                onClick: x,
                children: "Submit"
              })]
            })
          })
        },
        N = e => {
          var t;
          let {
            onSend: r,
            onRegenerate: n,
            onScrollDownClick: o,
            stopConversationRef: i,
            textareaRef: d,
            showScrollDownButton: c
          } = e, {
            t: u
          } = (0, s.$G)("chat"), {
            state: {
              selectedConversation: x,
              messageIsStreaming: m,
              prompts: p
            },
            dispatch: h
          } = (0, l.useContext)(g), [f, N] = (0, l.useState)(), [S, I] = (0, l.useState)(!1), [P, z] = (0, l.useState)(!1), [Z, E] = (0, l.useState)(0), [D, O] = (0, l.useState)(""), [T, A] = (0, l.useState)([]), [R, H] = (0, l.useState)(!1), _ = (0, l.useRef)(null), L = p.filter(e => e.name.toLowerCase().includes(D.toLowerCase())), J = () => {
            if (!m) {
              if (!f) {
                alert(u("Please enter a message"));
                return
              }
              r({
                role: "user",
                content: f
              }), N(""), window.innerWidth < 640 && d && d.current && d.current.blur()
            }
          }, K = () => {
            let e = void 0 === window.navigator ? "" : navigator.userAgent;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(e)
          }, F = () => {
            let e = L[Z];
            e && (N(t => null == t ? void 0 : t.replace(/\/\w*$/, e.content)), G(e)), z(!1)
          }, U = e => {
            let t;
            let r = /{{(.*?)}}/g,
              a = [];
            for (; null !== (t = r.exec(e));) a.push(t[1]);
            return a
          }, $ = (0, l.useCallback)(e => {
            let t = e.match(/\/\w*$/);
            t ? (z(!0), O(t[0].slice(1))) : (z(!1), O(""))
          }, []), G = e => {
            let t = U(e.content);
            A(t), t.length > 0 ? H(!0) : (N(t => null == t ? void 0 : t.replace(/\/\w*$/, e.content)), $(e.content))
          };
          return (0, l.useEffect)(() => {
            _.current && (_.current.scrollTop = 30 * Z)
          }, [Z]), (0, l.useEffect)(() => {
            if (d && d.current) {
              var e, t;
              d.current.style.height = "inherit", d.current.style.height = "".concat(null === (e = d.current) || void 0 === e ? void 0 : e.scrollHeight, "px"), d.current.style.overflow = "".concat((null == d ? void 0 : null === (t = d.current) || void 0 === t ? void 0 : t.scrollHeight) > 400 ? "auto" : "hidden")
            }
          }, [f, d]), (0, l.useEffect)(() => {
            let e = e => {
              _.current && !_.current.contains(e.target) && z(!1)
            };
            return window.addEventListener("click", e), () => {
              window.removeEventListener("click", e)
            }
          }, []), (0, a.jsxs)("div", {
            className: "absolute bottom-0 left-0 w-full border-transparent bg-gradient-to-b from-transparent via-white to-white pt-6 dark:border-white/20 dark:via-[#343541] dark:to-[#343541] md:pt-2",
            children: [(0, a.jsxs)("div", {
              className: "stretch mx-2 mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl",
              children: [m && (0, a.jsxs)("button", {
                className: "absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2",
                onClick: () => {
                  i.current = !0, setTimeout(() => {
                    i.current = !1
                  }, 1e3)
                },
                children: [(0, a.jsx)(v.Z, {
                  size: 16
                }), " ", u("Stop Generating")]
              }), !m && x && x.messages.length > 0 && (0, a.jsxs)("button", {
                className: "absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2",
                onClick: n,
                children: [(0, a.jsx)(b.Z, {
                  size: 16
                }), " ", u("Regenerate response")]
              }), (0, a.jsxs)("div", {
                className: "relative mx-2 flex w-full flex-grow flex-col rounded-md border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-[#40414F] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] sm:mx-4",
                children: [(0, a.jsx)("button", {
                  className: "absolute left-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200",
                  onClick: () => {},
                  onKeyDown: e => {},
                  children: (0, a.jsx)(w.Z, {
                    size: 20
                  })
                }), (0, a.jsx)("textarea", {
                  ref: d,
                  className: "m-0 w-full resize-none border-0 bg-transparent p-0 py-2 pr-8 pl-10 text-black dark:bg-transparent dark:text-white md:py-3 md:pl-10",
                  style: {
                    resize: "none",
                    bottom: "".concat(null == d ? void 0 : null === (t = d.current) || void 0 === t ? void 0 : t.scrollHeight, "px"),
                    maxHeight: "400px",
                    overflow: "".concat(d.current && d.current.scrollHeight > 400 ? "auto" : "hidden")
                  },
                  placeholder: u('Type a message or type "/" to select a prompt...') || "",
                  value: f,
                  rows: 1,
                  onCompositionStart: () => I(!0),
                  onCompositionEnd: () => I(!1),
                  onChange: e => {
                    let t = e.target.value;
                    N(t), $(t)
                  },
                  onKeyDown: e => {
                    P ? "ArrowDown" === e.key ? (e.preventDefault(), E(e => e < p.length - 1 ? e + 1 : e)) : "ArrowUp" === e.key ? (e.preventDefault(), E(e => e > 0 ? e - 1 : e)) : "Tab" === e.key ? (e.preventDefault(), E(e => e < p.length - 1 ? e + 1 : 0)) : "Enter" === e.key ? (e.preventDefault(), F()) : "Escape" === e.key ? (e.preventDefault(), z(!1)) : E(0) : "Enter" !== e.key || S || K() || e.shiftKey ? "/" === e.key && e.metaKey && e.preventDefault() : (e.preventDefault(), J())
                  }
                }), (0, a.jsx)("button", {
                  className: "absolute right-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200",
                  onClick: J,
                  children: m ? (0, a.jsx)("div", {
                    className: "h-4 w-4 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"
                  }) : (0, a.jsx)(y.Z, {
                    size: 18
                  })
                }), c && (0, a.jsx)("div", {
                  className: "absolute bottom-12 right-0 lg:bottom-0 lg:-right-10",
                  children: (0, a.jsx)("button", {
                    className: "flex h-7 w-7 items-center justify-center rounded-full bg-neutral-300 text-gray-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-neutral-200",
                    onClick: o,
                    children: (0, a.jsx)(j.Z, {
                      size: 18
                    })
                  })
                }), P && L.length > 0 && (0, a.jsx)("div", {
                  className: "absolute bottom-12 w-full",
                  children: (0, a.jsx)(k, {
                    activePromptIndex: Z,
                    prompts: L,
                    onSelect: F,
                    onMouseOver: E,
                    promptListRef: _
                  })
                }), R && (0, a.jsx)(C, {
                  prompt: L[Z],
                  variables: T,
                  onSubmit: e => {
                    N(null == f ? void 0 : f.replace(/{{(.*?)}}/g, (t, r) => e[T.indexOf(r)])), d && d.current && d.current.focus()
                  },
                  onClose: () => H(!1)
                })]
              })]
            }), (0, a.jsxs)("div", {
              className: "px-3 pt-2 pb-3 text-center text-[12px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
              children: [(0, a.jsx)("a", {
                href: "https://github.com/anbuhckr/anbuhckr.github.io/blob/master/README.md",
                target: "_blank",
                rel: "noreferrer",
                className: "underline",
                children: "ChatBot UI"
              }), ".", " ", u("Check the backend example with llama-cpp-python.")]
            })]
          })
        };
      var S = r(16243);
      let I = () => (0, a.jsx)("div", {
          className: "group border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100",
          style: {
            overflowWrap: "anywhere"
          },
          children: (0, a.jsxs)("div", {
            className: "m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
            children: [(0, a.jsx)("div", {
              className: "min-w-[40px] items-end",
              children: (0, a.jsx)(S.Z, {
                size: 30
              })
            }), (0, a.jsx)("span", {
              className: "animate-pulse cursor-default mt-1",
              children: "▍"
            })]
          })
        }),
        P = e => {
          let {
            conversation: t,
            prompts: r,
            onChangePrompt: n
          } = e, {
            t: o
          } = (0, s.$G)("chat"), [i, d] = (0, l.useState)(""), [c, u] = (0, l.useState)(0), [x, m] = (0, l.useState)(!1), [p, h] = (0, l.useState)(""), [f, g] = (0, l.useState)([]), [v, b] = (0, l.useState)(!1), w = (0, l.useRef)(null), y = (0, l.useRef)(null), j = r.filter(e => e.name.toLowerCase().includes(p.toLowerCase())), N = e => {
            let t;
            let r = /{{(.*?)}}/g,
              a = [];
            for (; null !== (t = r.exec(e));) a.push(t[1]);
            return a
          }, S = (0, l.useCallback)(e => {
            let t = e.match(/\/\w*$/);
            t ? (m(!0), h(t[0].slice(1))) : (m(!1), h(""))
          }, []), I = e => {
            let t = N(e.content);
            if (g(t), t.length > 0) b(!0);
            else {
              let t = null == i ? void 0 : i.replace(/\/\w*$/, e.content);
              d(t), n(t), S(e.content)
            }
          };
          return (0, l.useEffect)(() => {
            if (w && w.current) {
              var e;
              w.current.style.height = "inherit", w.current.style.height = "".concat(null === (e = w.current) || void 0 === e ? void 0 : e.scrollHeight, "px")
            }
          }, [i]), (0, l.useEffect)(() => {
            t.prompt ? d(t.prompt) : d("")
          }, [t]), (0, l.useEffect)(() => {
            let e = e => {
              y.current && !y.current.contains(e.target) && m(!1)
            };
            return window.addEventListener("click", e), () => {
              window.removeEventListener("click", e)
            }
          }, []), (0, a.jsxs)("div", {
            className: "flex flex-col",
            children: [x && j.length > 0 && (0, a.jsx)("div", {
              children: (0, a.jsx)(k, {
                activePromptIndex: c,
                prompts: j,
                onSelect: () => {
                  let e = j[c];
                  d(t => null == t ? void 0 : t.replace(/\/\w*$/, e.content)), I(e), m(!1)
                },
                onMouseOver: u,
                promptListRef: y
              })
            }), v && (0, a.jsx)(C, {
              prompt: r[c],
              variables: f,
              onSubmit: e => {
                let t = null == i ? void 0 : i.replace(/{{(.*?)}}/g, (t, r) => e[f.indexOf(r)]);
                d(t), n(t), w && w.current && w.current.focus()
              },
              onClose: () => b(!1)
            })]
          })
        };
      var z = r(83791),
        Z = r(17598),
        E = r(79749),
        D = r(9430),
        O = r(99324),
        T = r(26309),
        A = r(9965),
        R = r(93179),
        H = r(84283);
      let _ = {
          javascript: ".js",
          python: ".py",
          java: ".java",
          c: ".c",
          cpp: ".cpp",
          "c++": ".cpp",
          "c#": ".cs",
          ruby: ".rb",
          php: ".php",
          swift: ".swift",
          "objective-c": ".m",
          kotlin: ".kt",
          typescript: ".ts",
          go: ".go",
          perl: ".pl",
          rust: ".rs",
          scala: ".scala",
          haskell: ".hs",
          lua: ".lua",
          shell: ".sh",
          sql: ".sql",
          html: ".html",
          css: ".css"
        },
        L = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = "ABCDEFGHJKLMNPQRSTUVWXY3456789",
            a = "";
          for (let t = 0; t < e; t++) a += r.charAt(Math.floor(Math.random() * r.length));
          return t ? a.toLowerCase() : a
        },
        J = (0, l.memo)(e => {
          let {
            language: t,
            value: r
          } = e, {
            t: n
          } = (0, s.$G)("markdown"), [o, i] = (0, l.useState)(!1);
          return (0, a.jsxs)("div", {
            className: "codeblock relative font-sans text-[16px]",
            children: [(0, a.jsxs)("div", {
              className: "flex items-center justify-between py-1.5 px-4",
              children: [(0, a.jsx)("span", {
                className: "text-xs lowercase text-white",
                children: t
              }), (0, a.jsxs)("div", {
                className: "flex items-center",
                children: [(0, a.jsxs)("button", {
                  className: "flex gap-1.5 items-center rounded bg-none p-1 text-xs text-white",
                  onClick: () => {
                    navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(r).then(() => {
                      i(!0), setTimeout(() => {
                        i(!1)
                      }, 2e3)
                    })
                  },
                  children: [o ? (0, a.jsx)(D.Z, {
                    size: 18
                  }) : (0, a.jsx)(T.Z, {
                    size: 18
                  }), o ? n("Copied!") : n("Copy code")]
                }), (0, a.jsx)("button", {
                  className: "flex items-center rounded bg-none p-1 text-xs text-white",
                  onClick: () => {
                    let e = _[t] || ".file",
                      a = "file-".concat(L(3, !0)).concat(e),
                      l = window.prompt(n("Enter file name") || "", a);
                    if (!l) return;
                    let s = new Blob([r], {
                        type: "text/plain"
                      }),
                      o = URL.createObjectURL(s),
                      i = document.createElement("a");
                    i.download = l, i.href = o, i.style.display = "none", document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(o)
                  },
                  children: (0, a.jsx)(A.Z, {
                    size: 18
                  })
                })]
              })]
            }), (0, a.jsx)(R.Z, {
              language: t,
              style: H.vk,
              customStyle: {
                margin: 0
              },
              children: r
            })]
          })
        });
      J.displayName = "CodeBlock";
      var K = r(16202);
      let F = (0, l.memo)(K.D, (e, t) => e.children === t.children);
      var U = r(45884),
        $ = r(29758),
        G = r(30399);
      let M = (0, l.memo)(e => {
        var t;
        let {
          message: r,
          messageIndex: n,
          onEdit: o
        } = e, {
          t: i
        } = (0, s.$G)("chat"), {
          state: {
            selectedConversation: d,
            conversations: c,
            currentMessage: x,
            messageIsStreaming: m
          },
          dispatch: p
        } = (0, l.useContext)(g), [h, f] = (0, l.useState)(!1), [v, b] = (0, l.useState)(!1), [w, y] = (0, l.useState)(r.content), [j, k] = (0, l.useState)(!1), C = (0, l.useRef)(null), N = () => {
          r.content != w && d && o && o({
            ...r,
            content: w
          }), f(!1)
        };
        return (0, l.useEffect)(() => {
          y(r.content)
        }, [r.content]), (0, l.useEffect)(() => {
          C.current && (C.current.style.height = "inherit", C.current.style.height = "".concat(C.current.scrollHeight, "px"))
        }, [h]), (0, a.jsx)("div", {
          className: "group md:px-4 ".concat("assistant" === r.role ? "border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100" : "border-b border-black/10 bg-white text-gray-800 dark:border-gray-900/50 dark:bg-[#343541] dark:text-gray-100"),
          style: {
            overflowWrap: "anywhere"
          },
          children: (0, a.jsxs)("div", {
            className: "relative m-auto flex p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
            children: [(0, a.jsx)("div", {
              className: "min-w-[40px] text-right font-bold",
              children: "assistant" === r.role ? (0, a.jsx)(S.Z, {
                size: 30
              }) : (0, a.jsx)(z.Z, {
                size: 30
              })
            }), (0, a.jsx)("div", {
              className: "prose mt-[-2px] w-full dark:prose-invert",
              children: "user" === r.role ? (0, a.jsxs)("div", {
                className: "flex w-full",
                children: [h ? (0, a.jsxs)("div", {
                  className: "flex w-full flex-col",
                  children: [(0, a.jsx)("textarea", {
                    ref: C,
                    className: "w-full resize-none whitespace-pre-wrap border-none dark:bg-[#343541]",
                    value: w,
                    onChange: e => {
                      y(e.target.value), C.current && (C.current.style.height = "inherit", C.current.style.height = "".concat(C.current.scrollHeight, "px"))
                    },
                    onKeyDown: e => {
                      "Enter" !== e.key || v || e.shiftKey || (e.preventDefault(), N())
                    },
                    onCompositionStart: () => b(!0),
                    onCompositionEnd: () => b(!1),
                    style: {
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      padding: "0",
                      margin: "0",
                      overflow: "hidden"
                    }
                  }), (0, a.jsxs)("div", {
                    className: "mt-10 flex justify-center space-x-4",
                    children: [(0, a.jsx)("button", {
                      className: "h-[40px] rounded-md bg-blue-500 px-4 py-1 text-sm font-medium text-white enabled:hover:bg-blue-600 disabled:opacity-50",
                      onClick: N,
                      disabled: w.trim().length <= 0,
                      children: i("Save & Submit")
                    }), (0, a.jsx)("button", {
                      className: "h-[40px] rounded-md border border-neutral-300 px-4 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",
                      onClick: () => {
                        y(r.content), f(!1)
                      },
                      children: i("Cancel")
                    })]
                  })]
                }) : (0, a.jsx)("div", {
                  className: "prose whitespace-pre-wrap dark:prose-invert flex-1",
                  children: r.content
                }), !h && (0, a.jsxs)("div", {
                  className: "md:-mr-8 ml-1 md:ml-0 flex flex-col md:flex-row gap-4 md:gap-1 items-center md:items-start justify-end md:justify-start",
                  children: [(0, a.jsx)("button", {
                    className: "invisible group-hover:visible focus:visible text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                    onClick: () => {
                      f(!h)
                    },
                    children: (0, a.jsx)(Z.Z, {
                      size: 20
                    })
                  }), (0, a.jsx)("button", {
                    className: "invisible group-hover:visible focus:visible text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                    onClick: () => {
                      if (!d) return;
                      let {
                        messages: e
                      } = d, t = e.findIndex(e => e === r);
                      if (t < 0) return;
                      t < e.length - 1 && "assistant" === e[t + 1].role ? e.splice(t, 2) : e.splice(t, 1);
                      let {
                        single: a,
                        all: l
                      } = u({
                        ...d,
                        messages: e
                      }, c);
                      p({
                        field: "selectedConversation",
                        value: a
                      }), p({
                        field: "conversations",
                        value: l
                      })
                    },
                    children: (0, a.jsx)(E.Z, {
                      size: 20
                    })
                  })]
                })]
              }) : (0, a.jsxs)("div", {
                className: "flex flex-row",
                children: [(0, a.jsx)(F, {
                  className: "prose dark:prose-invert flex-1",
                  remarkPlugins: [$.Z, G.Z],
                  rehypePlugins: [U.Z],
                  components: {
                    code(e) {
                      let {
                        node: t,
                        inline: r,
                        className: l,
                        children: s,
                        ...n
                      } = e;
                      if (s.length) {
                        if ("▍" == s[0]) return (0, a.jsx)("span", {
                          className: "animate-pulse cursor-default mt-1",
                          children: "▍"
                        });
                        s[0] = s[0].replace("`▍`", "▍")
                      }
                      let o = /language-(\w+)/.exec(l || "");
                      return r ? (0, a.jsx)("code", {
                        className: l,
                        ...n,
                        children: s
                      }) : (0, a.jsx)(J, {
                        language: o && o[1] || "",
                        value: String(s).replace(/\n$/, ""),
                        ...n
                      }, Math.random())
                    },
                    table(e) {
                      let {
                        children: t
                      } = e;
                      return (0, a.jsx)("table", {
                        className: "border-collapse border border-black px-3 py-1 dark:border-white",
                        children: t
                      })
                    },
                    th(e) {
                      let {
                        children: t
                      } = e;
                      return (0, a.jsx)("th", {
                        className: "break-words border border-black bg-gray-500 px-3 py-1 text-white dark:border-white",
                        children: t
                      })
                    },
                    td(e) {
                      let {
                        children: t
                      } = e;
                      return (0, a.jsx)("td", {
                        className: "break-words border border-black px-3 py-1 dark:border-white",
                        children: t
                      })
                    }
                  },
                  children: "".concat(r.content).concat(m && n == (null !== (t = null == d ? void 0 : d.messages.length) && void 0 !== t ? t : 0) - 1 ? "`▍`" : "")
                }), (0, a.jsx)("div", {
                  className: "md:-mr-8 ml-1 md:ml-0 flex flex-col md:flex-row gap-4 md:gap-1 items-center md:items-start justify-end md:justify-start",
                  children: j ? (0, a.jsx)(D.Z, {
                    size: 20,
                    className: "text-green-500 dark:text-green-400"
                  }) : (0, a.jsx)("button", {
                    className: "invisible group-hover:visible focus:visible text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                    onClick: () => {
                      navigator.clipboard && navigator.clipboard.writeText(r.content).then(() => {
                        k(!0), setTimeout(() => {
                          k(!1)
                        }, 2e3)
                      })
                    },
                    children: (0, a.jsx)(O.Z, {
                      size: 20
                    })
                  })
                })]
              })
            })]
          })
        })
      });
      M.displayName = "ChatMessage";
      let B = (0, l.memo)(M, (e, t) => e.message.content === t.message.content),
        W = (0, l.memo)(e => {
          var t;
          let r, n, {
              stopConversationRef: o
            } = e,
            {
              t: i
            } = (0, s.$G)("chat"),
            {
              state: {
                selectedConversation: d,
                conversations: c,
                apiKey: u,
                apiHost: p,
                sysPrompt: h,
                serverSideApiKeyIsSet: v,
                serverSideApiHostIsSet: b,
                serverSideSysPromptIsSet: w,
                loading: y,
                prompts: j
              },
              handleUpdateConversation: k,
              dispatch: C
            } = (0, l.useContext)(g),
            [S, z] = (0, l.useState)(),
            [Z, E] = (0, l.useState)(!0),
            [D, O] = (0, l.useState)(!1),
            T = (0, l.useRef)(null),
            A = (0, l.useRef)(null),
            R = (0, l.useRef)(null),
            H = (0, l.useCallback)(async function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              if (d) {
                let r;
                if (t) {
                  let a = [...d.messages];
                  for (let e = 0; e < t; e++) a.pop();
                  r = {
                    ...d,
                    messages: [...a, e]
                  }
                } else r = {
                  ...d,
                  messages: [...d.messages, e]
                };
                C({
                  field: "selectedConversation",
                  value: r
                }), C({
                  field: "loading",
                  value: !0
                }), C({
                  field: "messageIsStreaming",
                  value: !0
                });
                let a = JSON.stringify({
                    messages: r.messages,
                    model: "gpt-3.5-turbo-16k",
                    prompt: h,
                    stream: true,
                    temperature: r.temperature,
                  }),
                  l = new AbortController,
                  s = await fetch(p, {
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": "Bearer " + u,
                    },
                    method: "POST",
                    signal: l.signal,
                    body: a
                  });
                if (!s.ok) {
                  C({
                    field: "loading",
                    value: !1
                  }), C({
                    field: "messageIsStreaming",
                    value: !1
                  }), f.ZP.error(s.statusText);
                  return
                }
                let n = s.body;
                if (!n) {
                  C({
                    field: "loading",
                    value: !1
                  }), C({
                    field: "messageIsStreaming",
                    value: !1
                  });
                  return
                }
                if (1 === r.messages.length) {
                  let {
                    content: t
                  } = e, a = t.length > 30 ? t.substring(0, 30) + "..." : t;
                  r = {
                    ...r,
                    name: a
                  }
                }
                C({
                  field: "loading",
                  value: !1
                });
                let i = n.getReader(),
                  g = new TextDecoder,
                  v = !1,
                  b = !0,
                  w = "";
                for (; !v;) {
                  if (!0 === o.current) {
                    l.abort(), v = !0;
                    break
                  }
                  let {
                    value: e,
                    done: t
                  } = await i.read();
                  v = t;
                  let cc = g.decode(e).split("\n\n");
                  for (const c of cc) {
                    if (c.length === 0) continue;
                    let a = "";
                    try {
                      let j = JSON.parse((c.slice(6)));
                      a = j.choices[0]?.delta?.content || "";
                      v = j.choices[0]?.finish_reason !== null;
                    } catch {}
                    if (w += a, b) {
                      b = !1;
                      let e = [...r.messages, {
                        role: "assistant",
                        content: a
                      }];
                      C({
                        field: "selectedConversation",
                        value: r = {
                          ...r,
                          messages: e
                        }
                      })
                    } else {
                      let e = r.messages.map((e, t) => t === r.messages.length - 1 ? {
                        ...e,
                        content: w
                      } : e);
                      C({
                        field: "selectedConversation",
                        value: r = {
                          ...r,
                          messages: e
                        }
                      })
                    }
                  }
                }
                x(r);
                let y = c.map(e => e.id === d.id ? r : e);
                0 === y.length && y.push(r), C({
                  field: "conversations",
                  value: y
                }), m(y), C({
                  field: "messageIsStreaming",
                  value: !1
                })
              }
            }, [u, p, h, c, d, o, C]),
            _ = (t = () => {
              if (Z) {
                var e;
                null === (e = T.current) || void 0 === e || e.scrollIntoView(!0)
              }
            }, function () {
              for (var e = arguments.length, a = Array(e), l = 0; l < e; l++) a[l] = arguments[l];
              n ? (clearTimeout(r), r = setTimeout(() => {
                Date.now() - n >= 250 && (t(...a), n = Date.now())
              }, 250 - (Date.now() - n))) : (t(...a), n = Date.now())
            });
          return (0, l.useEffect)(() => {
            _(), d && z(d.messages[d.messages.length - 2])
          }, [d, _]), (0, l.useEffect)(() => {
            let e = new IntersectionObserver(e => {
                let [t] = e;
                if (E(t.isIntersecting), t.isIntersecting) {
                  var r;
                  null === (r = R.current) || void 0 === r || r.focus()
                }
              }, {
                root: null,
                threshold: .5
              }),
              t = T.current;
            return t && e.observe(t), () => {
              t && e.unobserve(t)
            }
          }, [T]), (0, a.jsx)("div", {
            className: "relative flex-1 overflow-hidden bg-white dark:bg-[#343541]",
            children: (u || v) && (p || b) && (h || w) ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", {
                className: "max-h-full overflow-x-hidden",
                ref: A,
                onScroll: () => {
                  if (A.current) {
                    let {
                      scrollTop: e,
                      scrollHeight: t,
                      clientHeight: r
                    } = A.current;
                    e + r < t - 30 ? (E(!1), O(!0)) : (E(!0), O(!1))
                  }
                },
                children: (null == d ? void 0 : d.messages.length) === 0 ? (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsxs)("div", {
                    className: "sticky top-0 z-10 flex justify-center border border-b-neutral-300 bg-neutral-100 py-2 text-sm text-neutral-500 dark:border-none dark:bg-[#444654] dark:text-neutral-200",
                    children: ["CHATBOT-UI", (0, a.jsx)(P, {
                      conversation: d,
                      prompts: j,
                      onChangePrompt: e => k(d, {
                        key: "prompt",
                        value: e
                      })
                    })]
                  })
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("div", {
                    className: "sticky top-0 z-10 flex justify-center border border-b-neutral-300 bg-neutral-100 py-2 text-sm text-neutral-500 dark:border-none dark:bg-[#444654] dark:text-neutral-200",
                    children: "CHATBOT-UI"
                  }), null == d ? void 0 : d.messages.map((e, t) => (0, a.jsx)(B, {
                    message: e,
                    messageIndex: t,
                    onEdit: e => {
                      z(e), H(e, (null == d ? void 0 : d.messages.length) - t)
                    }
                  }, t)), y && (0, a.jsx)(I, {}), (0, a.jsx)("div", {
                    className: "h-[162px] bg-white dark:bg-[#343541]",
                    ref: T
                  })]
                })
              }), (0, a.jsx)(N, {
                stopConversationRef: o,
                textareaRef: R,
                onSend: e => {
                  z(e), H(e, 0)
                },
                onScrollDownClick: () => {
                  var e;
                  null === (e = A.current) || void 0 === e || e.scrollTo({
                    top: A.current.scrollHeight,
                    behavior: "smooth"
                  })
                },
                onRegenerate: () => {
                  S && H(S, 2)
                },
                showScrollDownButton: D
              })]
            }) : (0, a.jsxs)("div", {
              className: "mx-auto flex h-full w-[300px] flex-col justify-center space-y-6 sm:w-[600px]",
              children: [(0, a.jsx)("div", {
                className: "text-center text-4xl font-bold text-black dark:text-white",
                children: "Welcome to Chatbot UI"
              }), (0, a.jsxs)("div", {
                className: "text-center text-lg text-black dark:text-white",
                children: [(0, a.jsx)("div", {
                  className: "mb-8",
                  children: "Chatbot UI is an open source clone of OpenAI's ChatGPT UI."
                }), (0, a.jsx)("a", {
                  href: "https://github.com/anbuhckr/anbuhckr.github.io/blob/master/README.md",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "underline",
                  children: "Backend Example"
                })]
              }), (0, a.jsxs)("div", {
                className: "text-center text-gray-500 dark:text-gray-400",
                children: [(0, a.jsx)("div", {
                  className: "mb-2",
                  children: "Chatbot UI allows you to plug in your API key & API host to use this UI."
                }), (0, a.jsx)("div", {
                  className: "mb-2",
                  children: i("Please set your API key, API host & System Prompt in the right of the sidebar.")
                })]
              })]
            })
          })
        });
      W.displayName = "Chat";
      let q = () => {
          let e = localStorage.getItem("conversationHistory"),
            t = localStorage.getItem("folders"),
            r = localStorage.getItem("prompts");
          e && (e = JSON.parse(e)), t && (t = JSON.parse(t)), r && (r = JSON.parse(r));
          let a = new Blob([JSON.stringify({
              version: 4,
              history: e || [],
              folders: t || [],
              prompts: r || []
            }, null, 2)], {
              type: "application/json"
            }),
            l = URL.createObjectURL(a),
            s = document.createElement("a");
          s.download = "chatbot_ui_history_".concat(function () {
            let e = new Date,
              t = e.getMonth() + 1,
              r = e.getDate();
            return "".concat(t, "-").concat(r)
          }(), ".json"), s.href = l, s.style.display = "none", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(l)
        },
        X = e => {
          let {
            history: t,
            folders: r,
            prompts: a
          } = function (e) {
            if (Array.isArray(e)) return {
              version: 4,
              history: c(e),
              folders: [],
              prompts: []
            };
            if (!("version" in e) && "folders" in e && "history" in e) return {
              version: 4,
              history: c(e.history || []),
              folders: (e.folders || []).map(e => ({
                id: e.id.toString(),
                name: e.name,
                type: "chat"
              })),
              prompts: []
            };
            if (3 === e.version) return {
              ...e,
              version: 4,
              prompts: []
            };
            if (4 === e.version) return e;
            throw Error("Unsupported data format")
          }(e), l = localStorage.getItem("conversationHistory"), s = [...l ? JSON.parse(l) : [], ...t].filter((e, t, r) => t === r.findIndex(t => t.id === e.id));
          localStorage.setItem("conversationHistory", JSON.stringify(s)), s.length > 0 ? localStorage.setItem("selectedConversation", JSON.stringify(s[s.length - 1])) : localStorage.removeItem("selectedConversation");
          let n = localStorage.getItem("folders"),
            o = [...n ? JSON.parse(n) : [], ...r].filter((e, t, r) => t === r.findIndex(t => t.id === e.id));
          localStorage.setItem("folders", JSON.stringify(o));
          let i = localStorage.getItem("prompts"),
            d = [...i ? JSON.parse(i) : [], ...a].filter((e, t, r) => t === r.findIndex(t => t.id === e.id));
          return localStorage.setItem("prompts", JSON.stringify(d)), {
            version: 4,
            history: s,
            folders: o,
            prompts: d
          }
        };
      var V = r(29860),
        Q = r(35169),
        Y = r(13232),
        ee = r(59241),
        et = e => {
          let {
            handleClick: t,
            children: r
          } = e;
          return (0, a.jsx)("button", {
            className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
            onClick: t,
            children: r
          })
        },
        er = e => {
          let {
            currentFolder: t,
            searchTerm: r,
            handleDrop: s,
            folderComponent: n
          } = e, {
            handleDeleteFolder: o,
            handleUpdateFolder: i
          } = (0, l.useContext)(g), [d, c] = (0, l.useState)(!1), [u, x] = (0, l.useState)(!1), [m, p] = (0, l.useState)(""), [h, f] = (0, l.useState)(!1), v = () => {
            i(t.id, m), p(""), x(!1)
          }, b = e => {
            e.dataTransfer && (f(!0), s(e, t), e.target.style.background = "none")
          };
          return (0, l.useEffect)(() => {
            u ? c(!1) : d && x(!1)
          }, [u, d]), (0, l.useEffect)(() => {
            r ? f(!0) : f(!1)
          }, [r]), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
              className: "relative flex items-center",
              children: [u ? (0, a.jsxs)("div", {
                className: "flex w-full items-center gap-3 bg-[#343541]/90 p-3",
                children: [h ? (0, a.jsx)(V.Z, {
                  size: 18
                }) : (0, a.jsx)(Q.Z, {
                  size: 18
                }), (0, a.jsx)("input", {
                  className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                  type: "text",
                  value: m,
                  onChange: e => p(e.target.value),
                  onKeyDown: e => {
                    "Enter" === e.key && (e.preventDefault(), v())
                  },
                  autoFocus: !0
                })]
              }) : (0, a.jsxs)("button", {
                className: "flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90",
                onClick: () => f(!h),
                onDrop: e => b(e),
                onDragOver: e => {
                  e.preventDefault()
                },
                onDragEnter: e => {
                  e.target.style.background = "#343541"
                },
                onDragLeave: e => {
                  e.target.style.background = "none"
                },
                children: [h ? (0, a.jsx)(V.Z, {
                  size: 18
                }) : (0, a.jsx)(Q.Z, {
                  size: 18
                }), (0, a.jsx)("div", {
                  className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3",
                  children: t.name
                })]
              }), (d || u) && (0, a.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [(0, a.jsx)(et, {
                  handleClick: e => {
                    e.stopPropagation(), d ? o(t.id) : u && v(), c(!1), x(!1)
                  },
                  children: (0, a.jsx)(D.Z, {
                    size: 18
                  })
                }), (0, a.jsx)(et, {
                  handleClick: e => {
                    e.stopPropagation(), c(!1), x(!1)
                  },
                  children: (0, a.jsx)(Y.Z, {
                    size: 18
                  })
                })]
              }), !d && !u && (0, a.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [(0, a.jsx)(et, {
                  handleClick: e => {
                    e.stopPropagation(), x(!0), p(t.name)
                  },
                  children: (0, a.jsx)(ee.Z, {
                    size: 18
                  })
                }), (0, a.jsx)(et, {
                  handleClick: e => {
                    e.stopPropagation(), c(!0)
                  },
                  children: (0, a.jsx)(E.Z, {
                    size: 18
                  })
                })]
              })]
            }), h ? n : null]
          })
        },
        ea = r(19836);
      let el = (0, l.createContext)(void 0),
        es = e => {
          let {
            conversation: t
          } = e, {
            state: {
              selectedConversation: r,
              messageIsStreaming: s
            },
            handleSelectConversation: n,
            handleUpdateConversation: o
          } = (0, l.useContext)(g), {
            handleDeleteConversation: i
          } = (0, l.useContext)(el), [d, c] = (0, l.useState)(!1), [u, x] = (0, l.useState)(!1), [m, p] = (0, l.useState)(""), h = (e, t) => {
            e.dataTransfer && e.dataTransfer.setData("conversation", JSON.stringify(t))
          }, f = e => {
            m.trim().length > 0 && (o(e, {
              key: "name",
              value: m
            }), p(""), x(!1))
          };
          return (0, l.useEffect)(() => {
            u ? c(!1) : d && x(!1)
          }, [u, d]), (0, a.jsxs)("div", {
            className: "relative flex items-center",
            children: [u && (null == r ? void 0 : r.id) === t.id ? (0, a.jsxs)("div", {
              className: "flex w-full items-center gap-3 rounded-lg bg-[#343541]/90 p-3",
              children: [(0, a.jsx)(ea.Z, {
                size: 18
              }), (0, a.jsx)("input", {
                className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                type: "text",
                value: m,
                onChange: e => p(e.target.value),
                onKeyDown: e => {
                  "Enter" === e.key && (e.preventDefault(), r && f(r))
                },
                autoFocus: !0
              })]
            }) : (0, a.jsxs)("button", {
              className: "flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90 ".concat(s ? "disabled:cursor-not-allowed" : "", " ").concat((null == r ? void 0 : r.id) === t.id ? "bg-[#343541]/90" : ""),
              onClick: () => n(t),
              disabled: s,
              draggable: "true",
              onDragStart: e => h(e, t),
              children: [(0, a.jsx)(ea.Z, {
                size: 18
              }), (0, a.jsx)("div", {
                className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3 ".concat((null == r ? void 0 : r.id) === t.id ? "pr-12" : "pr-1"),
                children: t.name
              })]
            }), (d || u) && (null == r ? void 0 : r.id) === t.id && (0, a.jsxs)("div", {
              className: "absolute right-1 z-10 flex text-gray-300",
              children: [(0, a.jsx)(et, {
                handleClick: e => {
                  e.stopPropagation(), d ? i(t) : u && f(t), c(!1), x(!1)
                },
                children: (0, a.jsx)(D.Z, {
                  size: 18
                })
              }), (0, a.jsx)(et, {
                handleClick: e => {
                  e.stopPropagation(), c(!1), x(!1)
                },
                children: (0, a.jsx)(Y.Z, {
                  size: 18
                })
              })]
            }), (null == r ? void 0 : r.id) === t.id && !d && !u && (0, a.jsxs)("div", {
              className: "absolute right-1 z-10 flex text-gray-300",
              children: [(0, a.jsx)(et, {
                handleClick: e => {
                  e.stopPropagation(), x(!0), r && p(r.name)
                },
                children: (0, a.jsx)(ee.Z, {
                  size: 18
                })
              }), (0, a.jsx)(et, {
                handleClick: e => {
                  e.stopPropagation(), c(!0)
                },
                children: (0, a.jsx)(E.Z, {
                  size: 18
                })
              })]
            })]
          })
        },
        en = e => {
          let {
            searchTerm: t
          } = e, {
            state: {
              folders: r,
              conversations: s
            },
            handleUpdateConversation: n
          } = (0, l.useContext)(g), o = (e, t) => {
            e.dataTransfer && n(JSON.parse(e.dataTransfer.getData("conversation")), {
              key: "folderId",
              value: t.id
            })
          }, i = e => s && s.filter(e => e.folderId).map((t, r) => {
            if (t.folderId === e.id) return (0, a.jsx)("div", {
              className: "ml-5 gap-2 border-l pl-2",
              children: (0, a.jsx)(es, {
                conversation: t
              })
            }, r)
          });
          return (0, a.jsx)("div", {
            className: "flex w-full flex-col pt-2",
            children: r.filter(e => "chat" === e.type).sort((e, t) => e.name.localeCompare(t.name)).map((e, r) => (0, a.jsx)(er, {
              searchTerm: t,
              currentFolder: e,
              handleDrop: o,
              folderComponent: i(e)
            }, r))
          })
        };
      var eo = r(65905),
        ei = r(51384);
      let ed = e => {
          let {
            text: t,
            icon: r,
            onClick: l
          } = e;
          return (0, a.jsxs)("button", {
            className: "flex w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10",
            onClick: l,
            children: [(0, a.jsx)("div", {
              children: r
            }), (0, a.jsx)("span", {
              children: t
            })]
          })
        },
        ec = e => {
          let {
            onImport: t
          } = e, {
            t: r
          } = (0, s.$G)("sidebar");
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("input", {
              id: "import-file",
              className: "sr-only",
              tabIndex: -1,
              type: "file",
              accept: ".json",
              onChange: e => {
                var r;
                if (!(null === (r = e.target.files) || void 0 === r ? void 0 : r.length)) return;
                let a = e.target.files[0],
                  l = new FileReader;
                l.onload = e => {
                  var r;
                  t(JSON.parse(null === (r = e.target) || void 0 === r ? void 0 : r.result))
                }, l.readAsText(a)
              }
            }), (0, a.jsx)(ed, {
              text: r("Import data"),
              icon: (0, a.jsx)(ei.Z, {
                size: 18
              }),
              onClick: () => {
                let e = document.querySelector("#import-file");
                e && e.click()
              }
            })]
          })
        },
        eu = e => {
          let {
            onClearConversations: t
          } = e, [r, n] = (0, l.useState)(!1), {
            t: o
          } = (0, s.$G)("sidebar"), i = () => {
            t(), n(!1)
          };
          return r ? (0, a.jsxs)("div", {
            className: "flex w-full cursor-pointer items-center rounded-lg py-3 px-3 hover:bg-gray-500/10",
            children: [(0, a.jsx)(E.Z, {
              size: 18
            }), (0, a.jsx)("div", {
              className: "ml-3 flex-1 text-left text-[12.5px] leading-3 text-white",
              children: o("Are you sure?")
            }), (0, a.jsxs)("div", {
              className: "flex w-[40px]",
              children: [(0, a.jsx)(D.Z, {
                className: "ml-auto mr-1 min-w-[20px] text-neutral-400 hover:text-neutral-100",
                size: 18,
                onClick: e => {
                  e.stopPropagation(), i()
                }
              }), (0, a.jsx)(Y.Z, {
                className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                size: 18,
                onClick: e => {
                  e.stopPropagation(), n(!1)
                }
              })]
            })]
          }) : (0, a.jsx)(ed, {
            text: o("Clear conversations"),
            icon: (0, a.jsx)(E.Z, {
              size: 18
            }),
            onClick: () => n(!0)
          })
        },
        ex = () => {
          let {
            t: e
          } = (0, s.$G)("sidebar"), {
            state: {
              conversations: t
            }
          } = (0, l.useContext)(g), {
            handleClearConversations: r,
            handleImportConversations: n,
            handleExportData: o
          } = (0, l.useContext)(el);
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm",
            children: [t.length > 0 ? (0, a.jsx)(eu, {
              onClearConversations: r
            }) : null, (0, a.jsx)(ec, {
              onImport: n
            }), (0, a.jsx)(ed, {
              text: e("Export data"),
              icon: (0, a.jsx)(eo.Z, {
                size: 18
              }),
              onClick: () => o()
            }), null]
          })
        },
        em = e => {
          let {
            conversations: t
          } = e;
          return (0, a.jsx)("div", {
            className: "flex w-full flex-col gap-1",
            children: t.filter(e => !e.folderId).slice().reverse().map((e, t) => (0, a.jsx)(es, {
              conversation: e
            }, t))
          })
        };
      var ep = r(63627),
        eh = r(8237),
        ef = r(33526),
        eg = r(67421),
        ev = r(88908),
        eb = r(20994);
      let ew = e => {
          let {
            onClick: t,
            side: r
          } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("button", {
              className: "fixed top-5 ".concat("right" === r ? "right-[270px]" : "left-[270px]", " z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:").concat("right" === r ? "right-[270px]" : "left-[270px]", " sm:h-8 sm:w-8 sm:text-neutral-700"),
              onClick: t,
              children: "right" === r ? (0, a.jsx)(ev.Z, {}) : (0, a.jsx)(eb.Z, {})
            }), (0, a.jsx)("div", {
              onClick: t,
              className: "absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden"
            })]
          })
        },
        ey = e => {
          let {
            onClick: t,
            side: r
          } = e;
          return (0, a.jsx)("button", {
            className: "fixed top-2.5 ".concat("right" === r ? "right-2" : "left-2", " z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:").concat("right" === r ? "right-2" : "left-2", " sm:h-8 sm:w-8 sm:text-neutral-700"),
            onClick: t,
            children: "right" === r ? (0, a.jsx)(eb.Z, {}) : (0, a.jsx)(ev.Z, {})
          })
        };
      var ej = e => {
          let {
            placeholder: t,
            searchTerm: r,
            onSearch: l
          } = e, {
            t: n
          } = (0, s.$G)("sidebar");
          return (0, a.jsxs)("div", {
            className: "relative flex items-center",
            children: [(0, a.jsx)("input", {
              className: "w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white",
              type: "text",
              placeholder: n(t) || "",
              value: r,
              onChange: e => {
                l(e.target.value)
              }
            }), r && (0, a.jsx)(Y.Z, {
              className: "absolute right-4 cursor-pointer text-neutral-300 hover:text-neutral-400",
              size: 18,
              onClick: () => {
                l("")
              }
            })]
          })
        },
        ek = e => {
          let {
            isOpen: t,
            addItemButtonTitle: r,
            side: l,
            items: s,
            itemComponent: n,
            folderComponent: o,
            footerComponent: i,
            searchTerm: d,
            handleSearchTerm: c,
            toggleOpen: u,
            handleCreateItem: x,
            handleCreateFolder: m,
            handleDrop: p
          } = e, {
            t: h
          } = (0, eg.$G)("promptbar");
          return t ? (0, a.jsxs)("div", {
            children: [(0, a.jsxs)("div", {
              className: "fixed top-0 ".concat(l, "-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0"),
              children: ["left" === l ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [(0, a.jsxs)("button", {
                    className: "text-sidebar flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-white transition-colors duration-200 hover:bg-gray-500/10",
                    onClick: () => {
                      x(), c("")
                    },
                    children: [(0, a.jsx)(ep.Z, {
                      size: 16
                    }), r]
                  }), (0, a.jsx)("button", {
                    className: "ml-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10",
                    onClick: m,
                    children: (0, a.jsx)(eh.Z, {
                      size: 16
                    })
                  })]
                }), (0, a.jsx)(ej, {
                  placeholder: h("Search...") || "",
                  searchTerm: d,
                  onSearch: c
                }), (0, a.jsxs)("div", {
                  className: "flex-grow overflow-auto",
                  children: [(null == s ? void 0 : s.length) > 0 && (0, a.jsx)("div", {
                    className: "flex border-b border-white/20 pb-2",
                    children: o
                  }), (null == s ? void 0 : s.length) > 0 ? (0, a.jsx)("div", {
                    className: "pt-2",
                    onDrop: p,
                    onDragOver: e => {
                      e.preventDefault()
                    },
                    onDragEnter: e => {
                      e.target.style.background = "#343541"
                    },
                    onDragLeave: e => {
                      e.target.style.background = "none"
                    },
                    children: n
                  }) : (0, a.jsxs)("div", {
                    className: "mt-8 select-none text-center text-white opacity-50",
                    children: [(0, a.jsx)(ef.Z, {
                      className: "mx-auto mb-3"
                    }), (0, a.jsx)("span", {
                      className: "text-[14px] leading-normal",
                      children: h("No data.")
                    })]
                  })]
                })]
              }) : (0, a.jsx)(a.Fragment, {}), i]
            }), (0, a.jsx)(ew, {
              onClick: u,
              side: l
            })]
          }) : (0, a.jsx)(ey, {
            onClick: u,
            side: l
          })
        };
      let eC = {
        searchTerm: "",
        filteredConversations: []
      };
      var eN = r(57632);
      let eS = () => {
          let {
            t: e
          } = (0, s.$G)("sidebar"), t = i({
            initialState: eC
          }), {
            state: {
              conversations: r,
              showChatbar: n,
              folders: o
            },
            dispatch: d,
            handleCreateFolder: c,
            handleNewConversation: u,
            handleUpdateConversation: h
          } = (0, l.useContext)(g), {
            state: {
              searchTerm: f,
              filteredConversations: v
            },
            dispatch: b
          } = t;
          return (0, l.useEffect)(() => {
            f ? b({
              field: "filteredConversations",
              value: r.filter(e => (e.name.toLocaleLowerCase() + " " + e.messages.map(e => e.content).join(" ")).toLowerCase().includes(f.toLowerCase()))
            }) : b({
              field: "filteredConversations",
              value: r
            })
          }, [f, r, b]), (0, a.jsx)(el.Provider, {
            value: {
              ...t,
              handleDeleteConversation: t => {
                let a = r.filter(e => e.id !== t.id);
                d({
                  field: "conversations",
                  value: a
                }), b({
                  field: "searchTerm",
                  value: ""
                }), m(a), a.length > 0 ? (d({
                  field: "selectedConversation",
                  value: a[a.length - 1]
                }), x(a[a.length - 1])) : (d({
                  field: "selectedConversation",
                  value: {
                    id: (0, eN.Z)(),
                    name: e("New Conversation"),
                    messages: [],
                    prompt: "",
                    temperature: 1,
                    folderId: null
                  }
                }), localStorage.removeItem("selectedConversation"))
              },
              handleClearConversations: () => {
                d({
                  field: "selectedConversation",
                  value: {
                    id: (0, eN.Z)(),
                    name: e("New Conversation"),
                    messages: [],
                    prompt: "",
                    temperature: 1,
                    folderId: null
                  }
                }), d({
                  field: "conversations",
                  value: []
                }), localStorage.removeItem("conversationHistory"), localStorage.removeItem("selectedConversation");
                let t = o.filter(e => "chat" !== e.type);
                d({
                  field: "folders",
                  value: t
                }), p(t)
              },
              handleImportConversations: e => {
                let {
                  history: t,
                  folders: r
                } = X(e);
                d({
                  field: "conversations",
                  value: t
                }), d({
                  field: "selectedConversation",
                  value: t[t.length - 1]
                }), d({
                  field: "folders",
                  value: r
                }), window.location.reload()
              },
              handleExportData: () => {
                q()
              }
            },
            children: (0, a.jsx)(ek, {
              side: "left",
              isOpen: n,
              addItemButtonTitle: e("New chat"),
              itemComponent: (0, a.jsx)(em, {
                conversations: v
              }),
              folderComponent: (0, a.jsx)(en, {
                searchTerm: f
              }),
              items: v,
              searchTerm: f,
              handleSearchTerm: e => b({
                field: "searchTerm",
                value: e
              }),
              toggleOpen: () => {
                d({
                  field: "showChatbar",
                  value: !n
                }), localStorage.setItem("showChatbar", JSON.stringify(!n))
              },
              handleCreateItem: u,
              handleCreateFolder: () => c(e("New folder"), "chat"),
              handleDrop: e => {
                e.dataTransfer && (h(JSON.parse(e.dataTransfer.getData("conversation")), {
                  key: "folderId",
                  value: 0
                }), b({
                  field: "searchTerm",
                  value: ""
                }), e.target.style.background = "none")
              },
              footerComponent: (0, a.jsx)(ex, {})
            })
          })
        },
        eI = e => {
          let {
            selectedConversation: t,
            onNewConversation: r
          } = e;
          return (0, a.jsxs)("nav", {
            className: "flex w-full justify-between bg-[#202123] py-3 px-4",
            children: [(0, a.jsx)("div", {
              className: "mr-4"
            }), (0, a.jsx)("div", {
              className: "max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap",
              children: t.name
            }), (0, a.jsx)(ep.Z, {
              className: "cursor-pointer hover:text-neutral-400 mr-8",
              onClick: r
            })]
          })
        },
        eP = (0, l.createContext)(void 0);
      var ez = r(2749);
      let eZ = e => {
        let {
          apiKey: t,
          onApiKeyChange: r
        } = e, {
          t: n
        } = (0, s.$G)("sidebar"), [o, i] = (0, l.useState)(!1), [d, c] = (0, l.useState)(t), u = (0, l.useRef)(null), x = e => {
          r(e.trim()), i(!1)
        };
        return (0, l.useEffect)(() => {
          if (o) {
            var e;
            null === (e = u.current) || void 0 === e || e.focus()
          }
        }, [o]), o ? (0, a.jsxs)("div", {
          className: "duration:200 flex w-full cursor-pointer items-center rounded-md py-3 px-3 transition-colors hover:bg-gray-500/10",
          children: [(0, a.jsx)(ez.Z, {
            size: 18
          }), (0, a.jsx)("input", {
            ref: u,
            className: "ml-2 h-[20px] flex-1 overflow-hidden overflow-ellipsis border-b border-neutral-400 bg-transparent pr-1 text-[12.5px] leading-3 text-left text-white outline-none focus:border-neutral-100",
            type: "password",
            value: d,
            onChange: e => c(e.target.value),
            onKeyDown: e => {
              "Enter" === e.key && (e.preventDefault(), x(d))
            },
            placeholder: n("API Key") || "API Key"
          }), (0, a.jsxs)("div", {
            className: "flex w-[40px]",
            children: [(0, a.jsx)(D.Z, {
              className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
              size: 18,
              onClick: e => {
                e.stopPropagation(), x(d)
              }
            }), (0, a.jsx)(Y.Z, {
              className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
              size: 18,
              onClick: e => {
                e.stopPropagation(), i(!1), c(t)
              }
            })]
          })]
        }) : (0, a.jsx)(ed, {
          text: n("API Key"),
          icon: (0, a.jsx)(ez.Z, {
            size: 18
          }),
          onClick: () => i(!0)
        })
      };
      var eE = r(94367);
      let eD = e => {
          let {
            apiHost: t,
            onApiHostChange: r
          } = e, {
            t: n
          } = (0, s.$G)("sidebar"), [o, i] = (0, l.useState)(!1), [d, c] = (0, l.useState)(t), u = (0, l.useRef)(null), x = e => {
            r(e.trim()), i(!1)
          };
          return (0, l.useEffect)(() => {
            if (o) {
              var e;
              null === (e = u.current) || void 0 === e || e.focus()
            }
          }, [o]), o ? (0, a.jsxs)("div", {
            className: "duration:200 flex w-full cursor-pointer items-center rounded-md py-3 px-3 transition-colors hover:bg-gray-500/10",
            children: [(0, a.jsx)(eE.Z, {
              size: 18
            }), (0, a.jsx)("input", {
              ref: u,
              className: "ml-2 h-[20px] flex-1 overflow-hidden overflow-ellipsis border-b border-neutral-400 bg-transparent pr-1 text-[12.5px] leading-3 text-left text-white outline-none focus:border-neutral-100",
              type: "text",
              value: d,
              onChange: e => c(e.target.value),
              onKeyDown: e => {
                "Enter" === e.key && (e.preventDefault(), x(d))
              },
              placeholder: n("API Host") || "API Host"
            }), (0, a.jsxs)("div", {
              className: "flex w-[40px]",
              children: [(0, a.jsx)(D.Z, {
                className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                size: 18,
                onClick: e => {
                  e.stopPropagation(), x(d)
                }
              }), (0, a.jsx)(Y.Z, {
                className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                size: 18,
                onClick: e => {
                  e.stopPropagation(), i(!1), c(t)
                }
              })]
            })]
          }) : (0, a.jsx)(ed, {
            text: n("API Host"),
            icon: (0, a.jsx)(eE.Z, {
              size: 18
            }),
            onClick: () => i(!0)
          })
        },
        eO = e => {
          let {
            sysPrompt: t,
            onSysPromptChange: r
          } = e, {
            t: n
          } = (0, s.$G)("sidebar"), [o, i] = (0, l.useState)(!1), [d, c] = (0, l.useState)(t), u = (0, l.useRef)(null), x = e => {
            r(e.trim()), i(!1)
          };
          return (0, l.useEffect)(() => {
            if (o) {
              var e;
              null === (e = u.current) || void 0 === e || e.focus()
            }
          }, [o]), o ? (0, a.jsxs)("div", {
            className: "duration:200 flex w-full cursor-pointer items-center rounded-md py-3 px-3 transition-colors hover:bg-gray-500/10",
            children: [(0, a.jsx)(S.Z, {
              size: 18
            }), (0, a.jsx)("textarea", {
              ref: u,
              rows: 7,
              className: "ml-2 flex-1 overflow-hidden overflow-ellipsis border-b border-neutral-400 bg-transparent pr-1 text-[12.5px] text-left text-white outline-none focus:border-neutral-100",
              onChange: e => c(e.target.value),
              placeholder: n("System Prompt") || "System Prompt",
              children: d
            }), (0, a.jsxs)("div", {
              className: "flex w-[40px]",
              children: [(0, a.jsx)(D.Z, {
                className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                size: 18,
                onClick: e => {
                  e.stopPropagation(), x(d)
                }
              }), (0, a.jsx)(Y.Z, {
                className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                size: 18,
                onClick: e => {
                  e.stopPropagation(), i(!1), c(t)
                }
              })]
            })]
          }) : (0, a.jsx)(ed, {
            text: n("System Prompt"),
            icon: (0, a.jsx)(S.Z, {
              size: 18
            }),
            onClick: () => i(!0)
          })
        },
        eT = () => {
          let {
            state: {
              apiKey: e,
              apiHost: t,
              sysPrompt: r,
              serverSideApiKeyIsSet: s,
              serverSideApiHostIsSet: n,
              serverSideSysPromptIsSet: o
            }
          } = (0, l.useContext)(g), {
            handleApiKeyChange: i,
            handleApiHostChange: d,
            handleSysPromptChange: c
          } = (0, l.useContext)(eP);
          return (0, a.jsxs)("div", {
            className: "flex flex-col items-center space-y-1 pt-1 text-sm",
            children: [s ? null : (0, a.jsx)(eZ, {
              apiKey: e,
              onApiKeyChange: i
            }), n ? null : (0, a.jsx)(eD, {
              apiHost: t,
              onApiHostChange: d
            }), o ? null : (0, a.jsx)(eO, {
              sysPrompt: r,
              onSysPromptChange: c
            })]
          })
        };
      var eA = () => {
        let {
          t: e
        } = (0, s.$G)("promptbar"), {
          state: {
            showPromptbar: t
          },
          dispatch: r
        } = (0, l.useContext)(g), n = (0, l.useCallback)(e => {
          r({
            field: "apiKey",
            value: e
          }), localStorage.setItem("apiKey", e)
        }, [r]), o = (0, l.useCallback)(e => {
          r({
            field: "apiHost",
            value: e
          }), localStorage.setItem("apiHost", e)
        }, [r]), i = (0, l.useCallback)(e => {
          r({
            field: "sysPrompt",
            value: e
          }), localStorage.setItem("sysPrompt", e)
        }, [r]);
        return (0, a.jsx)(eP.Provider, {
          value: {
            handleApiKeyChange: n,
            handleApiHostChange: o,
            handleSysPromptChange: i
          },
          children: (0, a.jsx)(ek, {
            side: "right",
            isOpen: t,
            addItemButtonTitle: e("New prompt"),
            itemComponent: (0, a.jsx)(a.Fragment, {}),
            folderComponent: (0, a.jsx)(a.Fragment, {}),
            items: [],
            searchTerm: "",
            handleSearchTerm: () => {},
            toggleOpen: () => {
              r({
                field: "showPromptbar",
                value: !t
              }), localStorage.setItem("showPromptbar", JSON.stringify(!t))
            },
            handleCreateItem: () => {},
            handleCreateFolder: () => {},
            handleDrop: () => {},
            footerComponent: (0, a.jsx)(eT, {})
          })
        })
      };
      let eR = {
        apiKey: "",
        apiHost: "",
        sysPrompt: "",
        loading: !1,
        messageIsStreaming: !1,
        folders: [],
        conversations: [],
        selectedConversation: void 0,
        currentMessage: void 0,
        prompts: [],
        temperature: 1,
        showPromptbar: !0,
        showChatbar: !0,
        currentFolder: void 0,
        messageError: !1,
        searchTerm: "",
        serverSideApiKeyIsSet: !1,
        serverSideApiHostIsSet: !1,
        serverSideSysPromptIsSet: !1
      };
      var eH = e => {
          let {
            serverSideApiKeyIsSet: t,
            serverSideApiHostIsSet: r,
            serverSideSysPromptIsSet: n
          } = e, {
            t: f
          } = (0, s.$G)("chat"), v = i({
            initialState: eR
          }), {
            state: {
              folders: b,
              conversations: w,
              selectedConversation: y,
              prompts: j
            },
            dispatch: k
          } = v, C = (0, l.useRef)(!1), N = () => {
            var e;
            let t = w[w.length - 1],
              r = {
                id: (0, eN.Z)(),
                name: f("New Conversation"),
                messages: [],
                prompt: "",
                temperature: null !== (e = null == t ? void 0 : t.temperature) && void 0 !== e ? e : 1,
                folderId: null
              },
              a = [...w, r];
            k({
              field: "selectedConversation",
              value: r
            }), k({
              field: "conversations",
              value: a
            }), x(r), m(a), k({
              field: "loading",
              value: !1
            })
          };
          return (0, l.useEffect)(() => {
            window.innerWidth < 640 && k({
              field: "showChatbar",
              value: !1
            })
          }, [y, k]), (0, l.useEffect)(() => {
            t && k({
              field: "serverSideApiKeyIsSet",
              value: t
            }), r && k({
              field: "serverSideApiHostIsSet",
              value: r
            }), n && k({
              field: "serverSideSysPromptIsSet",
              value: n
            })
          }, [t, r, n, k]), (0, l.useEffect)(() => {
            let e = localStorage.getItem("apiKey");
            t ? (k({
              field: "apiKey",
              value: ""
            }), localStorage.removeItem("apiKey")) : e && k({
              field: "apiKey",
              value: e
            });
            let a = localStorage.getItem("apiHost");
            r ? (k({
              field: "apiHost",
              value: ""
            }), localStorage.removeItem("apiHost")) : a && k({
              field: "apiHost",
              value: a
            });
            let l = localStorage.getItem("sysPrompt");
            n ? (k({
              field: "sysPrompt",
              value: ""
            }), localStorage.removeItem("sysPrompt")) : l && k({
              field: "sysPrompt",
              value: l
            }), window.innerWidth < 640 && (k({
              field: "showChatbar",
              value: !1
            }), k({
              field: "showPromptbar",
              value: !1
            }));
            let s = localStorage.getItem("showChatbar");
            s && k({
              field: "showChatbar",
              value: "true" === s
            });
            let o = localStorage.getItem("showPromptbar");
            o && k({
              field: "showPromptbar",
              value: "true" === o
            });
            let i = localStorage.getItem("folders");
            i && k({
              field: "folders",
              value: JSON.parse(i)
            });
            let u = localStorage.getItem("prompts");
            u && k({
              field: "prompts",
              value: JSON.parse(u)
            });
            let x = localStorage.getItem("conversationHistory");
            x && k({
              field: "conversations",
              value: c(JSON.parse(x))
            });
            let m = localStorage.getItem("selectedConversation");
            m ? k({
              field: "selectedConversation",
              value: d(JSON.parse(m))
            }) : k({
              field: "selectedConversation",
              value: {
                id: (0, eN.Z)(),
                name: f("New Conversation"),
                messages: [],
                prompt: "",
                temperature: 1,
                folderId: null
              }
            })
          }, [t, r, n, k, f]), (0, a.jsxs)(g.Provider, {
            value: {
              ...v,
              handleNewConversation: N,
              handleCreateFolder: (e, t) => {
                let r = [...b, {
                  id: (0, eN.Z)(),
                  name: e,
                  type: t
                }];
                k({
                  field: "folders",
                  value: r
                }), p(r)
              },
              handleDeleteFolder: e => {
                let t = b.filter(t => t.id !== e);
                k({
                  field: "folders",
                  value: t
                }), p(t);
                let r = w.map(t => t.folderId === e ? {
                  ...t,
                  folderId: null
                } : t);
                k({
                  field: "conversations",
                  value: r
                }), m(r);
                let a = j.map(t => t.folderId === e ? {
                  ...t,
                  folderId: null
                } : t);
                k({
                  field: "prompts",
                  value: a
                }), h(a)
              },
              handleUpdateFolder: (e, t) => {
                let r = b.map(r => r.id === e ? {
                  ...r,
                  name: t
                } : r);
                k({
                  field: "folders",
                  value: r
                }), p(r)
              },
              handleSelectConversation: e => {
                k({
                  field: "selectedConversation",
                  value: e
                }), x(e)
              },
              handleUpdateConversation: (e, t) => {
                let {
                  single: r,
                  all: a
                } = u({
                  ...e,
                  [t.key]: t.value
                }, w);
                k({
                  field: "selectedConversation",
                  value: r
                }), k({
                  field: "conversations",
                  value: a
                })
              }
            },
            children: [(0, a.jsxs)(o(), {
              children: [(0, a.jsx)("title", {
                children: "Chatbot UI"
              }), (0, a.jsx)("meta", {
                name: "description",
                content: "ChatGPT but better."
              }), (0, a.jsx)("meta", {
                name: "viewport",
                content: "height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
              }), (0, a.jsx)("link", {
                rel: "icon",
                href: "/favicon.ico"
              })]
            }), y && (0, a.jsxs)("main", {
              className: "flex h-screen w-screen flex-col text-sm text-white dark:text-white dark",
              children: [(0, a.jsx)("div", {
                className: "fixed top-0 w-full sm:hidden",
                children: (0, a.jsx)(eI, {
                  selectedConversation: y,
                  onNewConversation: N
                })
              }), (0, a.jsxs)("div", {
                className: "flex h-full w-full pt-[48px] sm:pt-0",
                children: [(0, a.jsx)(eS, {}), (0, a.jsx)("div", {
                  className: "flex flex-1",
                  children: (0, a.jsx)(W, {
                    stopConversationRef: C
                  })
                }), (0, a.jsx)(eA, {})]
              })]
            })]
          })
        },
        e_ = !0
    }
  },
  function (e) {
    e.O(0, [879, 617, 888, 774, 179], function () {
      return e(e.s = 48312)
    }), _N_E = e.O()
  }
]);
