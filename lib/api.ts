// Configuración de API para Laravel
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// --- Interfaces de datos de tu aplicación ---

export interface Institucion {
  id: number | string;
  nombre: string;
  departamento: string;
  extension?: string;
  db_name?: string;
  url_plataforma?: string;
}

export interface Diploma {
  id: number | string;
  // Agrega los campos de tu modelo Diploma
}

export interface Recurso {
  id: number | string;
  // Agrega los campos de tu modelo Recurso
}

export interface ContactoData {
  nombre: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
}

// Para Estadisticas y DatosInstitucionales, si no tienes la estructura, puedes usar `object`
// Es mejor que una interfaz vacía porque indica que esperas un objeto no vacío.
export type Estadisticas = object;
export type DatosInstitucionales = object;

// --- Interfaces de la respuesta de la API ---

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('API request failed:', error);
      }

      return {
        data: {} as T, // Se cambió a objeto vacío para ser más genérico
        success: false,
        message: 'Error de conexión',
      };
    }
  }

  // --- Métodos HTTP ---

  async get<T>(endpoint: string, params?: Record<string, string | number>): Promise<ApiResponse<T>> {
    const url = params ? `${endpoint}?${new URLSearchParams(params as Record<string, string>)}` : endpoint;
    return this.request<T>(url, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: object): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: object): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: object): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // --- Métodos específicos para la aplicación ---

  async getInstituciones(params?: Record<string, string | number>): Promise<ApiResponse<PaginatedResponse<Institucion>>> {
    return this.get<PaginatedResponse<Institucion>>('/instituciones', params);
  }

  async getInstitucion(id: number): Promise<ApiResponse<Institucion>> {
    return this.get<Institucion>(`/instituciones/${id}`);
  }

  async getDiplomas(params?: Record<string, string | number>): Promise<ApiResponse<PaginatedResponse<Diploma>>> {
    return this.get<PaginatedResponse<Diploma>>('/diplomas', params);
  }

  async getDiploma(id: number): Promise<ApiResponse<Diploma>> {
    return this.get<Diploma>(`/diplomas/${id}`);
  }

  async getRecursos(params?: Record<string, string | number>): Promise<ApiResponse<PaginatedResponse<Recurso>>> {
    return this.get<PaginatedResponse<Recurso>>('/recursos', params);
  }

  async getRecurso(id: number): Promise<ApiResponse<Recurso>> {
    return this.get<Recurso>(`/recursos/${id}`);
  }

  async enviarContacto(data: ContactoData): Promise<ApiResponse<object>> {
    return this.post<object>('/contacto', data);
  }

  async getEstadisticas(): Promise<ApiResponse<Estadisticas>> {
    return this.get<Estadisticas>('/estadisticas');
  }

  async getDatosInstitucionales(): Promise<ApiResponse<DatosInstitucionales>> {
    return this.get<DatosInstitucionales>('/datos-institucionales');
  }
}

// Instancia singleton del cliente API
export const apiClient = new ApiClient();

// Hooks personalizados para React (opcional)
export const useApi = () => {
  return {
    getInstituciones: apiClient.getInstituciones.bind(apiClient),
    getDiplomas: apiClient.getDiplomas.bind(apiClient),
    getRecursos: apiClient.getRecursos.bind(apiClient),
    enviarContacto: apiClient.enviarContacto.bind(apiClient),
    getEstadisticas: apiClient.getEstadisticas.bind(apiClient),
    getDatosInstitucionales: apiClient.getDatosInstitucionales.bind(apiClient),
  };
};

export default apiClient;