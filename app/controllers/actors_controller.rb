class ActorsController < ApplicationController

  def index
    render json: Actor.all, status: :ok
  end

end
