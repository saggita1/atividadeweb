// src/utils/postFormatter.js

/**
 * Formata os dados de um post para exibição.
 * Aplica conceitos de Clean Code e ES6+.
 */
export const formatPostData = (post) => {
  // Guard Clause: Verifica se o post existe
  if (!post) {
    return 'Dados inválidos';
  }

  // Destructuring para extrair dados (Assumindo estrutura da API WP)
  const { status, date, title } = post;
  
  // Guard Clause: Verifica status e integridade do título
  const titleText = title?.rendered; // Optional chaining para segurança extra
  
  if (status !== 'publish' || !titleText) {
    return 'Post não disponível para visualização';
  }

  // Template Literals para retorno limpo
  return `
    <article class="post-preview">
      <h1>${titleText}</h1>
      <time>Publicado em: ${new Date(date).toLocaleDateString('pt-BR')}</time>
    </article>
  `.trim();
};
