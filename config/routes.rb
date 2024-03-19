Rails.application.routes.draw do
  resources :users, only: [ :index, :update, :destroy ]
  resources :movies, only: [ :index ]
  resources :actors, only: [ :index ]
  resources :reviews, only: [ :index, :create, :update, :destroy]
  resources :replies, only: [ :index, :create, :update , :destroy]
  resources :comments, only: [ :create, :update ]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/user_profile', to: 'users#show'

  get '/movie_shuffle', to: 'movies#shuffle'



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
