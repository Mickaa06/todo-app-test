// Fichier utilitaire pour l'application TODO
module.exports = {
  formatDate: (date) => {
    if (!date) return new Date().toISOString();
    return date.toISOString();
  },
  
  validateTodo: (todo) => {
    if (!todo || typeof todo !== 'object') return false;
    if (!todo.title || todo.title.trim().length === 0) return false;
    return true;
  },
  
  healthCheck: () => {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'todo-backend'
    };
  }
};
