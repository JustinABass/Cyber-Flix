class ActorsController < ApplicationController

  def index
    render json: Actor.all.order('actor ASC'), status: :ok
  end

end
