/**
 * React router wouldn't work so I made a shittier one.
 */

import React, { useState, useEffect } from "react";
import { History } from "./historyUtils";

// export type Route = {
//   path: string;
//   index?: boolean;
//   element: JSX.Element;
// };

const history = new History();

window.onpopstate = (e) => {
  history.updateHistory(history.prevPath);
};

const currentRouteHook = (router) => {
  const index = router.filter((route) => route.index)[0];
  const [currentRoute, setCurrentRoute] = useState(index ?? router[0]);

  useEffect(() => {
    const sub = history.subscribe((path) => {
      const [current] = router.filter((route) => path === route.path);
      setCurrentRoute(current ?? index);
    });

    if (currentRoute.path !== window.location.pathname)
      history.updateHistory(window.location.pathname);

    return () => {
      history.unsubscribe(sub);
    };
  });

  return currentRoute;
};

/**
 * Where the routes work.
 * @returns
 */
const Router = ({ routes }) => {
  const route = currentRouteHook(routes);
  return <div className="Router">{route.element ?? <p>No Route.</p>}</div>;
};

/**
 * Used to navigate between pages.
 */
export const Link = ({ to, children }) => {
  return (
    <a
      className="Link"
      onClick={(e) => {
        e.preventDefault();
        history.updateHistory(to);
      }}
    >
      {children ?? to}
    </a>
  );
};

export const redirect = (to) => history.updateHistory(to);

export default Router;
