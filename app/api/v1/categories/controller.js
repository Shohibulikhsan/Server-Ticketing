const {StatusCodes}= require('http-status-codes')
const {getAllCategories, createCategories, getOneCategories, updateCategories,deleteCategories} = require ('../../../services/mongoose/categories');

const create = async (req, res, next) => {
    try {
        const result = await createCategories(req);
        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOneCategories(req);

        if (!result) {
            return res.status(404).json({ message: "Id categories tidak ditemukan" });
        }
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        
        const result = await updateCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    index,
    create,
    find,
    update,
    destroy,
};
