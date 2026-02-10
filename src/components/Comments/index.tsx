import { useState, type FormEvent } from 'react';
import { FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { sendComment } from '../../services/comments';
import {
  CommentsSection,
  SectionSubtitle,
  SectionTitle,
  FormWrapper,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
  SuccessIcon,
  SuccessText,
  SuccessTitle,
  SuccessDescription,
  ErrorMessage,
} from './styles';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Comments() {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nome.trim() || !comentario.trim()) return;

    setStatus('loading');

    const success = await sendComment(nome.trim(), comentario.trim());

    if (success) {
      setStatus('success');
      setNome('');
      setComentario('');
    } else {
      setStatus('error');
    }
  }

  return (
    <CommentsSection id="comments">
      <SectionSubtitle>Deixe sua mensagem</SectionSubtitle>
      <SectionTitle>Comentários</SectionTitle>

      <FormWrapper>
        {status === 'success' ? (
          <SuccessMessage>
            <SuccessIcon>
              <FaCheckCircle />
            </SuccessIcon>
            <SuccessText>
              <SuccessTitle>Comentário enviado com sucesso!</SuccessTitle>
              <SuccessDescription>
                Obrigado pela sua mensagem! <br />
                Seu comentário será avaliado antes de ser publicado.
              </SuccessDescription>
            </SuccessText>
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="comment-name">Nome</Label>
              <Input
                id="comment-name"
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                disabled={status === 'loading'}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="comment-text">Comentário</Label>
              <TextArea
                id="comment-text"
                placeholder="Escreva seu comentário..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                disabled={status === 'loading'}
                required
              />
            </InputGroup>

            {status === 'error' && (
              <ErrorMessage>
                Não foi possível enviar o comentário. Tente novamente mais tarde.
              </ErrorMessage>
            )}

            <SubmitButton
              type="submit"
              disabled={status === 'loading' || !nome.trim() || !comentario.trim()}
              $loading={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <FaSpinner /> Enviando...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Enviar Comentário
                </>
              )}
            </SubmitButton>
          </Form>
        )}
      </FormWrapper>
    </CommentsSection>
  );
}
