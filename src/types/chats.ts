export type User = {
  id: number;
  email: string;
};

export type ChatRoom = {
  id: number;
  user1: User;
  user2: User;
  title: string;
};

export type MessageType = 'ENTER' | 'TALK' | 'EXIT' | 'IMAGE' | 'TEXT';

export type ChatMessage = {
  id: number;
  chatRoom: ChatRoom;
  sender: User;
  content: string;
  imageUrl?: string;
  timestamp: string; // $date-time // YYYY-MM-DDTHH:mm:ss.sssZ
  messageType: MessageType;
};
