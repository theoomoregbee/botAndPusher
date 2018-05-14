export interface IChat {
  id: string;
  displayName: string;
  email: string;
  type: 'bot' | 'human' | 'join';
  message: string;
  createdAt: string;
}
