import { IGridItem } from "./gridItem.types";

export interface GenericGridPageProps {
  pageClass: string;
  containerClass: string;
  headerClass: string;
  gridClass: string;
  cardClass: string;
  footerClass: string;
  title: React.ReactNode;
  subtitle: string;
  footerText: string;
  items: IGridItem[];
}