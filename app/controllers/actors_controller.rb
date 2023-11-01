class ActorsController < ApplicationController
  # skip_before_action :authorize, only: :index
  def index
    render json: Actor.all, status: :ok
  end

end
