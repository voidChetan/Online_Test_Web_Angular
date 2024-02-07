export interface MenuItem {
    title?: string;
    icon?: string;
    link?: string | undefined;
    color?: string;
  
    hideFor?: string;
  
    expanded?: boolean;
    subMenu?: MenuItem[];
  }
  
 export type Menu = MenuItem[];