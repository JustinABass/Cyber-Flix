Rails.application.routes.draw do
  post '/signup', to: 'users#create'
 

  resources :movies, only: [ :index ]
  resources :actors, only: [ :index ]
  resources :reviews, only: [ :index ]
  resources :replies, only: [ :index ]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
