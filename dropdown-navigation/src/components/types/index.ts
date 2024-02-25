interface SVGRenderProps {
    name: string;
    width: string;
    height: string;
    pathd: string;
    pathfill: string;
  }
  
  interface MenuGroupProps {
    name: string;
    menuItems: SVGRenderProps[];
  }
  
  interface MenuBarProps {
    menuGroup: MenuGroupProps[];
    otherItems: string[];
    cta: string[];
    hamNav?: boolean
    handleNav?: () => void
  }

  // Export all interfaces
export type {
    SVGRenderProps,
    MenuGroupProps,
    MenuBarProps
  };