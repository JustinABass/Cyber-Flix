Rails.application.routes.draw do
  resources :users, only: [ :update ]
  resources :movies, only: [ :index ]
  resources :actors, only: [ :index ]
  resources :reviews, only: [ :index, :create ]
  resources :replies, only: [ :index, :create ]
  resources :comments, only: [ :index, :create ]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/user_profile', to: 'users#show'
  get '/last', to: 'users#last'


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
