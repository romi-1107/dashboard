type menuTabObjProps = {
  id: number;
  menu: string;
};

export type menuTabProps = {
  menuTabData: Array<menuTabObjProps>;
  handleTabMenu: (id: number) => void;
  tabMenuId: number;
};
