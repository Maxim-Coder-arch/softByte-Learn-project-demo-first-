import { IBlock } from "../types/data.self.type";
import { IGridItem } from "../types/gridItem.types";

export const mapBlocksToGrid = (blocks: IBlock[]): IGridItem[] =>
  blocks.map(block => ({
    title: block.title,
    description: block.text,
    list: block.points
  }));
