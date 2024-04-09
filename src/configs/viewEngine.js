import express from 'express';

export const configViewEngine = (app) => {
  app.use(express.static('~/public'));
  app.set('view engine', 'ejs');
  app.set('views', '~/public');
};
