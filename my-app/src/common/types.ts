export type Card = {
  img?: string;
  header: string;
  description: string;
  date: string;
  id: number;
  likeStatus?: string;
  saved?: boolean;
};

export enum Theme {
  like = "Like",
  Dislike = "Dislike",
}
