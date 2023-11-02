class ReviewsController < ApplicationController

  def index
    render json: Review.all
  end

  def create
    review = @current_user.reviews.create!(reviews_params)
    render json: review, status: :created
  end

  private

  def reviews_params
    params.permit(:review, :movie_id)
  end

end
