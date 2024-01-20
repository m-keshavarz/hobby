export type PostsDataType = {
  recentPosts: Array<{
    title: string;
    date: Date;
    tags: Array<string>;
    summary: string;
  }>;
};
