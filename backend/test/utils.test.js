// Test unitaire 3 : Fonctions utilitaires
const { formatDate, validateTodo } = require('../src/utils');

describe('Fonctions utilitaires', () => {
  test('formatDate retourne une string', () => {
    const date = new Date();
    const formatted = formatDate(date);
    expect(typeof formatted).toBe('string');
    expect(formatted.length).toBeGreaterThan(0);
  });
  
  test('validateTodo valide un todo correct', () => {
    const validTodo = { title: 'Test', description: 'Description' };
    expect(validateTodo(validTodo)).toBe(true);
  });
  
  test('validateTodo rejette un todo sans titre', () => {
    const invalidTodo = { description: 'Pas de titre' };
    expect(validateTodo(invalidTodo)).toBe(false);
  });
});

// Mock des utilitaires pour les tests
module.exports = {
  formatDate: (date) => date.toISOString(),
  validateTodo: (todo) => {
    return todo.title && todo.title.trim().length > 0;
  }
};
