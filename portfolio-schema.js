(()=>{'use strict';
const baseline=structuredClone(window.PORTFOLIO),keys=Object.keys(baseline.modules);
// Keep old six-module links and backups usable after removing the events module.
window.normalizePortfolio=input=>{
  const d={...structuredClone(baseline),...input};
  d.modules=Object.fromEntries(keys.map(k=>[k,{...structuredClone(baseline.modules[k]),...(input?.modules?.[k]||{})}]));
  const order=a=>[...new Set([...(Array.isArray(a)?a:[]).filter(k=>keys.includes(k)),...keys])];
  d.order=order(d.order);
  d.roles=Object.fromEntries(Object.entries(baseline.roles).map(([k,r])=>[k,{...r,...(d.roles?.[k]||{}),order:order(d.roles?.[k]?.order||r.order)}]));
  d.roles.all.order=[...d.order];
  d.capabilityNetwork=structuredClone(d.capabilityNetwork||baseline.capabilityNetwork);
  d.capabilityNetwork.dimensions.forEach(n=>{if(!keys.includes(n.project))n.project='voice';});
  return d;
};
})();
