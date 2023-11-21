import React, { createContext, useCallback, useEffect, useState } from "react";
import { debounce } from "../utils/functions/debounce";
import { sizes } from "../assets/styles/media";

export const PageSizeContext = createContext({});

export const PageSizeContextProvider = ({ children }) => {
  const [state, setState] = useState({
    width: null,
    size: null,
  });

  const onResize = useCallback((widthPage) => {
    const sizesArr = Object.entries(sizes).reverse();

    for (const [key, value] of sizesArr) {
      if (widthPage >= value) {
        setState({
          width: widthPage,
          size: key,
        });
        break;
      }
    }
  }, []);

  const onResizeDebounce = debounce((e) => onResize(e.srcElement.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", onResizeDebounce);
    onResize(window.innerWidth);
  }, []);

  return (
    <PageSizeContext.Provider value={state}>
      {children}
    </PageSizeContext.Provider>
  );
};
