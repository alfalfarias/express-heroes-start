const { query } = require('../../database');
const { HeroModel } = require('./schema');

const create = async function (data = { id, name, description, modified, thumbnailURI, color, team}) {
    const item = await query(async () => {
        const item = new HeroModel(data);
        await item.save();
        return item;
    });
    return item;
}

const getAll = async function ({page, perPage}) {
    const total = await query(() => HeroModel.count());
    const items = await query(async () => {
		const skip = page * perPage;
        const items = await HeroModel.find().skip(skip).limit(perPage);
        return items;
    });
    
    const data = {
        page: page,
        perPage: perPage,
        total: total,
        items: items,
    };
    return data;
}

const getOne = async function ({id}) {
    const item = await query(() => HeroModel.findOne({id: id}));
    return item;
}

const update = async function ({id, data}) {
    const item = await query(() => HeroModel.findOneAndUpdate({id: id}, data, {new: true}));
    return item;
}

const saveColor = async function ({id, color, team}) {
    const data = { id: id, color: color, team: team };
    let item = await query(() => HeroModel.findOne({id: id}));
    if (!item) {
        item = new HeroModel(data);
        await item.save();
    }
    item = await query(() => HeroModel.findOneAndUpdate({id: id}, data, {new: true}));
    return item;
}

const destroy = async function ({id}) {
    const data = await query(() => {
        const data = HeroModel.findOne({id: id});
        data.deleteOne();
        return data;
    });

    return data;
}

const service = {
    create,
    getAll,
    getOne,
    update,
    saveColor,
    destroy,
};

module.exports = {
    service
};