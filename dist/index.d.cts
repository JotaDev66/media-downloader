interface WhatsAppMediaMessage {
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
interface WhatsAppPayload {
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
type MediaType = 'audio' | 'image' | 'video' | 'document' | 'sticker';
interface DecryptionResult {
    outputPath: string;
    mediaType: MediaType;
    mimeType: string;
    fileName: string;
}

declare function decryptWhatsAppMedia(payload: WhatsAppPayload, outputDir?: string): Promise<DecryptionResult>;

export { type DecryptionResult, type MediaType, type WhatsAppMediaMessage, type WhatsAppPayload, decryptWhatsAppMedia };
