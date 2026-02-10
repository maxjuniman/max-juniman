const API_URL = 'https://max-juniman-api.vercel.app/comentarios';

interface CommentPayload {
  nome: string;
  data: string;
  comentario: string;
}

/**
 * Envia um comentário para a API.
 * Retorna true se o envio foi bem-sucedido.
 */
export async function sendComment(
  nome: string,
  comentario: string,
): Promise<boolean> {
  try {
    const payload: CommentPayload = {
      nome,
      data: new Date().toISOString(),
      comentario,
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch {
    return false;
  }
}
