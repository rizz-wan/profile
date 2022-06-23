export const tabs = ['all', 'about', 'works', 'blog'];
export const subTabs = ['projects', 'pens'];

export const getPathName = (): string => {
  let location = window.location.pathname?.split('/')?.[1];
  if (tabs.includes(location)) return location;
  window.history.replaceState(null, '', `/${tabs[0]}`);
  return tabs[0];
};

export const getSubPathName = (): string => {
  let location = window.location.pathname?.split('/')?.[2];
  return location;
};
