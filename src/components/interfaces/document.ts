export type IDocumentLayoutProps = {
  top: number;
  children?: any;
};

export type IDocumentNavigationProps = {
  top: number;
  size: number;
  width: number;
  show?: boolean;
}

export type IDocumentContentProps = {
  top: number;
  left: number;
  right: number;
  size: number;
  showOutline?: boolean;
  showNavigation?: boolean;
}

export type IDocumentOutlineProps = IDocumentNavigationProps;