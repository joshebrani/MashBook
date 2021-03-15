class Api::SessionsController < ApplicationController
    before_action :require_logged_in, except: [:create]

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ['Invalid Email or Password'], status: 401
        end
    end


    def destroy
        @user = current_user
        if @user
            logout!
            render 'api/users/show'
        else
            render json: ['Nobody Signed in'], status: 404
        end
    end
end
