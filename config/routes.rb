Rails.application.routes.draw do

  resources :movies, only: [ :index ]
  resources :actors, only: [ :index ]
  resources :reviews, only: [ :index ]
  resources :replies, only: [ :index ]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/user_data', to: 'users#show'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
