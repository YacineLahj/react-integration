import { createContext, useContext } from "react";

const defaultUser = {
  id: 8681263,
  name: "Ed",
  img_src:
    "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTS7QXZDCmDvlA-eJc0bMl-9IrKbdybwe5ajserClbbRZCEPqK_FMkGeyIA8RDIpqImFff8Hbllycai9QxBUtGVerclYzJGzLrAUS24pW57OWBhiRNFTnnKV4ECrAl5PxdO42G9ock_RdPN&s=19",
};

export const UserContext = createContext(defaultUser);

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ defaultUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("err");

  return context;
}
