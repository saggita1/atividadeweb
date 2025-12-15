// src/utils/postFormatter.test.js
import { describe, test, expect } from 'vitest'; // ou 'jest'
import { formatPostData } from './postFormatter';

describe('Funcionalidade: Formatação de Posts', () => {

  // Caso de Sucesso 
  test('deve formatar corretamente um post publicado com título válido', () => {
    const mockPost = {
      id: 1,
      status: 'publish',
      date: '2023-10-15T10:00:00',
      title: { rendered: 'Abertura da SECOMP UFRR' }
    };

    const resultado = formatPostData(mockPost);

    // Verifica se o título e a data formatada estão presentes no HTML retornado
    expect(resultado).toContain('<h1>Abertura da SECOMP UFRR</h1>');
    expect(resultado).toContain('15/10/2023');
  });

  // Caso de Erro 
  test('deve retornar mensagem de erro se o post for rascunho (draft)', () => {
    const mockDraftPost = {
      id: 2,
      status: 'draft', // Status inválido para exibição pública
      date: '2023-10-16T10:00:00',
      title: { rendered: 'Rascunho de Notícia' }
    };

    const resultado = formatPostData(mockDraftPost);

    expect(resultado).toBe('Post não disponível para visualização');
  });
});
