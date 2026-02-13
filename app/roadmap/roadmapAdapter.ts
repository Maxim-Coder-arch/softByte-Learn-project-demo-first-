import { ISection } from "../types/data.roadmap.type";

import { IGridItem } from "../types/gridItem.types";

export const mapSectionsToGrid = (sections: ISection[]): IGridItem[] =>
  sections.map(section => ({
    title: section.title,
    description: section.description,
    list: section.details
  }));
