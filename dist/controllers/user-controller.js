"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({
        msg: "getUsers",
        users,
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.json({
            msg: "getUser",
            user,
        });
    }
    else {
        res.status(404).json({ msg: "Not user found." });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { name, email } = body;
        const data = { name, email };
        yield user_1.default.create(data, { ignoreDuplicates: false }).then((user) => {
            return res.json({ msg: "Post User", user });
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Talk to an administrator." });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            res.status(400).json({ msg: "No user detected with id: " + id });
        }
        else {
            yield user.update({ name, email });
            res.json({ msg: "PutUser", user });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Talk to an administrator." });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            res.status(400).json({ msg: "No user detected with id: " + id });
        }
        else {
            yield user.update({ state: 0 });
            res.json({ msg: "Delete User.", user });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Talk to an administrator." });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user-controller.js.map