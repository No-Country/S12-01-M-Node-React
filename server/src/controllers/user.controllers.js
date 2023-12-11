import catchAsync from '../helpers/catchAsycn.js';
import { success } from '../helpers/serverResponses.js';
import {
    getAllUsers,
    updateUser,
    deleteUser,
} from '../services/user.service.js';

const getUsers = catchAsync(async (req, res) => {
    const users = await getAllUsers();

    success({
        res,
        message: 'Users retrieved successfully',
        data: users,
    });
});

const updatedUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    const updatedUser = await updateUser(userId, updatedUserData);
    success({
        res,
        message: 'User updated successfully',
        data: updatedUser,
    });
});

const deletedUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    const deactivatedUser = await deleteUser(userId);
    success({
        res,
        message: 'User deactivated successfully',
        data: deactivatedUser,
    });
});

export default {
    getUsers,
    updatedUser,
    deletedUser,
};
