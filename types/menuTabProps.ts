type MenuTabObjProps = {
  id: number;
  menu: string;
};

export type MenuTabProps = {
  menuTabData: Array<MenuTabObjProps>;
  handleTabMenu: (id: number) => void;
  tabMenuId: number;
};
