class ReviewsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Review.all, status: :ok
  end

  def create
    review = @current_user.reviews.create!(reviews_params)
    render json: review, status: :created
  end

  def update
    review = @current_user.reviews.find(params[:id])
    review.update!(reviews_params)
    render json: review, status: :ok
end

def destroy
  review = @current_user.reviews.find(params[:id])
  review.destroy
  head :no_content
end

  private

  def reviews_params
    params.permit(:review, :movie_id)
  end

end
