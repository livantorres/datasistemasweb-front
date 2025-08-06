// Configuración de API para Laravel
/*const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T = any> {
  data: T[]
  current_page: number
  last_page: number
  per_page: number
  total: number
}

class ApiClient {
  private baseURL: string
  private defaultHeaders: HeadersInit

  constructor() {
    this.baseURL = API_BASE_URL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    
    const config: RequestInit = {
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      // Solo mostrar error en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.error('API request failed:', error)
      }
      
      // Retornar respuesta por defecto en lugar de lanzar error
      return {
        data: [] as T,
        success: false,
        message: 'Error de conexión'
      }
    }
  }

  // Métodos HTTP
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = params ? `${endpoint}?${new URLSearchParams(params)}` : endpoint
    return this.request<T>(url, { method: 'GET' })
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }

  // Métodos específicos para la aplicación
  async getInstituciones(params?: Record<string, any>): Promise<ApiResponse<PaginatedResponse>> {
    return this.get<PaginatedResponse>('/instituciones', params)
  }

  async getInstitucion(id: number): Promise<ApiResponse> {
    return this.get(`/instituciones/${id}`)
  }

  async getDiplomas(params?: Record<string, any>): Promise<ApiResponse<PaginatedResponse>> {
    return this.get<PaginatedResponse>('/diplomas', params)
  }

  async getDiploma(id: number): Promise<ApiResponse> {
    return this.get(`/diplomas/${id}`)
  }

  async getRecursos(params?: Record<string, any>): Promise<ApiResponse<PaginatedResponse>> {
    return this.get<PaginatedResponse>('/recursos', params)
  }

  async getRecurso(id: number): Promise<ApiResponse> {
    return this.get(`/recursos/${id}`)
  }

  async enviarContacto(data: {
    nombre: string
    email: string
    telefono?: string
    asunto: string
    mensaje: string
  }): Promise<ApiResponse> {
    return this.post('/contacto', data)
  }

  async getEstadisticas(): Promise<ApiResponse> {
    return this.get('/estadisticas')
  }

  async getDatosInstitucionales(): Promise<ApiResponse> {
    return this.get('/datos-institucionales')
  }
}

// Instancia singleton del cliente API
export const apiClient = new ApiClient()

// Hooks personalizados para React (opcional)
export const useApi = () => {
  return {
    getInstituciones: apiClient.getInstituciones.bind(apiClient),
    getDiplomas: apiClient.getDiplomas.bind(apiClient),
    getRecursos: apiClient.getRecursos.bind(apiClient),
    enviarContacto: apiClient.enviarContacto.bind(apiClient),
    getEstadisticas: apiClient.getEstadisticas.bind(apiClient),
    getDatosInstitucionales: apiClient.getDatosInstitucionales.bind(apiClient),
  }
}

export default apiClient */