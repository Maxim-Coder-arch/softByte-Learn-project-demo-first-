export interface IArticle {
  slug: string;
  title: string;
  description: string;
  content: {
    type: "paragraph" | "subtitle";
    text: string;
  }[];
}
