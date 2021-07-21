const fetchNode = require("node-fetch").default;

const isBrowser = () => typeof window !== "undefined";

export const fetchData: any = async (url: string, opt: Object) => {
  try {
    const response = (await isBrowser())
      ? fetch(url, opt)
      : fetchNode(url, opt);
    const resp = await response;
    return await resp.json();
  } catch (err) {
    return err;
  }
};
