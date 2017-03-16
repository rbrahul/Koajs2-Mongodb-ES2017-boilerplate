import User from './../models/users';

export const getAllUsers = async function (ctx, next) {
    try {
        const users = await User.find({});
        if (!users) {
            ctx.body = {
                message: 'No User found',
                success: true,
                status: 'NO_USER_FOUND'
            };
            ctx.status = 200;
        } else {
            ctx.body = {
                success: true,
                data: users
            };
            ctx.status = 200;
        }
    } catch (e) {
        if (err === 404 || err.name === 'CastError') {
            ctx.throw(404)
        }

    }
};

export const creatNewUser = async (ctx, next) => {
    const user = new User({
        user_name: ctx.request.body.user_name,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
        display_name: ctx.request.body.display_name,
        phone: ctx.request.body.phone,
        address: ctx.request.body.address,
        avatar: ctx.request.body.avatar,
    });

    try {
        await user.save();
        ctx.status = 201;
        ctx.body = {
            message: "User has been saved",
            success: true
        };

    } catch (err) {
        ctx.throw(422, err.message)
    }

};
