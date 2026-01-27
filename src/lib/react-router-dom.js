"use client";

import NextLink from "next/link";
import { useRouter, usePathname, useParams as useNextParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export const Link = ({ to, href, children, ...rest }) => {
  const targetHref = to || href || "#";
  return (
    <NextLink href={targetHref} {...rest}>
      {children}
    </NextLink>
  );
};

export const useNavigate = () => {
  const router = useRouter();
  return (path, options = {}) => {
    if (!path) return;
    if (options.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  };
};

export const useLocation = () => {
  const pathname = usePathname();
  return useMemo(
    () => ({
      pathname: pathname || "/",
      search: "",
    }),
    [pathname]
  );
};

export const useParams = () => useNextParams();

export const Navigate = ({ to, replace }) => {
  const router = useRouter();
  useEffect(() => {
    if (to) {
      replace ? router.replace(to) : router.push(to);
    }
  }, [router, to, replace]);
  return null;
};

export const BrowserRouter = ({ children }) => <>{children}</>;
export const Routes = ({ children }) => <>{children}</>;
export const Route = ({ element }) => element;
