export interface IChat {
  id: string;
  displayName: string;
  email: string;
  type: 'bot' | 'human' | 'joined';
  message: string;
  createdAt: string;
  isMe: boolean;
}
