import React, { createContext } from "react";
import useClientRect from "@utils/hooks/useClientRect";

export const NavBarContext = createContext(null);


const MyProviders = ({ children }) => {
    const [navRect, setNavRect] = useClientRect(null);

    // When ref is a callback, the callback runs once components mounts
    // (with node as element) and again when it unmounts (with node as null).
    // Callback updates state here, at mount / unmount,
    // which forces this and all child components to rerender.
    // Even if the ref only gets attached later in time,
    // and at that point some calcs must be made (which would not have been possible to make earlier).

    // Only need either ref or ref callback, not both.
    // Good thing about ref callback, is that whole site rerenders once ref is set,
    // ensuring that once we use ref it has the right value.

    return (
        <NavBarContext.Provider value={{navRect, setNavRect}}>
            {children}
        </NavBarContext.Provider>
    )
}

export default MyProviders;