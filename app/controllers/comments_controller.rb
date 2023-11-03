class CommentsController < ApplicationController

    def create
        review = @current_user.reviews.create!(reviews_params)
        render json: review, status: :created
      end

      private

      def reply_params
        params.permit( :comment, :reply_id )
      end

end
