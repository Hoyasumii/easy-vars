export interface Controller {
  path: string;
  element: JSX.Element;
  children?: Array<ChildrenProps>;
  loader?: () => Promise<any>;
  action?: () => Promise<any>;
}

export interface ChildrenProps {
  path?: string;
  index?: boolean;
  element: JSX.Element;
  children?: Array<ChildrenProps>;
  loader?: () => Promise<any>;
  action?: () => Promise<any>;
}