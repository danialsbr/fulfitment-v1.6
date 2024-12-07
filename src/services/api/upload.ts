import { api } from './config';
import type { ApiResponse } from './types';

export const uploadApi = {
  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await api.post<ApiResponse>('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (!response.success) {
        throw new Error(response.message || 'خطا در آپلود فایل');
      }
      
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('خطا در آپلود فایل');
    }
  },
};