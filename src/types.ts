export interface WhatsAppMediaMessage {
  url?: string;
  URL?: string;
  mimetype?: string;
  mediaKey: string;
  fileLength?: string;
  fileName?: string;
  fileSha256?: string;
  fileEncSha256?: string;
  directPath?: string;
}

export interface WhatsAppPayload {
  message: {
    audioMessage?: WhatsAppMediaMessage;
    imageMessage?: WhatsAppMediaMessage;
    videoMessage?: WhatsAppMediaMessage;
    documentMessage?: WhatsAppMediaMessage;
    stickerMessage?: WhatsAppMediaMessage;
    documentWithCaptionMessage?: {
      message?: {
        documentMessage?: WhatsAppMediaMessage;
      };
    };
  };
}

export type MediaType = 'audio' | 'image' | 'video' | 'document' | 'sticker';

export interface DecryptionResult {
  outputPath: string;
  mediaType: MediaType;
  mimeType: string;
  fileName: string;
}
