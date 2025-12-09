// Test unitaire 1 : Opérations mathématiques
test('Addition basique', () => {
  expect(1 + 1).toBe(2);
  expect(2 + 2).toBe(4);
});

test('Multiplication basique', () => {
  expect(3 * 3).toBe(9);
  expect(5 * 0).toBe(0);
});

test('Vérification environnement de test', () => {
  expect(process.env.NODE_ENV).toBe('test');
});
