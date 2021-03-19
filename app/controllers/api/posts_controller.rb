class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def index
        @post = Post.all
        render :index
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.destroy
            render :show
        else
            render json: ['Post could not be found']
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :post_author_id, :wall_id)
    end

end
