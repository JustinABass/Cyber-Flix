class RepliesController < ApplicationController
  skip_before_action :authorize, only: :index

    def index
        render json: Reply.all, status: :ok
    end

    def create
        reply = @current_user.replies.create!(reply_params)
        render json: reply, status: :created
      end

      def update
        reply = @current_user.replies.find(params[:id])
        reply.update!(reply_params)
        render json: reply, status: :ok
    end

    def destroy
      reply = @current_user.replies.find(params[:id])
      reply.destroy
      head :no_content
    end

      private

      def reply_params
        params.permit( :reply, :review_id )
      end
end
