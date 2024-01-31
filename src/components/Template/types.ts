export interface TemplateProps {
  title: string;
  children?: React.ReactNode;
}

export type TemplatePropsView = Omit<TemplateProps, "title">;
