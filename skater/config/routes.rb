Rails.application.routes.draw do
  resources :reviews
  resources :skates, except: :index
  get ":level", to: "skates#index" 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
