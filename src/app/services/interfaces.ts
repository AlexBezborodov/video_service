export interface User {
  name: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  id: number;
  idToken: string;
  authToken: string;
}
export interface VideoList {
  id: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
  };
}
