import publicRoutes from "./publicRoutes";

const flattenRoutes = (routes) => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach((item) => {
    flatRoutes.push(item);
    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

const publicFlatRoutes = flattenRoutes([...publicRoutes]);

export { publicFlatRoutes };
