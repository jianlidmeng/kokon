const s = (t, o) => {
  o || (o = window.location.href);
  const n = o.slice(o.indexOf("?") + 1).split("&"), e = {};
  return n.map((c) => {
    const [a, p] = c.split("=");
    e[a] = decodeURIComponent(p);
  }), e[t];
}, i = (t) => t ? t.includes("http") ? t : `${location.protocol}//${t}` : "";
export {
  s as getUrlParameter,
  i as urlAddHttp
};
