class Api::UsersController < ApplicationController
    before_action :require_logged_in, except: [:create]

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            # render json: @user.errors.full_messages, status: 422
            render json: ["Input field(s) cannot be blank", "Password must be at least 6 characters", "Email must be unique"], status: 422
        end
    end

    def update
        @user = current_user

        if @user.update(user_params)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])
        if @user.destroy
            render :show
        else
            render json: ['User could not be found']
        end
    end


    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :bio, :city, :work, :school, :gender)
    end
end
