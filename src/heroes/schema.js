const { model, Schema } = require('mongoose');

const heroSchema = new Schema({
    id: String,
    name: String,
    description: String,
    modified: String,
    thumbnailURI: String,
    resourceURI: String,
    color: String,
});

const HERO_MODEL_NAME = 'Heroe';
const HeroModel = model(HERO_MODEL_NAME, heroSchema );

module.exports = {
    heroSchema,
    HERO_MODEL_NAME,
    HeroModel,
}