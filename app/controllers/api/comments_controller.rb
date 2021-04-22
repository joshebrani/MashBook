class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment.destroy
            render json: :show
        else
            render json:['Comment could not be found'], status: 422
        end
    end


    def comment_params
        params.require(:comment).permit(:comment, :post_id, :comment_author_id)
    end
end
