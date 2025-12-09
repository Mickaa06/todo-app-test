// Test unitaire 2 : Vérification des dépendances
test('Dépendances principales existent', () => {
  // Ces modules doivent être installés
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  
  expect(express).toBeDefined();
  expect(mongoose).toBeDefined();
  expect(cors).toBeDefined();
});

test('Structure de l\'application', () => {
  // Vérifier que les fichiers existent
  const fs = require('fs');
  const path = require('path');
  
  expect(fs.existsSync(path.join(__dirname, '../src/server.js'))).toBe(true);
  expect(fs.existsSync(path.join(__dirname, '../package.json'))).toBe(true);
});
