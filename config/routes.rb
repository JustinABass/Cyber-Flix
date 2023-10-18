Rails.application.routes.draw do
  get 'movies/controller'
  get '/hello', to: 'application#hello_world'

  resources :movies, only: [ :index ]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
