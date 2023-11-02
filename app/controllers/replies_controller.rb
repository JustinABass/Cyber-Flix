class RepliesController < ApplicationController

    def index
        render json: Reply.all
    end

    def create
        reply = @current_user.replies.create!(reply_params)
        render json: reply, status: :created
      end

      private

      def reply_params
        params.permit( :reply, :review_id )
      end
end
